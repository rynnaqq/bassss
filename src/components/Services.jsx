import React, { useState } from 'react';
import { Cpu, Cloud, ShieldCheck, Code2, ArrowUpRight, CheckCircle2, ChevronRight, X, Layers, Terminal } from 'lucide-react';

export default function Services({ onSelectService = (svc = null) => {}, onOpenConsultation = (subject = '') => {} }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'ai-ml',
      icon: Cpu,
      title: 'AI & Machine Learning Solutions',
      tagline: 'Kecerdasan Buatan Terapan untuk Automasi Enterprise',
      description: 'Pengembangan model AI kustom, implementasi Large Language Model (LLM) terenkripsi, analitik prediktif, dan pemrosesan bahasa alami (NLP) berakurasi tinggi.',
      features: [
        'Custom Enterprise LLM & RAG System',
        'Predictive Analytics & Forecasting Engine',
        'Computer Vision & Document Intelligence',
        'Autonomous Workflow & Process Automation'
      ],
      deliverables: [
        'Model Machine Learning Terlatih & Ter-benchmarking',
        'API Service & Microservices Wrapper',
        'Sistem Monitoring Performa Model Real-time',
        'Dokumentasi Arsitektur & Pelatihan Operasional'
      ]
    },
    {
      id: 'cloud-eng',
      icon: Cloud,
      title: 'Cloud Engineering & Infrastructure',
      tagline: 'Arsitektur Modernisasi Cloud Skala Besar',
      description: 'Perancangan ulang arsitektur cloud, migrasi infrastruktur skala besar, otomatisasi CI/CD, ketersediaan tinggi (HA), dan efisiensi biaya infrastruktur B2B.',
      features: [
        'Multi-Cloud Strategy (AWS, GCP, Azure)',
        'Kubernetes Container Orchestration',
        'Infrastructure as Code (Terraform / Pulumi)',
        'Cloud Cost Optimization & FinOps Audit'
      ],
      deliverables: [
        'Blueprint Arsitektur Cloud Multi-Region',
        'Pipelines CI/CD Automated Deployment',
        'Skema Disaster Recovery & High Availability',
        'Laporan Cost Optimization & SLA Guarantee'
      ]
    },
    {
      id: 'cyber-sec',
      icon: ShieldCheck,
      title: 'Cyber Security & Compliance',
      tagline: 'Perlindungan Siber Zero-Trust & Audit Kepatuhan',
      description: 'Audit keamanan komprehensif, penetration testing berkala, arsitektur Zero Trust, serta enkripsi data tingkat lanjut untuk mematuhi regulasi global.',
      features: [
        'Zero Trust Network Architecture (ZTNA)',
        'Penetration Testing & Vulnerability Assessment',
        'SOC 2 Type II & ISO 27001 Compliance Prep',
        'Automated Real-Time Threat Detection'
      ],
      deliverables: [
        'Laporan Audit Keamanan & Remediasi Vabilitas',
        'Implementasi IAM & Enkripsi End-to-End',
        'Buku Panduan Incident Response Plan',
        'Sertifikat Kesiapan Kepatuhan Siber'
      ]
    },
    {
      id: 'custom-dev',
      icon: Code2,
      title: 'Custom Software Development',
      tagline: 'Sistem Perangkat Lunak Skala Enterprise',
      description: 'Rancang bangun sistem backend berkinerja tinggi, API dengan latensi ultra-rendah, platform web terintegrasi, dan modernisasi sistem legacy.',
      features: [
        'Microservices Architecture & Event-Driven API',
        'Modern Web & Mobile Enterprise Apps',
        'Legacy Core System Modernization',
        'Real-Time High-Throughput Engine'
      ],
      deliverables: [
        'Source Code Bersih (Modular, Clean Architecture)',
        'Dokumentasi OpenAPI / Swagger Lengkap',
        'Suite Automation Testing (Unit & Integration)',
        'Garansi Pemeliharaan & SLA Pasca-Rilis'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#121212] border-t border-[#595959]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#595959] text-xs font-mono text-[#A5A5A5] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>KAPABILITAS TEKNOLOGI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F2F2] tracking-tight">
              Layanan Utama & Solusi Enterprise
            </h2>
          </div>
          <p className="text-sm text-[#7F7F7F] max-w-md leading-relaxed">
            Dibuat secara presisi menggunakan teknologi mutakhir untuk mendorong keunggulan operasional dan daya saing bisnis korporat.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#1A1A1A] border border-[#595959] hover:border-[#A5A5A5] rounded-lg p-6 sm:p-8 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#121212] border border-[#595959] flex items-center justify-center group-hover:border-[#A5A5A5] group-hover:bg-[#1A1A1A] transition-all">
                      <IconComp className="w-6 h-6 text-[#F2F2F2] group-hover:text-[#A5A5A5] transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-[#7F7F7F] px-2.5 py-1 bg-[#121212] border border-[#595959]/50 rounded">
                      ENTERPRISE
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#F2F2F2] mb-2 group-hover:text-[#F2F2F2]">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#A5A5A5] mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#CCCCCC] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-[#595959]/30">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A5A5A5] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#595959]/40">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#F2F2F2] bg-[#121212] hover:bg-[#595959]/30 border border-[#595959] hover:border-[#A5A5A5] rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Spesifikasi Layanan</span>
                    <ChevronRight className="w-4 h-4 text-[#7F7F7F]" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation && onOpenConsultation(service.title)}
                    className="p-2.5 text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-colors cursor-pointer"
                    title="Konsultasi Layanan Ini"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Specification Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1A1A1A] border border-[#A5A5A5] rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#121212] text-[#7F7F7F] hover:text-[#F2F2F2] border border-[#595959] transition-colors"
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#121212] border border-[#595959]">
                <selectedService.icon className="w-6 h-6 text-[#F2F2F2]" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#A5A5A5] uppercase">MODUL SKALABILITAS</span>
                <h3 className="text-xl font-bold text-[#F2F2F2]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-[#CCCCCC] leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#595959]/50">
              <h4 className="text-xs font-mono uppercase text-[#A5A5A5] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#F2F2F2]" />
                <span>Fitur Utama & Arsitektur</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.features.map((f, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#121212] border border-[#595959]/40 text-xs text-[#CCCCCC] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A5A5A5]"></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-[#A5A5A5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F2F2F2]" />
                <span>Hasil Deliverables Proyek</span>
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((d, idx) => (
                  <li key={idx} className="text-xs text-[#CCCCCC] flex items-start gap-2">
                    <span className="text-[#A5A5A5] font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#595959]/50 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-xs font-medium text-[#CCCCCC] bg-[#121212] hover:bg-[#595959]/30 border border-[#595959] rounded-md transition-colors"
              >
                Tutup Spesifikasi
              </button>

              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  if (onOpenConsultation) {
                    onOpenConsultation(title);
                  }
                }}
                className="px-6 py-2.5 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Konsultasikan Solusi Ini</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
