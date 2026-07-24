import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenHireModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'service', label: 'SERVICE' },
    { id: 'project', label: 'PROJECT' },
    { id: 'skill', label: 'SKILL' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-6 py-3.5 md:px-8 md:py-4 rounded-full border transition-all duration-300 backdrop-blur-md ${
            isScrolled
              ? 'bg-[#242424]/95 border-[#4a2717] shadow-[0_10px_30px_rgba(0,0,0,0.8)] glow-orange/20'
              : 'bg-[#242424]/80 border-[#383838]'
          }`}
        >
          {/* Brand Logo (Left) */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1 text-2xl font-extrabold tracking-tight cursor-pointer group focus:outline-none"
            id="nav-logo-btn"
          >
            <span className="text-[#e8590c] transition-transform duration-300 group-hover:scale-105 inline-block">
              Ryan
            </span>
            <span className="text-[#e8590c] font-black text-3xl leading-none">.</span>
          </button>

          {/* Desktop Navigation Links (Right) */}
          <div className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-widest">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`transition-colors duration-200 cursor-pointer uppercase py-1 relative ${
                    isActive
                      ? 'text-[#e8590c]'
                      : 'text-[#FFF7ED]/80 hover:text-[#e8590c]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e8590c] rounded-full glow-orange" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Hire CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenHireModal}
              id="nav-hire-btn"
              className="px-5 py-2 rounded-full bg-[#e8590c] text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#d9480f] hover:shadow-[0_0_20px_rgba(232,89,12,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Hire me
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#FFF7ED] hover:text-[#e8590c] focus:outline-none rounded-lg border border-[#383838] bg-[#2a2a2a]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-[#242424] border border-[#4a2717] rounded-2xl backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left px-4 py-2.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all ${
                      isActive
                        ? 'bg-[#2a2a2a] text-[#e8590c] border-l-4 border-[#e8590c]'
                        : 'text-[#FFF7ED]/80 hover:bg-[#2a2a2a] hover:text-[#e8590c]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2 border-t border-[#383838]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireModal();
                  }}
                  className="w-full py-3 rounded-full bg-[#e8590c] text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  Hire me
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
