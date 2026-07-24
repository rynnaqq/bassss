import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, TrendingUp, ShieldCheck, Cpu, Filter, X, ExternalLink, Check } from 'lucide-react';

export default function Portfolio({ onOpenConsultation = (subject = '') => {} }) {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedCase, setSelectedCase] = useState(null);

  const projects = [
    {
      id: 'fintech-core',
      title: 'Fintech Payment Core Platform',
      category: 'Fintech',
      client: 'Bank Syariah & Payment Gateway Konsorsium',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Modernisasi core banking system untuk pemrosesan 50.000+ transaksi/detik dengan arsitektur zero-downtime.',
      fullDesc: 'Aethel Dynamics merancang ulang infrastruktur inti pemrosesan transaksi keuangan berlatensi rendah. Menggunakan arsitektur event-driven microservices dan database terdistribusi, sistem ini memastikan keandalan mutlak pada puncak pemrosesan hari raya nasional.',
      metrics: [
        { label: 'Efisiensi Transaksi', value: '+40%' },
        { label: 'Latensi Respon API', value: '< 15ms' },
        { label: 'SLA Availability', value: '99.999%' },
        { label: 'Kapasitas Peak Traffic', value: '50K TPS' }
      ],
      techStack: ['Golang', 'Apache Kafka', 'Kubernetes', 'PostgreSQL Distributed', 'Redis Cluster'],
      achievements: [
        'Zero-downtime deployment tanpa interupsi layanan perbankan',
        'Enkripsi HSM hardware-level untuk proteksi kredensial transaksi',
        'Sertifikasi penuh kepatuhan PCI-DSS Level 1'
      ]
    },
    {
      id: 'iot-logistics',
      title: 'Global IoT Logistics Telemetry Tracker',
      category: 'IoT & Logistics',
      client: 'Konglomerat Rantai Pasok Maritim Global',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Platform telemetri rantai pasok global memantau lebih dari 100.000 aset logistik secara real-time.',
      fullDesc: 'Sistem ingestion data IoT berkapasitas tinggi yang memproses jutaan sinyal sensor dari armada kapal kargo, kontainer berpendingin, dan armada darat di 14 negara secara simultan dengan analitik jalur pengiriman otomatis.',
      metrics: [
        { label: 'Visibilitas Real-Time', value: '99.8%' },
        { label: 'Efisiensi Rute Armada', value: '+28%' },
        { label: 'Aset Terhubung', value: '100K+' },
        { label: 'Penghematan Bahan Bakar', value: '18.5%' }
      ],
      techStack: ['IoT MQTT Broker', 'TimescaleDB', 'React', 'Google Cloud Platform', 'Geospatial AI'],
      achievements: [
        'Deteksi dini anomali suhu kontainer makanan & farmasi secara instan',
        'Prediksi waktu kedatangan kapal (ETA) dengan akurasi 98.2%',
        'Otomatisasi kliring dokumen bea cukai digital di pelabuhan'
      ]
    },
    {
      id: 'healthcare-ai',
      title: 'Encrypted Healthcare AI Diagnostic Engine',
      category: 'Healthcare & AI',
      client: 'Jaringan Rumah Sakit & Riset Medis Nasional',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Sistem analisis citra medis AI terenkripsi homomorfik yang mematuhi standar HIPAA & GDPR.',
      fullDesc: 'Platform kecerdasan buatan untuk membantu dokter spesialis menganalisis citra radiologi dan pemindaian tomografi dengan kecepatan tinggi, tanpa pernah mendeskripsi data sensitif pasien di server eksternal.',
      metrics: [
        { label: 'Akurasi Diagnosis Dini', value: '96.4%' },
        { label: 'Privasi Data Pasien', value: '100%' },
        { label: 'Penghematan Waktu Analisis', value: '65%' },
        { label: 'Kepatuhan Regulasi', value: 'HIPAA/GDPR' }
      ],
      techStack: ['PyTorch', 'Homomorphic Encryption', 'FastAPI', 'DICOM Protocol', 'Docker Enterprise'],
      achievements: [
        'Pemrosesan pemindaian medis terenkripsi penuh dari hulu ke hilir',
        'Integrasi mulus ke Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
        'Menerima akreditasi riset keselamatan AI kesehatan internasional'
      ]
    }
  ];

  const categories = ['Semua', 'Fintech', 'IoT & Logistics', 'Healthcare & AI'];

  const filteredProjects = activeFilter === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#121212] border-t border-[#595959]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#595959] text-xs font-mono text-[#A5A5A5] mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>REKAM JEJAK PORTOFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F2F2] tracking-tight">
              Studi Kasus & Implementasi Nyata
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#1A1A1A] p-1.5 rounded-lg border border-[#595959]/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#F2F2F2] text-[#121212] font-semibold shadow-md'
                    : 'text-[#CCCCCC] hover:text-[#F2F2F2] hover:bg-[#595959]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A1A] border border-[#595959] hover:border-[#A5A5A5] rounded-lg overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Thumbnail with Grayscale Hover Effect */}
                <div className="relative overflow-hidden h-52 bg-[#121212]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover img-grayscale-transition group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#121212]/90 border border-[#595959] text-[10px] font-mono text-[#A5A5A5] px-2.5 py-1 rounded backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-[11px] font-mono text-[#7F7F7F] block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-[#F2F2F2] mb-3 group-hover:text-[#A5A5A5] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#CCCCCC] leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Key Impact Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-md bg-[#121212] border border-[#595959]/40 mb-6">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-base font-extrabold font-mono text-[#F2F2F2]">{m.value}</div>
                        <div className="text-[10px] text-[#7F7F7F] truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedCase(project)}
                  className="w-full py-2.5 text-xs font-semibold text-[#F2F2F2] bg-[#121212] hover:bg-[#595959]/40 border border-[#595959] hover:border-[#A5A5A5] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Baca Studi Kasus Lengkap</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A5A5A5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#1A1A1A] border border-[#A5A5A5] rounded-xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#121212] text-[#7F7F7F] hover:text-[#F2F2F2] border border-[#595959] transition-colors"
              aria-label="Tutup Studi Kasus"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A5A5A5] mb-2">
                <span>{selectedCase.category}</span>
                <span>•</span>
                <span>{selectedCase.client}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F2F2F2]">{selectedCase.title}</h3>
            </div>

            {/* Thumbnail Banner */}
            <div className="rounded-lg overflow-hidden h-60 border border-[#595959]">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Narrative */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#A5A5A5]">Ringkasan Pelaksanaan Proyek</h4>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                {selectedCase.fullDesc}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedCase.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#121212] border border-[#595959]/50 rounded-md">
                  <div className="text-xl font-mono font-extrabold text-[#F2F2F2]">{m.value}</div>
                  <div className="text-[11px] text-[#7F7F7F]">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements Checklist */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase text-[#A5A5A5]">Hasil Utama & Pencapaian</h4>
              <div className="space-y-2">
                {selectedCase.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC] bg-[#121212]/50 p-2.5 rounded border border-[#595959]/30">
                    <Check className="w-4 h-4 text-[#A5A5A5] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase text-[#7F7F7F]">Teknologi Digunakan</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-[11px] font-mono bg-[#121212] border border-[#595959] rounded text-[#A5A5A5]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#595959]/50 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2.5 text-xs font-medium text-[#CCCCCC] bg-[#121212] hover:bg-[#595959]/30 border border-[#595959] rounded-md transition-colors"
              >
                Tutup Modul
              </button>

              <button
                onClick={() => {
                  const title = selectedCase.title;
                  setSelectedCase(null);
                  if (onOpenConsultation) {
                    onOpenConsultation(`Implementasi mirip: ${title}`);
                  }
                }}
                className="px-6 py-2.5 text-xs font-semibold text-[#121212] bg-[#F2F2F2] hover:bg-[#A5A5A5] rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Minta Diskusi Proyek Serupa</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
