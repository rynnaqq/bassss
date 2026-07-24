import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye, X } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const categories = ['All', 'Web App', 'Dashboard', 'E-Commerce', 'Landing Page'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="project" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#383838] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#e8590c]" />
            <span className="text-[#FFF7ED] font-semibold text-xs tracking-wider uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF7ED] tracking-tight">
            Featured <span className="text-[#e8590c]">Projects</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mt-2">
            Explore recent web application builds and responsive interface solutions created by Ryan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#e8590c] text-white shadow-[0_0_20px_rgba(232,89,12,0.4)]'
                  : 'bg-[#242424] border border-[#383838] text-zinc-300 hover:text-[#FFF7ED] hover:border-[#e8590c]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#242424] border border-[#383838] rounded-2xl overflow-hidden hover:border-[#e8590c]/60 transition-all duration-300 group flex flex-col justify-between shadow-md"
            >
              {/* Image Thumbnail Header */}
              <div className="relative aspect-video overflow-hidden bg-[#2c2c2c]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />

                {/* Badge Category */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1a1a1a]/85 backdrop-blur-md border border-[#4a2717] text-[#e8590c] text-[11px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Action Hover Overlay */}
                <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setPreviewProject(project)}
                    className="w-11 h-11 rounded-full bg-[#e8590c] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
                    title="View Project Details"
                  >
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#2a2a2a] border border-[#383838] text-[#FFF7ED] flex items-center justify-center hover:border-[#e8590c] hover:text-[#e8590c] hover:scale-110 transition-all cursor-pointer"
                    title="View GitHub Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#FFF7ED] group-hover:text-[#e8590c] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#2c2c2c] border border-[#383838] text-zinc-300 text-[11px] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#242424] border border-[#4a2717] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#2c2c2c] text-zinc-300 hover:text-white hover:bg-[#383838] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video rounded-xl overflow-hidden border border-[#383838]">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#e8590c]/15 text-[#e8590c] text-xs font-bold uppercase tracking-wider mb-2">
                {previewProject.category}
              </div>
              <h3 className="text-2xl font-bold text-[#FFF7ED]">{previewProject.title}</h3>
              <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                {previewProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {previewProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#2c2c2c] border border-[#4a2717] text-[#e8590c] text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#383838]">
              <button
                onClick={() => {
                  alert(`Opening demo preview for ${previewProject.title}`);
                }}
                className="px-6 py-2.5 rounded-full bg-[#e8590c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#d9480f] transition-all cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <a
                href={previewProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#2c2c2c] border border-[#383838] text-[#FFF7ED] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-[#e8590c] transition-all"
              >
                <Github className="w-4 h-4 text-[#e8590c]" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
