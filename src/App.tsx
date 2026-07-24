import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HireMeModal } from './components/HireMeModal';
import { DownloadCvModal } from './components/DownloadCvModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  // Active section scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'service', 'project', 'skill', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#FFF7ED] selection:bg-[#e8590c] selection:text-white relative font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenHireModal={() => setHireModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          onOpenHireModal={() => setHireModalOpen(true)}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <AboutSection />
        <ServicesSection onOpenHireModal={() => setHireModalOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />

      <DownloadCvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

    </div>
  );
}

