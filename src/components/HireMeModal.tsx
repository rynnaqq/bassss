import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<string>('Web Development');
  const [budget, setBudget] = useState<string>('$500 - $1,500');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2500);
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

        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#e8590c]" />
          <h3 className="text-2xl font-extrabold text-[#FFF7ED]">Hire Ryan for Your Project</h3>
        </div>

        {isSent ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#e8590c]" />
            <h4 className="text-xl font-bold text-[#FFF7ED]">Inquiry Received!</h4>
            <p className="text-xs text-zinc-300">Ryan will contact you shortly to discuss terms.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                Project Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Web Development', 'UI/UX Implementation', 'Mobile Responsive', 'Full Redesign'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      projectType === type
                        ? 'bg-[#e8590c] text-white border-[#e8590c] font-bold'
                        : 'bg-[#2c2c2c] border-[#383838] text-zinc-300 hover:border-[#e8590c]/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-xs focus:outline-none focus:border-[#e8590c]"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-xs focus:outline-none focus:border-[#e8590c]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                Estimated Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-xs focus:outline-none focus:border-[#e8590c]"
              >
                <option value="<$500">&lt; $500</option>
                <option value="$500 - $1,500">$500 - $1,500</option>
                <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                <option value="$3,000+">$3,000+</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                Project Scope
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Briefly outline your project requirements..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-xs focus:outline-none focus:border-[#e8590c] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#e8590c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#d9480f] transition-all cursor-pointer"
            >
              <span>Submit Project Proposal</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
