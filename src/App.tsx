import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const scrollToBooking = (specialty?: string) => {
    if (specialty) {
      setSelectedSpecialty(specialty);
    }
    const element = document.getElementById('marcar-consulta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialties = () => {
    const element = document.getElementById('especialidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Notice Banner */}
      <DemoBanner />

      {/* Main Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section with visual highlight pillars */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreClick={scrollToSpecialties}
        />

        {/* About Section */}
        <AboutSection />

        {/* Specialties Section with interactive detail modal & lab spotlight */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={(specName) => scrollToBooking(specName)}
        />

        {/* Demonstrative Clinical Team */}
        <TeamSection
          onSelectDoctorForBooking={(specName) => scrollToBooking(specName)}
        />

        {/* Appointment Booking Request Section */}
        <AppointmentSection
          preselectedSpecialty={selectedSpecialty}
          onClearPreselected={() => setSelectedSpecialty('')}
        />

        {/* Contacts & Demonstrative Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={() => scrollToBooking()} />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
