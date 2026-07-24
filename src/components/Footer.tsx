import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#383838] py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-[#e8590c]">Ryan</span>
          <span className="text-[#e8590c] text-2xl font-black">.</span>
          <span className="text-xs text-zinc-400 font-mono ml-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>

        {/* Center Tagline */}
        <div className="text-xs text-zinc-300 font-medium">
          Built with warm precision, React, & Tailwind CSS.
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-[#242424] border border-[#383838] text-zinc-300 hover:text-[#e8590c] hover:border-[#e8590c] flex items-center justify-center transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
