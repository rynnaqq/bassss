import React from 'react';
import { Sparkles, Volume2, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { Article } from '../types';

interface CultureDeepDiveProps {
  article: Article;
  onReadArticle: (article: Article) => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
}

export default function CultureDeepDive({
  article,
  onReadArticle,
  onToggleAudio,
  isAudioPlaying,
}: CultureDeepDiveProps) {
  return (
    <section id="editors-note" className="py-20 sm:py-28 bg-[#FFF1F2] relative border-t border-[#F43F5E]/20">
      
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#F43F5E]/20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#F43F5E] font-bold uppercase tracking-widest block mb-2">
              03 / EDITOR’S LETTER & CULTURAL DEEP DIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917]">
              The Rebirth of Tactile Media
            </h2>
          </div>

          <span className="text-xs font-mono text-[#1C1917]/60 uppercase tracking-widest">
            AURA ISSUE NO. 42 COLOPHON
          </span>
        </div>

        {/* Multi-column Magazine Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F43F5E]/30 shadow-xl group">
              <img
                src={article.secondaryImage || article.coverImage}
                alt="Editorial Process"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FB923C] block">
                  FIGURE 42.B — ARCHIVAL PRINT
                </span>
                <p className="text-xs font-serif italic text-white/90">
                  "Sub-zero bio-composite printing in Zurich atelier, 2026."
                </p>
              </div>
            </div>

            {/* Audio Quote Box */}
            <div className="p-6 bg-white rounded-2xl border border-[#F43F5E]/20 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#F43F5E] uppercase">
                  AUDIO EDITION AVAILABLE
                </span>
                <button
                  onClick={onToggleAudio}
                  className="p-2 rounded-full bg-[#1C1917] text-white hover:bg-[#F43F5E] transition-colors cursor-pointer"
                  title="Listen to Editor's Note"
                >
                  <Volume2 className="w-4 h-4 text-[#FB923C]" />
                </button>
              </div>
              <p className="text-xs text-[#1C1917]/80 leading-relaxed font-sans">
                Listen to Elena Vance-Rousseau narrate the Autumn/Winter 2026 curatorial statement on organic digital revival.
              </p>
            </div>
          </div>

          {/* Right Column: Multi-paragraph Editorial with Drop Cap */}
          <div className="lg:col-span-7 space-y-6 text-[#1C1917]">
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight text-[#1C1917]">
              Why physical texture and deliberate slow reading matter in an age of instantaneous generative noise.
            </h3>

            {/* Paragraph 1 with Drop Cap */}
            <p className="drop-cap text-base sm:text-lg text-[#1C1917]/85 leading-relaxed font-sans">
              {article.contentParagraphs[0]}
            </p>

            <p className="text-base text-[#1C1917]/80 leading-relaxed font-sans">
              {article.contentParagraphs[1]}
            </p>

            {/* Embedded Pull Quote */}
            <div className="my-8 p-6 bg-white rounded-2xl border-l-4 border-[#F43F5E] shadow-xs space-y-2">
              <Quote className="w-6 h-6 text-[#FB923C]" />
              <p className="font-serif italic text-lg text-[#1C1917] font-semibold">
                {article.pullQuote}
              </p>
            </div>

            <p className="text-base text-[#1C1917]/80 leading-relaxed font-sans">
              {article.contentParagraphs[2] || article.contentParagraphs[0]}
            </p>

            {/* Read Article Trigger Button */}
            <div className="pt-4">
              <button
                onClick={() => onReadArticle(article)}
                className="px-6 py-3.5 bg-[#1C1917] hover:bg-[#F43F5E] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-colors duration-300 flex items-center gap-3 shadow-md cursor-pointer"
              >
                <span>Read Full Essay in Reader</span>
                <ArrowRight className="w-4 h-4 text-[#FB923C]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
