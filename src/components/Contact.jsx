import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck, Loader2, MessageSquare, Building2 } from 'lucide-react';

export default function Contact({ initialSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    subject: initialSubject || 'Konsultasi Infrastruktur & AI Enterprise',
    message: ''
  });

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const sanitizeInput = (text) => {
    return text.replace(/[<>]/g, '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));

    // Clear error on field change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi';
    }
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Email bisnis wajib diisi';
    } else if (!validateEmail(formData.businessEmail)) {
      newErrors.businessEmail = 'Format email tidak valid (contoh: nama@perusahaan.com)';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter untuk membantu kami memahami kebutuhan Anda';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate enterprise backend API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        businessEmail: '',
        companyName: '',
        subject: 'Konsultasi Infrastruktur & AI Enterprise',
        message: ''
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#121212] border-t border-[#595959]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#595959] text-xs font-mono text-[#A5A5A5] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>KONSULTASI B2B</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F2F2] tracking-tight mb-4">
            Hubungi Tim Solusi Enterprise
          </h2>
          <p className="text-sm sm:text-base text-[#7F7F7F] max-w-2xl leading-relaxed">
            Diskusikan kebutuhan arsitektur digital, modernisasi cloud, atau kecerdasan buatan bersama Solution Architect berpengalaman kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & SCBD HQ Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Details Card */}
            <div className="bg-[#1A1A1A] border border-[#595959] rounded-lg p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-[#595959]/40">
                <div className="w-10 h-10 rounded-md bg-[#121212] border border-[#595959] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#F2F2F2]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F2F2F2]">Kantor Pusat SCBD Hub</h3>
                  <p className="text-xs text-[#7F7F7F]">Aethel Dynamics Indonesia HQ</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#CCCCCC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A5A5A5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F2F2F2] block mb-0.5">Alamat Resmi:</span>
                    <p className="text-[#CCCCCC] leading-relaxed">
                      District 8 Treasury Tower, Lt. 38, SCBD Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-4 h-4 text-[#A5A5A5] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#F2F2F2] block mb-0.5">Email Bisnis & PR:</span>
                    <a href="mailto:contact@aetheldynamics.com" className="text-[#A5A5A5] hover:underline font-mono">
                      contact@aetheldynamics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-[#A5A5A5] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#F2F2F2] block mb-0.5">Telepon B2B Direct:</span>
                    <a href="tel:+622157901234" className="text-[#A5A5A5] hover:underline font-mono">
                      +62 (21) 5790-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-4 h-4 text-[#A5A5A5] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#F2F2F2] block mb-0.5">Jam Operasional:</span>
                    <span className="text-[#7F7F7F]">Senin - Jumat: 08:00 - 18:00 WIB</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-[#121212] border border-[#595959]/50 flex items-center gap-3 text-xs text-[#7F7F7F]">
                <ShieldCheck className="w-5 h-5 text-[#A5A5A5] shrink-0" />
                <span>Seluruh data komunikasi dienkripsi dan dilindungi oleh Perjanjian Kerahasiaan (NDA).</span>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-5 bg-[#1A1A1A] border border-[#595959]/60 rounded-lg flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="text-[#F2F2F2] font-semibold block">SLA Respon Kontak</span>
                <span className="text-[#7F7F7F]">Maksimal 2 jam pada jam kerja operasional</span>
              </div>
              <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 font-mono rounded text-[11px]">
                Active 24/7
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1A1A1A] border border-[#595959] rounded-lg p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6 pb-4 border-b border-[#595959]/40">
                <h3 className="text-lg font-bold text-[#F2F2F2] mb-1">
                  Formulir Permintaan Konsultasi
                </h3>
                <p className="text-xs text-[#7F7F7F]">
                  Lengkapi formulir di bawah ini untuk menghubungkan Anda secara langsung dengan tim arsitek teknologi kami.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-6 bg-[#121212] border border-[#A5A5A5] rounded-lg text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#A5A5A5] flex items-center justify-center mx-auto text-[#F2F2F2]">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F2F2F2]">Permintaan Konsultasi Terkirim</h4>
                  <p className="text-xs text-[#CCCCCC] leading-relaxed max-w-md mx-auto">
                    Terima kasih telah menghubungi Aethel Dynamics. Tim Solution Architect kami telah menerima rincian Anda dan akan merespons dalam kurun waktu 2 jam operasional.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Grid 2 Column for Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F2F2F2] mb-1.5">
                        Nama Lengkap <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-3.5 py-2.5 bg-[#121212] border rounded-md text-xs text-[#F2F2F2] placeholder-[#595959] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#595959]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F2F2F2] mb-1.5">
                        Nama Perusahaan / Organisasi
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Contoh: PT Bank Nusantara Tbk"
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#595959] rounded-md text-xs text-[#F2F2F2] placeholder-[#595959] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Email & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F2F2F2] mb-1.5">
                        Email Bisnis <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="budi@perusahaan.com"
                        className={`w-full px-3.5 py-2.5 bg-[#121212] border rounded-md text-xs text-[#F2F2F2] placeholder-[#595959] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] transition-colors ${
                          errors.businessEmail ? 'border-red-500' : 'border-[#595959]'
                        }`}
                      />
                      {errors.businessEmail && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.businessEmail}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F2F2F2] mb-1.5">
                        Subjek Layanan
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#595959] rounded-md text-xs text-[#F2F2F2] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] transition-colors"
                      >
                        <option value="Konsultasi Infrastruktur & AI Enterprise">Konsultasi AI & Machine Learning</option>
                        <option value="Modernisasi Cloud & Infrastructure">Modernisasi Cloud & Infrastructure</option>
                        <option value="Cyber Security & Zero Trust Audit">Cyber Security & Zero Trust Audit</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Kerjasama Strategis & Kemitraan">Kerjasama Strategis B2B</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-[#F2F2F2] mb-1.5">
                      Rincian Kebutuhan & Ekspektasi Hasil <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan teknis, estimasi timeline, atau tantangan bisnis yang ingin Anda selesaikan..."
                      className={`w-full px-3.5 py-2.5 bg-[#121212] border rounded-md text-xs text-[#F2F2F2] placeholder-[#595959] focus:outline-none focus:ring-1 focus:ring-[#A5A5A5] transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#595959]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] disabled:bg-[#595959] rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#121212]" />
                          <span>Mengirimkan Permintaan...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Permintaan Konsultasi</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
