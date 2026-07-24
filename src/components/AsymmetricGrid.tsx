import React from 'react';
import { ArrowUpRight, Bookmark, Clock, Sparkles, Filter, Volume2 } from 'lucide-react';
import { Article } from '../types';

interface AsymmetricGridProps {
  articles: Article[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onReadArticle: (article: Article) => void;
  savedArticleIds: string[];
  onToggleSave: (id: string) => void;
}

export default function AsymmetricGrid({
  articles,
  selectedCategory,
  onSelectCategory,
  onReadArticle,
  savedArticleIds,
  onToggleSave,
}: AsymmetricGridProps) {
  const categories = ['Semua', 'Architecture', 'Culture', 'Tech & Ethics', 'Fashion & Form', 'Visual Essays'];

  const filteredArticles = selectedCategory === 'Semua'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <section id="asymmetric-grid" className="py-20 sm:py-28 bg-[#FFF1F2] relative">
      
      {/* Background Texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#F43F5E]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F43F5E] font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-[#FB923C]" />
              <span>02 / EDITORIAL CURATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917] tracking-tight">
              Asymmetric Stories & Essays
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#F43F5E] text-white border-[#F43F5E] shadow-sm'
                    : 'bg-white/80 hover:bg-[#FFE4E6] text-[#1C1917] border-[#F43F5E]/20 hover:border-[#F43F5E]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {filteredArticles.map((article, index) => {
            const isSaved = savedArticleIds.includes(article.id);
            // Alternate spans for asymmetric magazine feel: 1st card spans 7 cols, 2nd spans 5, 3rd spans 5, 4th spans 7, etc.
            const colSpanClass =
              index % 4 === 0
                ? 'md:col-span-7'
                : index % 4 === 1
                ? 'md:col-span-5'
                : index % 4 === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            return (
              <article
                key={article.id}
                className={`${colSpanClass} bg-white rounded-2xl border-2 border-[#F43F5E]/20 hover:border-[#F43F5E] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl group flex flex-col justify-between`}
              >
                
                {/* Article Image Header */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-[#FFF1F2]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/95 text-[#F43F5E] text-[10px] font-mono font-bold uppercase rounded-full shadow-xs border border-[#F43F5E]/30">
                      {article.category}
                    </span>

                    <button
                      onClick={() => onToggleSave(article.id)}
                      className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        isSaved
                          ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                          : 'bg-white/80 text-[#1C1917] hover:bg-white border-white/40'
                      }`}
                      aria-label="Bookmark Article"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Meta Bar on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white">
                    <span>{article.issueNumber}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FB923C]" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <h3
                      onClick={() => onReadArticle(article)}
                      className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] group-hover:text-[#F43F5E] transition-colors leading-tight cursor-pointer"
                    >
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-[#1C1917]/75 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Pull quote callout if available */}
                  {article.pullQuote && index % 2 === 0 && (
                    <div className="p-3 bg-[#FFF1F2] border-l-2 border-[#FB923C] rounded-r-lg text-xs italic font-serif text-[#1C1917]">
                      “{article.pullQuote}”
                    </div>
                  )}

                  {/* Footer Author & Read Trigger */}
                  <div className="pt-4 border-t border-[#F43F5E]/15 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#F43F5E]/30"
                      />
                      <div className="text-xs">
                        <span className="font-serif font-bold text-[#1C1917] block leading-none">
                          {article.author.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#F43F5E]">
                          {article.date}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onReadArticle(article)}
                      className="p-2.5 rounded-full bg-[#1C1917] text-white group-hover:bg-[#F43F5E] transition-colors cursor-pointer"
                      title="Read Article"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
