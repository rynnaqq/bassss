import React from 'react';
import { Sparkles, Compass, Star } from 'lucide-react';

export default function MarqueeBanner() {
  const marqueeItems = [
    'THE SYNTHETIC RENAISSANCE',
    'AUTUMN / WINTER 2026',
    'BIO-COMPOSITE ARCHITECTURE',
    'UNCONVENTIONAL TYPOGRAPHY',
    'TACTILE COUTURE',
    'HIGH-ALTITUDE SILENCE',
    'GENERATIVE GEOMETRY',
    'ETHICS OF INVISIBLE CURATION',
  ];

  return (
    <section className="bg-[#F43F5E] text-white py-4 overflow-hidden border-y border-[#E11D48] relative shadow-md">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 mx-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span className="text-[#FB923C]">{item}</span>
            <Star className="w-3.5 h-3.5 fill-[#FB923C] text-[#FB923C]" />
          </div>
        ))}
      </div>
    </section>
  );
}
