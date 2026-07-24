import React from 'react';
import { Cpu, Code, Layers, Terminal, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skill" className="py-20 relative bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#383838] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#e8590c]" />
            <span className="text-[#FFF7ED] font-semibold text-xs tracking-wider uppercase">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF7ED] tracking-tight">
            Technical <span className="text-[#e8590c]">Proficiency</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mt-2">
            A comprehensive breakdown of core languages, libraries, and developer tools in Ryan's toolkit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#242424] border border-[#383838] rounded-2xl p-6 hover:border-[#4a2717] transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#383838]">
                  <div className="w-8 h-8 rounded-lg bg-[#e8590c]/15 flex items-center justify-center text-[#e8590c]">
                    {idx === 0 ? <Code className="w-4 h-4" /> : idx === 1 ? <Layers className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#FFF7ED] tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-zinc-200 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#e8590c]" />
                          {skill.name}
                        </span>
                        <span className="text-[#e8590c] font-mono">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden border border-[#383838] p-0.5">
                        <div
                          className="h-full bg-[#e8590c] rounded-full glow-orange transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#383838] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>STATUS // ACTIVE</span>
                <Sparkles className="w-3 h-3 text-[#e8590c]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
