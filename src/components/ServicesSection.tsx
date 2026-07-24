import React from 'react';
import { Wrench, Code2, Smartphone, Zap, Layers, Check } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onOpenHireModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenHireModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#e8590c]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#e8590c]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#e8590c]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#e8590c]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#e8590c]" />;
    }
  };

  return (
    <section id="service" className="py-20 relative bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#383838] mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#e8590c]" />
            <span className="text-[#FFF7ED] font-semibold text-xs tracking-wider uppercase">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF7ED] tracking-tight">
            What I Can <span className="text-[#e8590c]">Do For You</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mt-2">
            Tailored web engineering services designed to bring your ideas to life with high visual precision and warm responsiveness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#242424] border border-[#383838] rounded-2xl p-6 sm:p-8 hover:border-[#e8590c]/60 hover:bg-[#2c2c2c] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-md"
            >
              {/* Subtle Orange Top Highlight on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e8590c] transition-colors duration-300 glow-orange" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2a2a2a] border border-[#4a2717] flex items-center justify-center mb-6 group-hover:bg-[#e8590c]/15 group-hover:border-[#e8590c]/50 transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-[#FFF7ED] mb-3 group-hover:text-[#e8590c] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-[#e8590c]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#e8590c]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#383838] flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">SERVICE // 0{SERVICES.indexOf(service) + 1}</span>
                <button
                  onClick={onOpenHireModal}
                  className="text-xs font-bold text-[#FFF7ED] group-hover:text-[#e8590c] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Service</span>
                  <span className="text-[#e8590c]">➔</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
