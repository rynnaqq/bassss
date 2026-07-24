import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, X, Sparkles, Eye } from 'lucide-react';
import { PhotoEssay } from '../types';

interface PhotoEssayCarouselProps {
  essays: PhotoEssay[];
}

export default function PhotoEssayCarousel({ essays }: PhotoEssayCarouselProps) {
  const [selectedEssay, setSelectedEssay] = useState<PhotoEssay | null>(null);

  return (
    <section id="photo-essays" className="py-20 sm:py-28 bg-[#FFF1F2] border-t border-[#F43F5E]/20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-[#F43F5E]/20 gap-4">
          <div>
            <span className="text-xs font-mono text-[#F43F5E] font-bold uppercase tracking-widest block mb-2">
              04 / VISUAL ESSAYS & LIGHT
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917]">
              Monolithic Photography
            </h2>
          </div>

          <p className="text-xs font-mono text-[#1C1917]/70 max-w-xs">
            Medium-format analogue film studies on shadow, concrete, and biological forms.
          </p>
        </div>

        {/* Asymmetric Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essays.map((essay, index) => (
            <div
              key={essay.id}
              onClick={() => setSelectedEssay(essay)}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-[#F43F5E]/20 hover:border-[#F43F5E] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-[#1C1917]">
                <img
                  src={essay.image}
                  alt={essay.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-[#1C1917] group-hover:bg-[#F43F5E] group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-mono text-white/90 bg-[#1C1917]/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-[#FB923C]" />
                  <span>{essay.location}</span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#F43F5E] transition-colors">
                  {essay.title}
                </h3>
                <p className="text-xs text-[#1C1917]/75 line-clamp-2 leading-relaxed">
                  {essay.caption}
                </p>

                <div className="pt-3 border-t border-[#F43F5E]/10 flex items-center justify-between text-[11px] font-mono text-[#F43F5E]">
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3 h-3 text-[#FB923C]" />
                    {essay.photographer}
                  </span>
                  <span className="font-bold">INSPECT</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedEssay && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-[#1C1917] text-white rounded-2xl overflow-hidden border border-white/20 shadow-2xl space-y-4 p-6 sm:p-8">
            <button
              onClick={() => setSelectedEssay(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#F43F5E] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] overflow-hidden rounded-xl">
              <img
                src={selectedEssay.image}
                alt={selectedEssay.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-[#FB923C] uppercase tracking-widest block">
                {selectedEssay.location} — ARCHIVAL ESSAY
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {selectedEssay.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-sans">
                {selectedEssay.caption}
              </p>
              <div className="text-xs font-mono text-[#F43F5E] pt-2">
                PHOTOGRAPHY BY {selectedEssay.photographer.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
