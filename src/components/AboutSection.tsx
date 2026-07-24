import React from 'react';
import { User, CheckCircle2, Code, Terminal, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    'Clean, Readable, & Scalable Codebase',
    'Pixel-Perfect Responsive Layout Execution',
    'Modern Component-Driven React Development',
    'Fast Load Times & Smooth UI Interactions',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#383838] mb-3">
            <User className="w-3.5 h-3.5 text-[#e8590c]" />
            <span className="text-[#FFF7ED] font-semibold text-xs tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF7ED] tracking-tight">
            Crafting Digital Experiences <span className="text-[#e8590c]">With Warm Precision</span>
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-[#242424] border border-[#383838] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8590c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Tech Stack Badges Card */}
            <div className="lg:col-span-5 bg-[#2c2c2c] border border-[#4a2717] rounded-2xl p-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#e8590c]/10 border border-[#e8590c]/30 flex items-center justify-center text-[#e8590c]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#FFF7ED] font-bold text-base">Ryan's Stack</h3>
                  <p className="text-xs text-zinc-400">Frontend Web Engineering</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-[#242424] border border-[#383838] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Code className="w-4 h-4 text-[#e8590c]" />
                    <span className="text-xs font-semibold text-zinc-200">Markup & Styling</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 rounded">
                    HTML5 / CSS3 / Tailwind
                  </span>
                </div>

                <div className="p-3 bg-[#242424] border border-[#383838] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-[#e8590c]" />
                    <span className="text-xs font-semibold text-zinc-200">Scripting & Logic</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 rounded">
                    JavaScript / TypeScript
                  </span>
                </div>

                <div className="p-3 bg-[#242424] border border-[#383838] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-[#e8590c]" />
                    <span className="text-xs font-semibold text-zinc-200">Frameworks</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 rounded">
                    React.js / Vite
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFF7ED]">
                Passionate Frontend Developer Focused on Clean Code & Aesthetics
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Hello! I am Ryan, a dedicated web developer with a continuous drive for building pixel-perfect, responsive web applications. I turn design mockups into living, interactive web interfaces that perform seamlessly on any screen size.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                My approach combines clean architecture with sharp visual detail. Whether crafting fluid grid layouts, optimizing touch targets, or polishing micro-interactions, I treat every project with absolute dedication and a warm, collaborative spirit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8590c] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
