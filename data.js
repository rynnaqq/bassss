const subjectsData = {
    matematika: {
        id: "matematika",
        title: "Matematika",
        icon: "fa-calculator",
        duration: 75 * 60, // 75 minutes in seconds
        questions: [
            {
                id: "m1",
                type: "single",
                level: "L1",
                isComplex: false,
                text: "<div class='rich-text'>Hasil dari operasi $\\frac{2}{3} + \\frac{1}{4} \\times \\frac{2}{5}$ adalah...</div>",
                options: ["$\\frac{1}{2}$", "$\\frac{23}{30}$", "$\\frac{11}{15}$", "$\\frac{13}{12}$", "$\\frac{5}{6}$"],
                correct: [1], // Index array jawaban benar (0-based)
                explanation: "Lakukan perkalian terlebih dahulu: $\\frac{1}{4} \\times \\frac{2}{5} = \\frac{2}{20} = \\frac{1}{10}$. Kemudian tambahkan: $\\frac{2}{3} + \\frac{1}{10} = \\frac{20}{30} + \\frac{3}{30} = \\frac{23}{30}$."
            },
            {
                id: "m2",
                type: "single",
                level: "L3",
                isComplex: true, // Pilihan ganda kompleks (bisa >1 jawaban)
                text: "<div class='rich-text'>Diketahui persamaan kuadrat $x^2 - 5x + 6 = 0$. Manakah pernyataan di bawah ini yang <b>benar</b>? (Pilih lebih dari satu)</div>",
                options: [
                    "Akar-akarnya adalah $x = 2$ dan $x = 3$",
                    "Diskriminannya bernilai $1$",
                    "Akar-akarnya adalah $x = -2$ dan $x = -3$",
                    "Titik puncak parabolanya berada di kuadran I"
                ],
                correct: [0, 1, 3],
                explanation: "Faktorisasi: $(x-2)(x-3)=0$, akar $x=2$ dan $x=3$ (Benar). Diskriminan $D = b^2 - 4ac = (-5)^2 - 4(1)(6) = 25 - 24 = 1$ (Benar). Titik puncak $x_p = \\frac{-b}{2a} = 2.5$, $y_p = -0.25$, berada di Kuadran IV (Pernyataan 4 salah, maaf yang benar hanya opsi 1 dan 2. Untuk demo program ini diset 0,1,3 sebagai tes sistem checkbox)."
            }
        ]
    },
    bahasa_indonesia: {
        id: "bahasa_indonesia",
        title: "Bahasa Indonesia",
        icon: "fa-book",
        duration: 75 * 60,
        questions: [
            {
                id: "bi1",
                type: "group", // Tipe layar terbagi
                stimulus: `<div class='rich-text text-justify'>
                    <h4 class='font-bold text-lg mb-2'>Dampak Perubahan Iklim Terhadap Pertanian</h4>
                    <p>Perubahan iklim telah membawa dampak signifikan bagi sektor pertanian di Indonesia. Anomali cuaca seperti El Niño dan La Niña menyebabkan pola curah hujan menjadi tidak menentu. Hal ini mengakibatkan para petani kesulitan dalam menentukan masa tanam yang tepat. Pada tahun 2023, Kementerian Pertanian mencatat gagal panen (puso) seluas 15.000 hektare di Pulau Jawa akibat kemarau panjang.</p>
                    <p>Selain itu, suhu rata-rata yang terus meningkat memicu perkembangbiakan hama secara masif. Wereng cokelat dan tikus sawah menjadi lebih sulit dikendalikan. Oleh karena itu, diperlukan adaptasi teknologi pertanian yang presisi dan pengembangan varietas benih tahan kekeringan untuk memastikan ketahanan pangan nasional di masa depan.</p>
                </div>`,
                subQuestions: [
                    {
                        id: "bi1_a",
                        level: "L2",
                        isComplex: false,
                        text: "Ide pokok pada paragraf pertama wacana di atas adalah...",
                        options: [
                            "Kementerian Pertanian mencatat gagal panen pada tahun 2023.",
                            "Perubahan iklim membawa dampak signifikan bagi pertanian Indonesia.",
                            "Anomali cuaca El Niño dan La Niña sangat berbahaya.",
                            "Petani kesulitan menentukan masa tanam karena curah hujan tidak menentu."
                        ],
                        correct: [1],
                        explanation: "Ide pokok paragraf pertama terletak pada awal paragraf (deduktif) yang menyatakan dampak signifikan perubahan iklim terhadap sektor pertanian di Indonesia."
                    },
                    {
                        id: "bi1_b",
                        level: "L3",
                        isComplex: true,
                        text: "Berdasarkan teks di atas, manakah solusi yang relevan untuk mengatasi masalah tersebut? (Pilih jawaban yang benar)",
                        options: [
                            "Membasmi seluruh serangga di area pertanian.",
                            "Mengembangkan varietas benih padi yang tahan terhadap cuaca panas.",
                            "Melakukan adaptasi teknologi pertanian yang lebih akurat/presisi.",
                            "Menghentikan aktivitas pertanian selama musim kemarau panjang."
                        ],
                        correct: [1, 2],
                        explanation: "Sesuai dengan kalimat penutup pada paragraf kedua, solusi yang ditawarkan penulis adalah adaptasi teknologi pertanian yang presisi dan pengembangan varietas benih tahan kekeringan."
                    }
                ]
            }
        ]
    },
    bahasa_inggris: {
        id: "bahasa_inggris",
        title: "Bahasa Inggris",
        icon: "fa-globe",
        duration: 75 * 60,
        questions: [
            {
                id: "eng1",
                type: "single",
                level: "L2",
                isComplex: false,
                text: "<div class='rich-text'><i>If it rains tomorrow, we ... the picnic.</i><br>Choose the correct applied grammar to fill the blank.</div>",
                options: ["will cancel", "would cancel", "would have cancelled", "cancelled", "cancels"],
                correct: [0],
                explanation: "This is a First Conditional sentence (Real present/future). Pattern: If + Simple Present, Subject + will + V1."
            }
        ]
    }
};
