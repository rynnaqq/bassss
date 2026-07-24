import React, { useState } from 'react';
import { BookOpen, Download, Layers, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Issue } from '../types';

interface IssueArchivesProps {
  issues: Issue[];
  currentIssue: Issue;
  onSelectIssue: (issue: Issue) => void;
}

export default function IssueArchives({ issues, currentIssue, onSelectIssue }: IssueArchivesProps) {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (issueNumber: string) => {
    setDownloadSuccess(issueNumber);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <section id="issue-archives" className="py-20 sm:py-28 bg-[#FFF1F2] border-t border-[#F43F5E]/20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#F43F5E]/20 gap-4">
          <div>
            <span className="text-xs font-mono text-[#F43F5E] font-bold uppercase tracking-widest block mb-2">
              05 / PRINT EDITIONS & INDEX
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1917]">
              Archived Editions
            </h2>
          </div>

          <p className="text-xs font-mono text-[#1C1917]/70 max-w-sm">
            Collectable physical print editions and high-resolution digital PDF archives.
          </p>
        </div>

        {/* Issues Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((iss) => {
            const isCurrent = iss.number === currentIssue.number;

            return (
              <div
                key={iss.number}
                className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isCurrent
                    ? 'border-[#F43F5E] shadow-xl ring-2 ring-[#F43F5E]/20'
                    : 'border-[#F43F5E]/20 hover:border-[#F43F5E]/60 shadow-xs hover:shadow-lg'
                }`}
              >
                
                {/* Issue Header & Cover */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#F43F5E] uppercase px-2.5 py-1 bg-[#FFF1F2] rounded-md border border-[#F43F5E]/20">
                      {iss.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#1C1917]/60">
                      {iss.releaseDate}
                    </span>
                  </div>

                  <div className="relative h-64 rounded-xl overflow-hidden border border-[#F43F5E]/20 group">
                    <img
                      src={iss.coverImage}
                      alt={iss.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isCurrent && (
                      <div className="absolute top-3 left-3 bg-[#F43F5E] text-white text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded shadow-sm">
                        ACTIVE ISSUE
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                      {iss.title}
                    </h3>
                    <p className="text-xs font-mono text-[#FB923C] font-semibold mt-1">
                      {iss.theme}
                    </p>
                    <p className="text-xs text-[#1C1917]/75 mt-2 line-clamp-3 leading-relaxed">
                      {iss.summary}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#F43F5E]/15 space-y-2">
                  <button
                    onClick={() => onSelectIssue(iss)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isCurrent
                        ? 'bg-[#F43F5E] text-white shadow-md'
                        : 'bg-[#1C1917] text-white hover:bg-[#F43F5E]'
                    }`}
                  >
                    <span>{isCurrent ? 'Viewing Issue' : 'Select Issue'}</span>
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDownload(iss.number)}
                    className="w-full py-2 px-4 rounded-xl bg-white border border-[#F43F5E]/30 hover:border-[#F43F5E] text-[#1C1917] hover:bg-[#FFF1F2] text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {downloadSuccess === iss.number ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-bold">PDF Ready!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-[#F43F5E]" />
                        <span>Digital PDF Archive</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
