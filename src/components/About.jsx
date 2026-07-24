import React from 'react';
import { Shield, Award, Cpu, CheckCircle, Server, Lock, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Lock,
      title: 'Keamanan Tingkat Enterprise',
      desc: 'Enkripsi data end-to-end, proteksi Zero Trust, dan kepatuhan penuh terhadap standar regulasi internasional.'
    },
    {
      icon: Server,
      title: 'Skalabilitas Tanpa Batas',
      desc: 'Arsitektur cloud-native modern yang dirancang untuk menangani jutaan permintaan bersamaan tanpa degradasi performa.'
    },
    {
      icon: Cpu,
      title: 'Inovasi Berbasis AI',
      desc: 'Integrasi mesin kecerdasan buatan terapan untuk otomatisasi alur kerja dan ekstraksi wawasan bisnis berakurasi tinggi.'
    },
    {
      icon: Users,
      title: 'Mitra Strategis Terpercaya',
      desc: 'Dukungan tim ahli berpengalaman lintas disiplin dengan komitmen pendampingan jangka panjang bagi pertumbuhan bisnis.'
    }
  ];

  const certifications = [
    { code: 'ISO 27001', name: 'Information Security Management' },
    { code: 'ISO 9001', name: 'Quality Management Systems' },
    { code: 'SOC 2 TYPE II', name: 'Security, Availability & Confidentiality' },
    { code: 'GDPR / HIPAA', name: 'Global Data Privacy Compliance' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#121212] border-t border-[#595959]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#595959] text-xs font-mono text-[#A5A5A5] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>PROFIL PERUSAHAAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F2F2] tracking-tight mb-4">
            Membangun Pondasi Digital yang Tangguh & Terpercaya
          </h2>
          <p className="text-sm sm:text-base text-[#7F7F7F] max-w-3xl leading-relaxed">
            Aethel Dynamics adalah mitra transformasi digital B2B terdepan yang berfokus pada penyediaan solusi teknologi kelas atas bagi korporasi dan institusi skala global.
          </p>
        </div>

        {/* Content Layout: Visual & Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Image with Grayscale Effect */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#595959]/50 to-[#A5A5A5]/30 blur-sm opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-lg overflow-hidden bg-[#1A1A1A] border border-[#595959]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Aethel Dynamics Engineering Center"
                className="w-full h-80 sm:h-96 object-cover img-grayscale-transition cursor-pointer"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1A1A1A] border border-[#595959]">
                    <Shield className="w-5 h-5 text-[#F2F2F2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F2F2F2]">SCBD Executive Innovation Center</h3>
                    <p className="text-xs text-[#7F7F7F]">Jakarta & International Hubs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Narrative & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#1A1A1A] border border-[#595959] rounded-lg p-6 sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#F2F2F2] flex items-center gap-2">
                <span>Visi Misi Utama</span>
                <span className="w-8 h-[1px] bg-[#A5A5A5]"></span>
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Didirikan dengan standar teknis tertinggi, Aethel Dynamics mendedikasikan keahliannya untuk menjembatani kompleksitas arsitektur cloud, kecerdasan buatan, dan keamanan siber menjadi solusi bisnis yang fungsional, terukur, serta berorientasi pada hasil nyata.
              </p>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Kami percaya bahwa kesuksesan organisasi B2B di era modern sangat bergantung pada keandalan infrastruktur inti. Setiap solusi yang kami rancang melalui tahapan validasi ketat untuk menjamin kontinuitas operasional serta keamanan aset berharga klien.
              </p>
            </div>

            {/* Sertifikasi Standard Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7F7F7F]">
                Standard & Standar Akreditasi Internasional
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-[#1A1A1A] border border-[#595959]/60 hover:border-[#A5A5A5] p-3 rounded-md text-center transition-colors">
                    <div className="text-xs font-bold text-[#F2F2F2] font-mono">{cert.code}</div>
                    <div className="text-[10px] text-[#7F7F7F] truncate">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Pilar Keunggulan Bisnis */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F2F2F2] mb-8 flex items-center gap-3">
            <span>Pilar Keunggulan Bisnis</span>
            <span className="flex-1 h-[1px] bg-[#595959]/40"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1A1A1A] border border-[#595959] hover:border-[#A5A5A5] rounded-lg p-6 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-[#121212] border border-[#595959] flex items-center justify-center mb-5 group-hover:border-[#A5A5A5] transition-colors">
                      <IconComp className="w-5 h-5 text-[#F2F2F2] group-hover:text-[#A5A5A5] transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-[#F2F2F2] mb-2 group-hover:text-[#F2F2F2]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#CCCCCC] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#595959]/30 flex items-center text-[11px] font-mono text-[#7F7F7F] group-hover:text-[#A5A5A5] transition-colors">
                    <span>PILAR 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
