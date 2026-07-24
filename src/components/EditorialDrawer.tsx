import React, { useState } from 'react';
import { X, Search, Sparkles, ArrowRight, BookOpen, Volume2, Mail, Layers, Compass, ExternalLink } from 'lucide-react';
import { Article, Issue } from '../types';

interface EditorialDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  archivedIssues: Issue[];
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectArticle: (article: Article) => void;
  onSelectIssue: (issue: Issue) => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
}

export default function EditorialDrawer({
  isOpen,
  onClose,
  articles,
  archivedIssues,
  currentCategory,
  onSelectCategory,
  onSelectArticle,
  onSelectIssue,
  onToggleAudio,
  isAudioPlaying,
}: EditorialDrawerProps) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredArticles = searchQuery.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const categories = ['Semua', 'Architecture', 'Culture', 'Tech & Ethics', 'Fashion & Form', 'Visual Essays'];

  const sectionLinks = [
    { name: 'Featured Cover Story', href: '#hero-cover' },
    { name: 'Editor\'s Note', href: '#editors-note' },
    { name: 'Asymmetric Articles', href: '#asymmetric-grid' },
    { name: 'Cultural Deep Dive', href: '#culture-deep-dive' },
    { name: 'Photo Essay Gallery', href: '#photo-essays' },
    { name: 'Issue Archives & Print', href: '#issue-archives' },
    { name: 'Weekly Newsletter', href: '#newsletter' },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-[#FFF1F2] border-l border-[#F43F5E]/30 text-[#1C1917] p-6 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl relative">
          
          {/* Paper texture overlay */}
          <div className="absolute inset-0 paper-grain pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#F43F5E]/20">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-2xl tracking-tight text-[#1C1917]">
                  AURA
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F43F5E]"></span>
                <span className="text-[10px] font-mono text-[#F43F5E] uppercase tracking-widest pl-2 border-l border-[#F43F5E]/30">
                  EDITORIAL DIRECTORY
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white text-[#1C1917] hover:text-[#F43F5E] hover:bg-[#FFE4E6] border border-[#F43F5E]/30 transition-all cursor-pointer"
                aria-label="Close Directory Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-[#F43F5E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, essays, or critics..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#F43F5E]/30 rounded-xl text-xs text-[#1C1917] placeholder-[#1C1917]/50 focus:outline-none focus:ring-2 focus:ring-[#F43F5E] transition-all shadow-xs"
              />

              {/* Search Results Dropdown */}
              {searchQuery.trim() !== '' && (
                <div className="mt-2 bg-white border border-[#F43F5E]/30 rounded-xl p-3 space-y-2 max-h-60 overflow-y-auto shadow-xl">
                  {filteredArticles.length === 0 ? (
                    <p className="text-xs text-[#1C1917]/60 p-2 font-mono">No matching articles found.</p>
                  ) : (
                    filteredArticles.map((art) => (
                      <button
                        key={art.id}
                        onClick={() => {
                          onSelectArticle(art);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#FFF1F2] transition-colors border border-transparent hover:border-[#F43F5E]/20 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-[#F43F5E] uppercase block">{art.category}</span>
                          <h5 className="text-xs font-serif font-bold text-[#1C1917]">{art.title}</h5>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FB923C] shrink-0 mt-1" />
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Main Sections Navigation Links */}
            <div>
              <span className="text-[10px] font-mono text-[#F43F5E] uppercase tracking-widest block mb-4">
                01 / MAGAZINE SECTIONS
              </span>
              <ul className="space-y-3">
                {sectionLinks.map((link, idx) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="group flex items-center justify-between w-full text-left py-1 text-lg sm:text-2xl font-serif font-bold text-[#1C1917] hover:text-[#F43F5E] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono font-normal text-[#FB923C]">0{idx + 1}</span>
                        <span>{link.name}</span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#F43F5E] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Filter Quick Jump */}
            <div>
              <span className="text-[10px] font-mono text-[#F43F5E] uppercase tracking-widest block mb-3">
                02 / TOPIC CATEGORIES
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat);
                      handleNavClick('#asymmetric-grid');
                    }}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer border ${
                      currentCategory === cat
                        ? 'bg-[#F43F5E] text-white border-[#F43F5E] shadow-xs'
                        : 'bg-white text-[#1C1917] hover:bg-[#FFE4E6] border-[#F43F5E]/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Current & Past Issue Archives Switcher */}
            <div>
              <span className="text-[10px] font-mono text-[#F43F5E] uppercase tracking-widest block mb-3">
                03 / ARCHIVED EDITIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {archivedIssues.map((iss) => (
                  <div
                    key={iss.number}
                    onClick={() => {
                      onSelectIssue(iss);
                      handleNavClick('#issue-archives');
                    }}
                    className="p-3 bg-white rounded-xl border border-[#F43F5E]/20 hover:border-[#F43F5E] transition-all cursor-pointer flex items-center gap-3 group"
                  >
                    <img
                      src={iss.coverImage}
                      alt={iss.title}
                      className="w-10 h-14 object-cover rounded shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <span className="text-[9px] font-mono text-[#F43F5E] uppercase">{iss.number}</span>
                      <h6 className="text-xs font-serif font-bold text-[#1C1917] truncate">{iss.title}</h6>
                      <span className="text-[10px] text-[#1C1917]/60 block mt-0.5">{iss.releaseDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Drawer Footer */}
          <div className="relative z-10 pt-6 mt-8 border-t border-[#F43F5E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1C1917]/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F43F5E]" />
              <span>AURA Autumn/Winter 2026</span>
            </div>

            <button
              onClick={onToggleAudio}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#1C1917] text-white rounded-full hover:bg-[#F43F5E] transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#FB923C]" />
              <span className="text-[11px]">{isAudioPlaying ? 'Pause Audio' : 'Play Issue Audio'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
