import React, { useState, useEffect } from 'react';
import { Menu, X, Bookmark, Volume2, Sparkles, Compass } from 'lucide-react';

interface HeaderNavbarProps {
  onOpenDrawer: () => void;
  savedArticlesCount: number;
  onOpenBookmarks: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  currentIssueTitle: string;
}

export default function HeaderNavbar({
  onOpenDrawer,
  savedArticlesCount,
  onOpenBookmarks,
  isAudioPlaying,
  onToggleAudio,
  currentIssueTitle,
}: HeaderNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="editorial-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FFF1F2]/90 backdrop-blur-md border-[#F43F5E]/20 py-3.5 shadow-sm'
          : 'bg-[#FFF1F2]/60 backdrop-blur-xs border-[#F43F5E]/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Issue Meta Tag (No Nav Links Visible - Hamburger Only) */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F43F5E]/30 text-[11px] font-mono text-[#F43F5E] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F43F5E] animate-pulse"></span>
              <span className="font-bold tracking-wider uppercase">ISSUE NO. 42</span>
            </div>
            <span className="hidden md:inline-block text-[11px] font-mono text-[#1C1917]/60 tracking-wider uppercase">
              AUTUMN / WINTER 2026
            </span>
          </div>

          {/* Center: Iconic Masthead */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="AURA Magazine Homepage"
          >
            <span className="font-serif font-black text-2xl sm:text-3xl tracking-tighter text-[#1C1917] group-hover:text-[#F43F5E] transition-colors">
              AURA
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FB923C] group-hover:bg-[#F43F5E] transition-colors"></span>
            <span className="hidden xl:inline-block font-mono text-[10px] text-[#F43F5E] tracking-widest uppercase border-l border-[#F43F5E]/30 pl-2 ml-1">
              MAGAZINE
            </span>
          </a>

          {/* Right: Actions & HAMBURGER MENU BUTTON ONLY */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Audio Toggle Shortcut */}
            <button
              onClick={onToggleAudio}
              className={`hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                isAudioPlaying
                  ? 'bg-[#F43F5E] text-white border-[#F43F5E] shadow-md animate-pulse'
                  : 'bg-white/80 text-[#1C1917] hover:text-[#F43F5E] border-[#F43F5E]/20 hover:border-[#F43F5E]/50'
              }`}
              title={isAudioPlaying ? "Pause Audio Narration" : "Listen to Issue Highlights"}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px] font-mono">
                {isAudioPlaying ? 'AUDIO ON' : 'AUDIO'}
              </span>
            </button>

            {/* Saved Bookmarks Shortcut */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-full bg-white/80 text-[#1C1917] hover:text-[#F43F5E] border border-[#F43F5E]/20 hover:border-[#F43F5E]/50 transition-colors cursor-pointer"
              title="View Bookmarked Articles"
              aria-label="Saved Bookmarks"
            >
              <Bookmark className="w-4 h-4" />
              {savedArticlesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F43F5E] text-white text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
                  {savedArticlesCount}
                </span>
              )}
            </button>

            {/* HAMBURGER MENU BUTTON (THE ONLY NAVIGATION TRIGGER) */}
            <button
              onClick={onOpenDrawer}
              id="hamburger-menu-button"
              className="p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#1C1917] text-[#FFF1F2] hover:bg-[#F43F5E] transition-all duration-300 flex items-center gap-2.5 shadow-md hover:shadow-lg cursor-pointer active:scale-95 border border-[#1C1917]"
              aria-label="Open Magazine Navigation Drawer"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-mono font-bold tracking-widest uppercase">
                MENU
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
