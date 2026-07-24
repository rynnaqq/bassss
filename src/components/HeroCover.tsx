import React from 'react';
import { ArrowUpRight, Volume2, Bookmark, Sparkles, Clock, User, Compass } from 'lucide-react';
import { Article } from '../types';

interface HeroCoverProps {
  article: Article;
  onReadArticle: (article: Article) => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export default function HeroCover({
  article,
  onReadArticle,
  onToggleAudio,
  isAudioPlaying,
  isSaved,
  onToggleSave,
}: HeroCoverProps) {
  return (
    <section id="hero-cover" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#FFF1F2] overflow-hidden">
      
      {/* Background paper texture & decorative rose gradient blur */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#F43F5E]/10 via-[#FB923C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Issue Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#F43F5E]/20 text-xs font-mono text-[#1C1917]/70">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#F43F5E] text-white font-bold rounded uppercase tracking-wider">
              COVER STORY
            </span>
            <span>{article.issueNumber}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#F43F5E] font-bold">{article.readTime}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">ISSN 2849-0192</span>
          </div>
        </div>

        {/* Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#F43F5E]/30 text-xs font-mono font-bold text-[#F43F5E] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FB923C]" />
              <span className="uppercase tracking-widest">{article.category}</span>
            </div>

            {/* Main Headline - Bold Serif Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#1C1917] tracking-tight leading-[1.08]">
              {article.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-base sm:text-lg text-[#1C1917]/80 font-medium leading-relaxed max-w-2xl border-l-2 border-[#F43F5E] pl-4">
              {article.subtitle}
            </p>

            {/* Author Profile Badge */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#F43F5E]/40 p-0.5 shadow-sm"
              />
              <div>
                <span className="text-sm font-serif font-bold text-[#1C1917] block">
                  {article.author.name}
                </span>
                <span className="text-xs font-mono text-[#F43F5E]">
                  {article.author.role}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onReadArticle(article)}
                id="read-cover-story-btn"
                className="px-8 py-4 bg-[#F43F5E] hover:bg-[#E11D48] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#F43F5E]/20 cursor-pointer active:scale-95"
              >
                <span>Read Full Cover Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onToggleAudio}
                className={`px-6 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 border ${
                  isAudioPlaying
                    ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-md'
                    : 'bg-white hover:bg-[#FFE4E6] text-[#1C1917] border-[#F43F5E]/30'
                }`}
              >
                <Volume2 className="w-4 h-4 text-[#FB923C]" />
                <span>{isAudioPlaying ? 'Pause Narration' : `Listen (${article.audioDuration})`}</span>
              </button>

              <button
                onClick={() => onToggleSave(article.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                    : 'bg-white text-[#1C1917] border-[#F43F5E]/30 hover:border-[#F43F5E]'
                }`}
                title={isSaved ? "Remove Bookmark" : "Save for Later"}
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Asymmetric Floating Image Frame */}
          <div className="lg:col-span-5 relative group">
            
            {/* Background offset card in Coral/Rose */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#F43F5E] to-[#FB923C] rounded-2xl opacity-20 transform rotate-2 group-hover:rotate-1 transition-transform duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-[#F43F5E]/30 shadow-2xl">
              
              {/* Vertical Issue Ribbon */}
              <div className="absolute top-4 left-4 z-20 bg-[#1C1917]/90 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                AUTUMN 2026 EDITION
              </div>

              {/* Cover Image */}
              <div className="relative h-[420px] sm:h-[480px] overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
              </div>

              {/* Overlay Pull Quote */}
              <div className="p-6 bg-white border-t border-[#F43F5E]/20 relative">
                <span className="font-serif text-3xl font-black text-[#F43F5E] leading-none absolute -top-4 left-6 bg-white px-2">
                  “
                </span>
                <p className="font-serif italic text-sm text-[#1C1917] leading-relaxed pt-2">
                  {article.pullQuote}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#F43F5E]">
                  <span>FEATURED EDITORIAL</span>
                  <span>AURA VOL. 42</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
