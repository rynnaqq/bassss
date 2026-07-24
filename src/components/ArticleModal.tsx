import React, { useState } from 'react';
import { X, Bookmark, Volume2, Share2, Type, ArrowLeft, ArrowRight, Clock, Sparkles, Check } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  allArticles: Article[];
  onSelectRelatedArticle: (art: Article) => void;
}

export default function ArticleModal({
  article,
  onClose,
  isSaved,
  onToggleSave,
  isAudioPlaying,
  onToggleAudio,
  allArticles,
  onSelectRelatedArticle,
}: ArticleModalProps) {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) return null;

  const fontClasses = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-300 flex justify-center">
      
      <div className="w-full max-w-4xl bg-[#FFF1F2] text-[#1C1917] min-h-screen my-0 sm:my-8 rounded-none sm:rounded-3xl border-x sm:border border-[#F43F5E]/30 shadow-2xl overflow-hidden flex flex-col justify-between relative">
        
        {/* Paper texture */}
        <div className="absolute inset-0 paper-grain pointer-events-none" />

        {/* Top Control Sticky Header */}
        <div className="sticky top-0 z-30 bg-[#FFF1F2]/90 backdrop-blur-md border-b border-[#F43F5E]/20 px-6 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-[#FFE4E6] text-[#1C1917] border border-[#F43F5E]/30 text-xs font-mono transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#F43F5E]" />
            <span>Back to Magazine</span>
          </button>

          {/* Reader Preferences Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Font Size Selector */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#F43F5E]/30 text-[11px] font-mono">
              <Type className="w-3.5 h-3.5 text-[#F43F5E] ml-1.5" />
              {(['sm', 'md', 'lg', 'xl'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`px-2 py-0.5 rounded-full uppercase transition-all cursor-pointer ${
                    fontSize === sz ? 'bg-[#F43F5E] text-white font-bold' : 'text-[#1C1917]/70 hover:text-[#F43F5E]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isAudioPlaying
                  ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                  : 'bg-white text-[#1C1917] border-[#F43F5E]/30 hover:border-[#F43F5E]'
              }`}
              title={isAudioPlaying ? "Pause Audio" : "Listen Audio"}
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                  : 'bg-white text-[#1C1917] border-[#F43F5E]/30 hover:border-[#F43F5E]'
              }`}
              title="Save Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white text-[#1C1917] border border-[#F43F5E]/30 hover:border-[#F43F5E] transition-all cursor-pointer relative"
              title="Share Article"
            >
              {copiedLink ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>
        </div>

        {/* Main Article Reader Body */}
        <div className="p-6 sm:p-12 relative z-10 space-y-8 max-w-3xl mx-auto">
          
          {/* Article Header Meta */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#F43F5E]">
              <span className="px-3 py-1 bg-white border border-[#F43F5E]/30 rounded-full font-bold uppercase">
                {article.category}
              </span>
              <span>{article.issueNumber}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FB923C]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917] leading-tight">
              {article.title}
            </h1>

            <p className="text-lg font-medium text-[#1C1917]/80 leading-relaxed border-l-2 border-[#F43F5E] pl-4">
              {article.subtitle}
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#F43F5E]/20">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#F43F5E]/40"
              />
              <div>
                <span className="font-serif font-bold text-[#1C1917] block">
                  {article.author.name}
                </span>
                <span className="text-xs font-mono text-[#F43F5E]">
                  {article.author.role} • {article.date}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Cover Image */}
          <div className="rounded-2xl overflow-hidden border-2 border-[#F43F5E]/20 shadow-lg">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className={`space-y-6 text-[#1C1917] font-sans ${fontClasses[fontSize]}`}>
            
            {/* First paragraph with drop cap */}
            {article.contentParagraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? 'drop-cap text-[#1C1917]/90' : 'text-[#1C1917]/85'}>
                {para}
              </p>
            ))}

            {/* Pull Quote Callout */}
            {article.pullQuote && (
              <div className="my-8 p-6 bg-white rounded-2xl border-l-4 border-[#F43F5E] shadow-xs space-y-2">
                <span className="font-serif text-3xl text-[#F43F5E] font-black leading-none">“</span>
                <p className="font-serif italic text-xl font-bold text-[#1C1917]">
                  {article.pullQuote}
                </p>
              </div>
            )}

            {article.secondaryImage && (
              <div className="my-8 rounded-2xl overflow-hidden border border-[#F43F5E]/20 shadow-md">
                <img
                  src={article.secondaryImage}
                  alt="Secondary Illustration"
                  className="w-full h-80 object-cover"
                />
              </div>
            )}

          </div>

          {/* Related Articles Section */}
          <div className="pt-12 border-t border-[#F43F5E]/20 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F43F5E] font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#FB923C]" />
              <span>CONTINUE READING IN ISSUE NO. 42</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelatedArticle(rel)}
                  className="p-4 bg-white rounded-xl border border-[#F43F5E]/20 hover:border-[#F43F5E] transition-all cursor-pointer space-y-2 group"
                >
                  <span className="text-[10px] font-mono text-[#F43F5E] uppercase">{rel.category}</span>
                  <h4 className="text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#F43F5E] transition-colors">
                    {rel.title}
                  </h4>
                  <span className="text-[10px] font-mono text-[#1C1917]/60 block">{rel.readTime}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Reader Footer */}
        <div className="sticky bottom-0 z-30 bg-[#FFF1F2] border-t border-[#F43F5E]/20 p-4 text-center text-xs font-mono text-[#1C1917]/70">
          AURA EDITORIAL READER • AUTUMN / WINTER 2026
        </div>

      </div>
    </div>
  );
}
