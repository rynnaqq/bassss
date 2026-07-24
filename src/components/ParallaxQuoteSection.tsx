import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function ParallaxQuoteSection() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#1C1917] text-[#FFF1F2] overflow-hidden">
      
      {/* Background Image with Fixed/Parallax Effect */}
      <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=2000&q=80"
          alt="Parallax background"
          className="w-full h-full object-cover scale-105 transform translate-y-2 transition-transform duration-1000"
        />
      </div>

      {/* Rose-tinted vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/90 to-[#1C1917]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F43F5E]/20 border border-[#F43F5E]/50 text-xs font-mono text-[#FB923C]">
          <Quote className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest font-bold">EDITORIAL MANIFESTO</span>
        </div>

        {/* Big Serif Parallax Quote */}
        <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-white leading-snug tracking-tight max-w-4xl mx-auto">
          “Beauty in the 21st century is not a static ornament; it is an active computational dialogue between organic biological intelligence and human intentionality.”
        </blockquote>

        {/* Citation & Signature */}
        <div className="pt-4 border-t border-white/10 inline-block max-w-xs text-center">
          <span className="text-sm font-serif font-bold text-[#FB923C] block">
            Dr. Aris Thorne
          </span>
          <span className="text-xs font-mono text-white/60 block mt-0.5">
            CHAIR OF TECHNOLOGY & ETHICS, AURA VOL. 42
          </span>
        </div>

      </div>
    </section>
  );
}
