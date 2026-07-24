import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Architecture', 'Culture']);

  const topics = ['Architecture', 'Culture', 'Tech & Ethics', 'Fashion & Form', 'Visual Essays'];

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 bg-[#FFF1F2] border-t border-[#F43F5E]/20 relative">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-[#F43F5E]/30 shadow-xl relative overflow-hidden space-y-8">
          
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F43F5E]/15 via-[#FB923C]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFF1F2] border border-[#F43F5E]/30 rounded-full text-xs font-mono font-bold text-[#F43F5E]">
              <Sparkles className="w-3.5 h-3.5 text-[#FB923C]" />
              <span className="uppercase tracking-widest">WEEKLY DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917] tracking-tight">
              Curated Editorial directly in your inbox.
            </h2>

            <p className="text-base text-[#1C1917]/80 leading-relaxed font-sans">
              Join 28,000+ architects, designers, critics, and creative directors who receive our Sunday morning dispatch on modern form, ethics, and tactile media.
            </p>
          </div>

          {/* Topic Preferences selection */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#F43F5E] uppercase tracking-widest block font-bold">
              SELECT YOUR INTERESTS:
            </span>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => {
                const active = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                      active
                        ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                        : 'bg-[#FFF1F2] text-[#1C1917] border-[#F43F5E]/20 hover:border-[#F43F5E]'
                    }`}
                  >
                    {active ? `✓ ${topic}` : `+ ${topic}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form / Success State */}
          {isSubmitted ? (
            <div className="p-6 bg-[#FFF1F2] border border-[#F43F5E]/40 rounded-2xl flex items-center gap-4 text-xs font-mono text-[#1C1917]">
              <CheckCircle2 className="w-6 h-6 text-[#F43F5E] shrink-0" />
              <div>
                <span className="font-bold text-[#F43F5E] block text-sm">YOU ARE SUBSCRIBED!</span>
                <span>Welcome to AURA Dispatch. Check your inbox for Issue No. 42 highlights.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-4 top-4 text-[#F43F5E]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your executive or personal email address..."
                  className="w-full pl-11 pr-4 py-3.5 bg-[#FFF1F2] border border-[#F43F5E]/30 rounded-xl text-xs text-[#1C1917] placeholder-[#1C1917]/50 focus:outline-none focus:ring-2 focus:ring-[#F43F5E] transition-all"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#F43F5E] hover:bg-[#E11D48] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#1C1917]/60 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>Zero spam. One-click unsubscribe anytime. Respecting reader privacy.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
