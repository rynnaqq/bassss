import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Terminal, Activity, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenConsultation = (subject = '') => {} }) {
  const stats = [
    { value: '99.99%', label: 'SLA Uptime System', desc: 'Arsitektur High Availability' },
    { value: '150+', label: 'Proyek Enterprise', desc: 'Kepercayaan Klien B2B' },
    { value: 'ISO 27001', label: 'Sertifikasi Keamanan', desc: 'Standar Internasional' },
    { value: '< 15ms', label: 'Latensi Respon AI', desc: 'Performa Tanpa Hambatan' }
  ];

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#121212] overflow-hidden">
      {/* Subtle Network Pattern / Background Atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Subtle silver atmospheric accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#595959]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge Inovasi */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#595959] text-xs font-medium text-[#A5A5A5] mb-8 hover:border-[#A5A5A5] transition-all duration-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F2F2F2]" />
            <span className="tracking-wide">Perintis Solusi AI & Infrastruktur Enterprise</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A5A5A5]"></span>
            <span className="font-mono text-[11px] text-[#7F7F7F]">Q3 2026</span>
          </div>

          {/* Headline Utama (H1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F2F2F2] tracking-tight leading-[1.15] mb-6">
            Akselerasi Transformasi Digital dengan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#A5A5A5] to-[#7F7F7F]">
              Infrastruktur Masa Depan
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed max-w-2.5xl mb-10 font-normal">
            Aethel Dynamics merancang arsitektur kecerdasan buatan, modernisasi cloud skala besar, dan keamanan siber terenkripsi. Kami membantu korporasi B2B mengoptimalkan skalabilitas operasional dengan keandalan tanpa kompromi.
          </p>

          {/* Tombol CTA Ganda */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onOpenConsultation || (() => handleScrollTo('#contact'))}
              id="hero-cta-primary"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-[#F2F2F2]/10 cursor-pointer active:scale-95"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#services')}
              id="hero-cta-secondary"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-[#F2F2F2] bg-[#1A1A1A] hover:bg-[#595959]/30 border border-[#595959] hover:border-[#A5A5A5] rounded-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Terminal className="w-4 h-4 text-[#A5A5A5]" />
              <span>Jelajahi Kapabilitas</span>
            </button>
          </div>

          {/* Certification Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2 pb-12 text-xs text-[#7F7F7F] border-t border-[#595959]/30 w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A5A5A5]" />
              <span>Jaminan SLA 99.99%</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A5A5A5]" />
              <span>Audit Keamanan Terverifikasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#A5A5A5]" />
              <span>Kepatuhan Multi-Regulasi (SOC2 & HIPAA)</span>
            </div>
          </div>

        </div>

        {/* 4 Grid Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] border border-[#595959] hover:border-[#A5A5A5] rounded-lg p-5 sm:p-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F2F2F2] font-mono tracking-tight group-hover:text-[#A5A5A5] transition-colors">
                  {stat.value}
                </span>
                <Activity className="w-4 h-4 text-[#7F7F7F] group-hover:text-[#F2F2F2] transition-colors" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-[#F2F2F2] mb-1">
                {stat.label}
              </h3>
              <p className="text-[11px] text-[#7F7F7F] font-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
