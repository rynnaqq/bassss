import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface DownloadCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadCvModal: React.FC<DownloadCvModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    
    // Generate simulated CV text file download
    setTimeout(() => {
      const cvText = `
==================================================
RYAN - WEB DEVELOPER CURRICULUM VITAE
==================================================
Role: Lead Web Developer
Focus: Modern, Responsive & Efficient Web Applications
Core Stack: HTML5, CSS3, JavaScript, TypeScript, React.js, Tailwind CSS

STATISTICS
- Completed Projects: 40+
- Experience: 1+ Years
- Client Satisfaction: High Quality Code Standards

SKILLS & PROFICIENCY
- Frontend: HTML5 (95%), CSS3/Tailwind (92%), JS (88%), TS (82%)
- Frameworks: React.js (85%), Vite (90%), Motion (80%)
- Tools: Git, GitHub, VS Code, Chrome DevTools

SUMMARY
Specializing in building modern web pages with dark background visual hierarchy,
electric orange accents (#e8590c), warm cream highlights (#FFF7ED), clean code architectures,
and mobile responsiveness.

Email: ryan.developer@example.com
Portfolio: https://ryan-portfolio.app
==================================================
      `.trim();

      const blob = new Blob([cvText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Ryan_Web_Developer_CV.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#242424] border border-[#4a2717] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#2c2c2c] text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e8590c]/15 border border-[#e8590c]/30 flex items-center justify-center text-[#e8590c]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#FFF7ED]">Ryan's Resume / CV</h3>
            <p className="text-xs text-zinc-400">Official Curriculum Vitae</p>
          </div>
        </div>

        {/* CV Summary Preview Card */}
        <div className="bg-[#2c2c2c] border border-[#383838] rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#383838] pb-3">
            <span className="text-xs font-bold text-[#FFF7ED] uppercase">Primary Focus</span>
            <span className="text-[11px] font-mono text-[#e8590c] bg-[#e8590c]/15 px-2 py-0.5 rounded">
              Web Developer
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <Briefcase className="w-4 h-4 text-[#e8590c]" />
              <span>Frontend Engineering & Responsive UI</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <GraduationCap className="w-4 h-4 text-[#e8590c]" />
              <span>HTML5, CSS3, JavaScript, React.js</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <Award className="w-4 h-4 text-[#e8590c]" />
              <span>40+ Completed Projects Deliveries</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full py-3.5 rounded-full bg-[#e8590c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#d9480f] transition-all cursor-pointer disabled:opacity-50"
          >
            {downloading ? (
              <span>Preparing File...</span>
            ) : downloadComplete ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>CV Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download CV (PDF/TXT)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
