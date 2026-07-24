import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation = (subject = '') => {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection observer logic for active section tracking
      const sections = ['about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Portofolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/85 backdrop-blur-md border-b border-[#595959]/30 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-[#121212]/40 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#A5A5A5] rounded-lg p-1"
            aria-label="Aethel Dynamics Beranda"
          >
            <div className="w-9 h-9 rounded-md bg-[#1A1A1A] border border-[#595959] flex items-center justify-center group-hover:border-[#A5A5A5] transition-all duration-300 shadow-md">
              <div className="w-4 h-4 bg-[#F2F2F2] rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
                <div className="w-1.5 h-1.5 bg-[#121212]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F2F2F2] font-bold text-lg tracking-wider uppercase leading-none">
                AETHEL<span className="text-[#A5A5A5] font-light ml-1">DYNAMICS</span>
              </span>
              <span className="text-[10px] text-[#7F7F7F] tracking-widest uppercase font-mono mt-0.5">
                ENTERPRISE TECH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/80 border border-[#595959]/40 rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#F2F2F2] bg-[#595959]/40 border border-[#A5A5A5]/30'
                      : 'text-[#CCCCCC] hover:text-[#F2F2F2] hover:bg-[#595959]/20'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1A1A] border border-[#595959]/50 text-[11px] font-mono text-[#7F7F7F]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SCBD Enterprise Hub</span>
            </div>
            
            <button
              onClick={onOpenConsultation || ((e) => handleNavClick(e, '#contact'))}
              id="nav-cta-btn"
              className="px-4 py-2 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-all duration-300 shadow-lg flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Mulai Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-md bg-[#1A1A1A] text-[#F2F2F2] border border-[#595959] hover:border-[#A5A5A5] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-b border-[#595959] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#CCCCCC] hover:text-[#F2F2F2] hover:bg-[#121212] rounded-md border border-transparent hover:border-[#595959] transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#7F7F7F]" />
              </a>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-[#595959]/50 flex flex-col gap-2">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick(e, '#contact');
                }
              }}
              className="w-full py-3 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-colors text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>Mulai Konsultasi B2B</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#7F7F7F]">
              <Shield className="w-3.5 h-3.5 text-[#A5A5A5]" />
              <span>Sertifikasi ISO 27001 & SOC 2 Type II</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
