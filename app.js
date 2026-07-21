const app = {
    state: {
        currentSubject: null,
        questionsList: [], // Flat list of questions to render
        currentIndex: 0,
        userAnswers: {}, // Format: { questionId: [selected_indexes] }
        timerInterval: null,
        timeLeft: 0
    },

    init() {
        this.renderHome();
    },

    renderHome() {
        document.getElementById('screen-home').classList.remove('hidden');
        document.getElementById('screen-exam').classList.add('hidden');
        document.getElementById('screen-review').classList.add('hidden');
        document.getElementById('nav-timer').classList.add('hidden');

        const container = document.getElementById('subject-cards');
        container.innerHTML = '';

        Object.values(subjectsData).forEach(subject => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition cursor-pointer text-center flex flex-col items-center justify-center";
            card.onclick = () => this.startExam(subject.id);
            card.innerHTML = `
                <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
                    <i class="fas ${subject.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800">${subject.title}</h3>
                <p class="text-sm text-gray-500 mt-2">75 Menit • ${this.countTotalQuestions(subject)} Soal</p>
                <button class="mt-4 bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-lg w-full hover:bg-blue-600 hover:text-white transition">Mulai Ujian</button>
            `;
            container.appendChild(card);
        });
    },

    countTotalQuestions(subject) {
        let count = 0;
        subject.questions.forEach(q => {
            if (q.type === 'group') count += q.subQuestions.length;
            else count += 1;
        });
        return count;
    },

    startExam(subjectId) {
        const subject = subjectsData[subjectId];
        this.state.currentSubject = subject;
        this.state.questionsList = subject.questions; // Keep structure intact for rendering
        this.state.currentIndex = 0;
        this.state.userAnswers = {};
        this.state.timeLeft = subject.duration;

        document.getElementById('screen-home').classList.add('hidden');
        document.getElementById('screen-exam').classList.remove('hidden');
        document.getElementById('nav-timer').classList.remove('hidden');
        document.getElementById('exam-title').innerText = subject.title;

        this.startTimer();
        this.renderQuestionView();
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.updateTimerDisplay();
        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.submitExam();
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const m = Math.floor(this.state.timeLeft / 60).toString().padStart(2, '0');
        const s = (this.state.timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('time-display').innerText = `${m}:${s}`;
    },

    renderQuestionView() {
        const item = this.state.questionsList[this.state.currentIndex];
        const container = document.getElementById('question-container');
        container.innerHTML = '';

        if (item.type === 'group') {
            // Split screen layout
            const splitWrapper = document.createElement('div');
            splitWrapper.className = 'split-screen-container';

            // Left: Stimulus
            const stimulusHtml = `
                <div class="stimulus-panel">
                    <div class="mb-4 inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-bold">Wacana Terkait</div>
                    ${item.stimulus}
                </div>
            `;

            // Right: Sub Questions
            let questionsHtml = `<div class="space-y-6">`;
            item.subQuestions.forEach((sq, idx) => {
                questionsHtml += this.buildQuestionHTML(sq, `Bagian ${idx + 1}`);
            });
            questionsHtml += `</div>`;

            splitWrapper.innerHTML = stimulusHtml + questionsHtml;
            container.appendChild(splitWrapper);

        } else {
            // Standard Layout
            container.innerHTML = this.buildQuestionHTML(item, `Soal Nomor ${this.state.currentIndex + 1}`);
        }

        // Update Nav Buttons
        document.getElementById('btn-prev').disabled = this.state.currentIndex === 0;
        
        const isLast = this.state.currentIndex === this.state.questionsList.length - 1;
        const btnNext = document.getElementById('btn-next');
        if (isLast) {
            btnNext.style.display = 'none';
        } else {
            btnNext.style.display = 'block';
        }

        document.getElementById('question-indicator').innerText = `Bagian ${this.state.currentIndex + 1} dari ${this.state.questionsList.length}`;

        // Re-render math equations
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    },

    buildQuestionHTML(q, titleTag) {
        const answers = this.state.userAnswers[q.id] || [];
        const inputType = q.isComplex ? 'checkbox' : 'radio';
        const instruction = q.isComplex ? '<span class="text-sm font-normal text-gray-500 ml-2">(Pilih lebih dari satu)</span>' : '';
        
        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
            const isChecked = answers.includes(optIdx) ? 'checked' : '';
            optionsHtml += `
                <label class="option-label block relative border rounded-lg p-4 mb-3">
                    <input type="${inputType}" name="q_${q.id}" value="${optIdx}" ${isChecked} 
                           onchange="app.handleAnswer('${q.id}', ${optIdx}, ${q.isComplex})"
                           class="absolute w-0 h-0 opacity-0">
                    <div class="flex items-start">
                        <div class="w-6 h-6 flex-shrink-0 border-2 rounded-sm flex items-center justify-center mr-3 mt-0.5
                             ${q.isComplex ? 'rounded-md' : 'rounded-full'} ${isChecked ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}">
                            <i class="fas fa-check text-white text-xs ${isChecked ? 'block' : 'hidden'}"></i>
                        </div>
                        <div class="flex-1 rich-text text-gray-800 mt-0.5">${opt}</div>
                    </div>
                </label>
            `;
        });

        const levelColors = { 'L1': 'bg-green-100 text-green-800', 'L2': 'bg-yellow-100 text-yellow-800', 'L3': 'bg-red-100 text-red-800' };
        const levelBadge = `<span class="text-xs px-2 py-1 rounded font-bold ${levelColors[q.level]} ml-2">${q.level}</span>`;

        return `
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center mb-4">
                    <h3 class="font-bold text-gray-700">${titleTag}</h3>
                    ${levelBadge}
                </div>
                <div class="text-lg text-gray-900 mb-6 font-medium leading-relaxed">${q.text} ${instruction}</div>
                <div>${optionsHtml}</div>
            </div>
        `;
    },

    handleAnswer(qId, optIdx, isComplex) {
        if (!this.state.userAnswers[qId]) {
            this.state.userAnswers[qId] = [];
        }

        if (isComplex) {
            const idx = this.state.userAnswers[qId].indexOf(optIdx);
            if (idx > -1) {
                this.state.userAnswers[qId].splice(idx, 1);
            } else {
                this.state.userAnswers[qId].push(optIdx);
            }
        } else {
            this.state.userAnswers[qId] = [optIdx];
        }
        
        // Re-render strictly the inputs state visually without fully reloading DOM
        this.renderQuestionView(); 
    },

    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.renderQuestionView();
        }
    },

    nextQuestion() {
        if (this.state.currentIndex < this.state.questionsList.length - 1) {
            this.state.currentIndex++;
            this.renderQuestionView();
        }
    },

    submitExam() {
        if (this.state.timeLeft > 0) {
            const confirmSubmit = confirm("Apakah Anda yakin ingin menyelesaikan ujian sekarang?");
            if (!confirmSubmit) return;
        }

        clearInterval(this.state.timerInterval);
        this.evaluateExam();
    },

    evaluateExam() {
        let totalQuestions = 0;
        let correctCount = 0;
        const reviewData = [];

        this.state.questionsList.forEach(item => {
            if (item.type === 'group') {
                item.subQuestions.forEach(sq => {
                    totalQuestions++;
                    const result = this.checkAnswer(sq.id, sq.correct);
                    if(result) correctCount++;
                    reviewData.push({ q: sq, isCorrect: result, stimulus: item.stimulus });
                });
            } else {
                totalQuestions++;
                const result = this.checkAnswer(item.id, item.correct);
                if(result) correctCount++;
                reviewData.push({ q: item, isCorrect: result });
            }
        });

        const score = Math.round((correctCount / totalQuestions) * 100);
        
        // Render View
        document.getElementById('screen-exam').classList.add('hidden');
        document.getElementById('nav-timer').classList.add('hidden');
        document.getElementById('screen-review').classList.remove('hidden');

        document.getElementById('review-subject').innerText = this.state.currentSubject.title;
        document.getElementById('final-score').innerText = score;
        document.getElementById('count-correct').innerText = correctCount;
        document.getElementById('count-wrong').innerText = totalQuestions - correctCount;

        this.renderReviewList(reviewData);
    },

    checkAnswer(qId, correctArr) {
        const userArr = this.state.userAnswers[qId] || [];
        if (userArr.length !== correctArr.length) return false;
        
        // Sort arrays and compare
        const sortedUser = [...userArr].sort();
        const sortedCorrect = [...correctArr].sort();
        return sortedUser.every((val, index) => val === sortedCorrect[index]);
    },

    renderReviewList(reviewData) {
        const container = document.getElementById('review-container');
        container.innerHTML = '';

        reviewData.forEach((item, index) => {
            const userAnsArr = this.state.userAnswers[item.q.id] || [];
            let optionsHtml = '<ul class="mt-4 space-y-2">';
            
            item.q.options.forEach((opt, optIdx) => {
                const isUserChoice = userAnsArr.includes(optIdx);
                const isCorrectChoice = item.q.correct.includes(optIdx);
                
                let icon = '';
                let bgClass = 'bg-gray-50';
                let borderClass = 'border-gray-200';

                if (isCorrectChoice) {
                    bgClass = 'bg-green-50'; borderClass = 'border-green-400';
                    icon = '<i class="fas fa-check text-green-500 mr-2"></i>';
                } else if (isUserChoice && !isCorrectChoice) {
                    bgClass = 'bg-red-50'; borderClass = 'border-red-400';
                    icon = '<i class="fas fa-times text-red-500 mr-2"></i>';
                }

                optionsHtml += `
                    <li class="flex items-center p-3 border rounded ${bgClass} ${borderClass}">
                        ${icon} ${isUserChoice && isCorrectChoice ? '<span class="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded mr-2">Jawaban Anda</span>' : ''}
                        ${isUserChoice && !isCorrectChoice ? '<span class="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded mr-2">Jawaban Anda</span>' : ''}
                        <div class="rich-text">${opt}</div>
                    </li>
                `;
            });
            optionsHtml += '</ul>';

            let stimulusHtml = '';
            if (item.stimulus) {
                stimulusHtml = `<div class="bg-gray-100 p-4 rounded text-sm mb-4 border border-gray-300 max-h-40 overflow-y-auto">${item.stimulus}</div>`;
            }

            const card = document.createElement('div');
            card.className = `bg-white p-6 rounded-lg shadow-sm border-l-4 ${item.isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`;
            card.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold text-lg">Soal ${index + 1} ${item.isCorrect ? '<span class="text-green-500 ml-2"><i class="fas fa-check-circle"></i> Benar</span>' : '<span class="text-red-500 ml-2"><i class="fas fa-times-circle"></i> Salah</span>'}</h4>
                    <span class="text-xs px-2 py-1 bg-gray-200 rounded font-bold">${item.q.level}</span>
                </div>
                ${stimulusHtml}
                <div class="text-gray-800 font-medium text-lg mb-2 rich-text">${item.q.text}</div>
                ${optionsHtml}
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h5 class="font-bold text-blue-800 mb-2"><i class="fas fa-lightbulb mr-2"></i>Pembahasan:</h5>
                    <div class="text-blue-900 rich-text overflow-x-auto break-words">${item.q.explanation}</div>
                    
                </div>
            `;
            container.appendChild(card);
        });

        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    },

    goHome() {
        this.renderHome();
    }
};

// Initialize App on Load
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
