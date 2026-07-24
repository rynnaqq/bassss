import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, MapPin, Copy, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ryan.developer@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#383838] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#e8590c]" />
            <span className="text-[#FFF7ED] font-semibold text-xs tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF7ED] tracking-tight">
            Let's Build Something <span className="text-[#e8590c]">Awesome</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mt-2">
            Have a project idea, question, or opportunity? Feel free to reach out directly to Ryan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#242424] border border-[#383838] rounded-2xl p-6 relative overflow-hidden shadow-md">
              <h3 className="text-xl font-bold text-[#FFF7ED] mb-2">Contact Information</h3>
              <p className="text-zinc-300 text-sm mb-6">
                Directly connect with Ryan through email or active social channels.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-[#2c2c2c] border border-[#4a2717] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#e8590c]/15 flex items-center justify-center text-[#e8590c]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#FFF7ED]">ryan.developer@example.com</div>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-[#242424] text-zinc-300 hover:text-[#e8590c] hover:border-[#e8590c] border border-[#383838] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#e8590c]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#2c2c2c] border border-[#383838] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e8590c]/15 flex items-center justify-center text-[#e8590c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#FFF7ED]">Remote / Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#383838]">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Social Channels
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#2c2c2c] border border-[#383838] flex items-center justify-between text-xs font-medium text-zinc-200 hover:text-[#e8590c] hover:border-[#e8590c]/50 transition-colors group"
                    >
                      <span>{soc.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#e8590c] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#242424] border border-[#383838] rounded-2xl p-6 sm:p-8 relative shadow-md">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#383838]">
              <div className="w-10 h-10 rounded-xl bg-[#e8590c]/15 flex items-center justify-center text-[#e8590c]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFF7ED]">Send a Direct Message</h3>
                <p className="text-xs text-zinc-400">I will respond as soon as possible.</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e8590c]/15 border border-[#e8590c] flex items-center justify-center text-[#e8590c]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#FFF7ED]">Message Sent Successfully!</h4>
                <p className="text-zinc-300 text-sm max-w-md">
                  Thank you for contacting Ryan. Your message has been received and you will hear back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Your Name <span className="text-[#e8590c]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-sm focus:outline-none focus:border-[#e8590c] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Email Address <span className="text-[#e8590c]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-sm focus:outline-none focus:border-[#e8590c] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-sm focus:outline-none focus:border-[#e8590c] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Message <span className="text-[#e8590c]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project goals or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] text-sm focus:outline-none focus:border-[#e8590c] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#e8590c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#d9480f] hover:shadow-[0_0_25px_rgba(232,89,12,0.5)] transition-all cursor-pointer mt-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
