import React from 'react';
import { ArrowUp, Sparkles, Globe, Shield, Heart } from 'lucide-react';

export default function FooterEditorial() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FFF1F2] pt-16 pb-12 border-t border-[#F43F5E]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Row: Masthead & Back to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-serif font-black text-4xl tracking-tighter text-white">
                AURA
              </span>
              <span className="w-3 h-3 rounded-full bg-[#F43F5E]"></span>
              <span className="text-xs font-mono text-[#FB923C] uppercase tracking-widest pl-2 border-l border-white/20">
                MAGAZINE & PRESS
              </span>
            </div>
            <p className="text-xs font-mono text-white/60 max-w-md">
              An independent avant-garde quarterly journal exploring the intersection of generative geometry, architecture, and human culture.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-white/10 hover:bg-[#F43F5E] text-white transition-all cursor-pointer border border-white/20 self-start md:self-auto flex items-center gap-2 group"
            title="Back to Top"
          >
            <span className="text-xs font-mono font-bold uppercase">TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Middle Columns: Colophon & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono">
          
          <div className="space-y-3">
            <span className="text-[#F43F5E] font-bold uppercase block tracking-wider">
              EDITORIAL BOARD
            </span>
            <ul className="space-y-1.5 text-white/70">
              <li>Editor-in-Chief: Elena Vance-Rousseau</li>
              <li>Creative Director: Sora Takahashi</li>
              <li>Senior Critic: Dr. Aris Thorne</li>
              <li>Fashion Editor: Camille Laurent</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#F43F5E] font-bold uppercase block tracking-wider">
              PRINT EDITIONS
            </span>
            <ul className="space-y-1.5 text-white/70">
              <li>Issue No. 42 (Autumn 2026)</li>
              <li>Issue No. 41 (Summer 2026)</li>
              <li>Issue No. 40 (Spring 2026)</li>
              <li>Complete 10-Year Archive Boxset</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#F43F5E] font-bold uppercase block tracking-wider">
              PERMISSIONS & PRESS
            </span>
            <ul className="space-y-1.5 text-white/70">
              <li>ISSN: 2849-0192</li>
              <li>Press Inquiries & Syndication</li>
              <li>Submissions Guidelines</li>
              <li>Ethics & Transparency Disclosure</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#F43F5E] font-bold uppercase block tracking-wider">
              LOCATIONS
            </span>
            <p className="text-white/70 leading-relaxed">
              Zurich • Milan • Tokyo • São Paulo • New York
            </p>
            <span className="text-[10px] text-[#FB923C] block pt-2">
              PRINTED ON 100% RECYCLED COTTON PAPER
            </span>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50">
          <p>© 2026 AURA Editorial Press. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F43F5E] transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F43F5E] transition-colors">Colophon</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F43F5E] transition-colors">RSS Feed</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
