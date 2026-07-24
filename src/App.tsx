import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Konsultasi Infrastruktur & AI Enterprise');
  const [modalForm, setModalForm] = useState({
    name: '',
    email: '',
    notes: ''
  });
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleOpenConsultation = (subject: string = '') => {
    if (subject) {
      setModalSubject(subject);
    }
    setConsultationModalOpen(true);
    setModalSuccess(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.email) return;
    setModalSuccess(true);
    setTimeout(() => {
      setModalForm({ name: '', email: '', notes: '' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#CCCCCC] font-sans antialiased selection:bg-[#A5A5A5] selection:text-[#121212]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <About />
        <Services onOpenConsultation={(svcTitle) => handleOpenConsultation(svcTitle)} />
        <Portfolio onOpenConsultation={(projTitle) => handleOpenConsultation(projTitle)} />
        <Contact initialSubject={modalSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#1A1A1A] border border-[#A5A5A5] rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#121212] text-[#7F7F7F] hover:text-[#F2F2F2] border border-[#595959] transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] font-mono text-[#A5A5A5] uppercase tracking-wider block mb-1">
                AETHEL DYNAMICS B2B
              </span>
              <h3 className="text-xl font-bold text-[#F2F2F2]">Mulai Konsultasi Strategis</h3>
              <p className="text-xs text-[#7F7F7F] mt-1">
                Subjek: <span className="text-[#CCCCCC] font-medium">{modalSubject}</span>
              </p>
            </div>

            {modalSuccess ? (
              <div className="py-8 text-center space-y-3 bg-[#121212] border border-[#A5A5A5] rounded-lg p-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-[#F2F2F2]">Jadwal Konsultasi Diterima</h4>
                <p className="text-xs text-[#CCCCCC] leading-relaxed">
                  Terima kasih. Solution Architect Aethel Dynamics akan mengontak Anda di email <span className="text-[#F2F2F2] font-mono">{modalForm.email}</span> dalam kurun waktu 2 jam.
                </p>
                <button
                  onClick={() => setConsultationModalOpen(false)}
                  className="mt-4 px-6 py-2 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded transition-colors"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#F2F2F2] mb-1">
                    Nama & Jabatan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Alex Pratama (CTO)"
                    value={modalForm.name}
                    onChange={(e) => setModalForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#595959] rounded-md text-xs text-[#F2F2F2] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F2F2F2] mb-1">
                    Email Bisnis Korporat
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@perusahaan.com"
                    value={modalForm.email}
                    onChange={(e) => setModalForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#595959] rounded-md text-xs text-[#F2F2F2] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F2F2F2] mb-1">
                    Catatan Singkat / Spesifikasi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tambahkan catatan rincian spesifik jika ada..."
                    value={modalForm.notes}
                    onChange={(e) => setModalForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#595959] rounded-md text-xs text-[#F2F2F2] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-[#7F7F7F]">
                  <ShieldCheck className="w-4 h-4 text-[#A5A5A5] shrink-0" />
                  <span>Kerahasiaan data terjamin dengan Perjanjian Kerahasiaan (NDA).</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Kirim & Penjadwalan Sesi</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
