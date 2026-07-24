import React from 'react';
import {
  ArrowRight,
  Github,
  Instagram,
  Youtube,
  Smartphone,
  ExternalLink,
  User,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data';
import { TypewriterText } from './TypewriterText';
import { CyberDecoderText } from './CyberDecoderText';

interface HeroSectionProps {
  onOpenHireModal: () => void;
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenHireModal,
  onOpenCvModal,
}) => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Youtube':
        return <Youtube className="w-4 h-4" />;
      case 'Tiktok':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.65a6.34 6.34 0 0 0-1 .08 6.33 6.33 0 0 0-5.32 6.27A6.33 6.33 0 0 0 12 20.3a6.33 6.33 0 0 0 6.32-6.33V9.2a8.28 8.28 0 0 0 4.77 1.52V7.27a4.85 4.85 0 0 1-3.5-0.58z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 md:pt-36 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e8590c]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#e8590c]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Content & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFF7ED] tracking-tight leading-[1.2] flex flex-col items-start gap-1 sm:gap-2">
              <span>Hello Everyone</span>
              <CyberDecoderText
                text="I'm Ryan"
                highlightText="Ryan"
                speed={35}
                repeatInterval={10000}
              />
            </h1>

            {/* Body Paragraph with Typewriter Effect */}
            <TypewriterText
              text="I am a web developer focused on building modern, responsive, and efficient websites. With a growing expertise in HTML, CSS, and JavaScript,"
              speed={35}
              pauseDuration={4500}
              className="text-base sm:text-lg max-w-xl"
            />

            {/* Social Media Bar */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs text-zinc-400 uppercase tracking-widest font-bold mr-2">
                Follow Me:
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`hero-social-${social.id}`}
                    className="w-10 h-10 rounded-full bg-[#242424] border border-[#383838] flex items-center justify-center text-[#FFF7ED] hover:text-[#e8590c] hover:border-[#e8590c] hover:bg-[#2c2c2c] hover:shadow-[0_0_15px_rgba(232,89,12,0.35)] transition-all duration-300 group"
                    title={social.name}
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Card Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[580px]">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#e8590c]/50 via-[#e8590c]/15 to-transparent rounded-[38px] blur-md opacity-80 animate-pulse-glow" />

              {/* Mockup Phone Frame */}
              <div className="relative w-full h-full bg-[#181818] rounded-[36px] border-2 border-[#4a2717] p-3 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1a1a1a] rounded-full border border-[#383838] z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-[#383838] rounded-full" />
                </div>

                {/* Inner Screen Display */}
                <div className="relative w-full h-full bg-[#1a1a1a] rounded-[28px] overflow-hidden border border-[#383838] group">
                  
                  {/* Anonymous Developer Avatar Artwork Display with Glowing Electric Orange Eyes */}
                  <div className="relative w-full h-full">
                    {/* Dark atmospheric backdrop */}
                    <img
                      src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
                      alt="Ryan Anonymous Developer Artwork"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark gradient overlay & Orange lighting ambient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                    <div className="absolute inset-0 bg-[#e8590c]/15 mix-blend-color-dodge" />

                    {/* Stylized Glowing Electric Orange Eyes Overlay Graphic */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none">
                      <div className="relative flex items-center justify-center gap-12 opacity-95">
                        {/* Left Glowing Eye */}
                        <div className="relative">
                          <div className="w-6 h-1.5 bg-[#e8590c] rounded-full rotate-[-12deg] shadow-[0_0_20px_#e8590c]" />
                          <div className="absolute -top-1 -left-1 w-8 h-3 bg-[#ff7a38] blur-sm rounded-full opacity-80 animate-ping" />
                        </div>
                        {/* Right Glowing Eye */}
                        <div className="relative">
                          <div className="w-6 h-1.5 bg-[#e8590c] rounded-full rotate-[12deg] shadow-[0_0_20px_#e8590c]" />
                          <div className="absolute -top-1 -left-1 w-8 h-3 bg-[#ff7a38] blur-sm rounded-full opacity-80 animate-ping" />
                        </div>
                      </div>
                    </div>

                    {/* View Profile Button Inside Phone Screen (Yellow Box Area) */}
                    <div className="absolute bottom-5 left-4 right-4 z-30">
                      <button
                        onClick={() => {
                          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        id="phone-mockup-view-profile-btn"
                        className="w-full py-3 px-5 rounded-full bg-[#e8590c] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#d9480f] shadow-[0_0_25px_rgba(232,89,12,0.6)] transition-all duration-300 cursor-pointer group/btn active:scale-95"
                      >
                        <User className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                        <span>View Profile</span>
                        <ArrowRight className="w-4 h-4 stroke-[3] group-hover/phone-btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* FLOATING BADGES OVERLAY */}
                  
                  {/* Badge Atas-Kiri: Pill badge gelap bertuliskan 📱 Responsive */}
                  <div className="absolute top-8 left-4 z-20">
                    <div className="px-3.5 py-1.5 rounded-full bg-[#242424]/95 border border-[#4a2717] text-[#FFF7ED] text-xs font-bold shadow-xl backdrop-blur-md flex items-center gap-1.5 glow-orange/30 transform hover:scale-105 transition-transform duration-300">
                      <Smartphone className="w-3.5 h-3.5 text-[#e8590c]" />
                      <span>Responsive</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
