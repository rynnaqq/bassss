import React from 'react';
import { ShieldCheck, ArrowUp, Linkedin, Twitter, Github, Youtube, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-[#595959]/40 pt-16 pb-12 text-[#CCCCCC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#595959]/30">
          
          {/* Column 1: Brand Info & Standards */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1A1A1A] border border-[#595959] flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-[#F2F2F2] rotate-45 flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#121212]"></div>
                </div>
              </div>
              <span className="text-[#F2F2F2] font-bold text-lg tracking-wider uppercase">
                AETHEL<span className="text-[#A5A5A5] font-light ml-1">DYNAMICS</span>
              </span>
            </div>

            <p className="text-xs text-[#7F7F7F] leading-relaxed max-w-sm">
              Penyedia solusi arsitektur digital enterprise, kecerdasan buatan terapan, dan keamanan siber berstandar internasional. Berkomitmen menghadirkan keandalan tanpa kompromi.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#A5A5A5]">
              <ShieldCheck className="w-4 h-4 text-[#F2F2F2]" />
              <span>ISO 27001 • ISO 9001 • SOC 2 TYPE II</span>
            </div>
          </div>

          {/* Column 2: Secondary Navigation & Enterprise Solutions */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#F2F2F2] tracking-wider mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2.5 text-xs text-[#7F7F7F]">
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#F2F2F2] transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-[#F2F2F2] transition-colors">
                    Layanan Utama
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-[#F2F2F2] transition-colors">
                    Studi Kasus
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#F2F2F2] transition-colors">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#F2F2F2] tracking-wider mb-4">
                Layanan
              </h4>
              <ul className="space-y-2.5 text-xs text-[#7F7F7F]">
                <li className="hover:text-[#F2F2F2] transition-colors">AI & Machine Learning</li>
                <li className="hover:text-[#F2F2F2] transition-colors">Cloud Architecture</li>
                <li className="hover:text-[#F2F2F2] transition-colors">Cyber Security</li>
                <li className="hover:text-[#F2F2F2] transition-colors">Custom Software</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Summary & Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#F2F2F2] tracking-wider">
              Markas SCBD
            </h4>
            <p className="text-xs text-[#7F7F7F] leading-relaxed">
              District 8 Treasury Tower, Lt. 38, SCBD, Jakarta Selatan 12190
            </p>
            <p className="text-xs font-mono text-[#A5A5A5]">
              contact@aetheldynamics.com
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded bg-[#1A1A1A] border border-[#595959] text-[#7F7F7F] hover:text-[#F2F2F2] hover:border-[#A5A5A5] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#1A1A1A] border border-[#595959] text-[#7F7F7F] hover:text-[#F2F2F2] hover:border-[#A5A5A5] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#1A1A1A] border border-[#595959] text-[#7F7F7F] hover:text-[#F2F2F2] hover:border-[#A5A5A5] transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#1A1A1A] border border-[#595959] text-[#7F7F7F] hover:text-[#F2F2F2] hover:border-[#A5A5A5] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F7F7F]">
          <p>© 2026 Aethel Dynamics. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F2F2F2] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#F2F2F2] transition-colors">Syarat & Ketentuan</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#1A1A1A] border border-[#595959] text-[#CCCCCC] hover:text-[#F2F2F2] hover:border-[#A5A5A5] transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
