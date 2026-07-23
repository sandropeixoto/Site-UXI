import React, { useState } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { QualityControl } from './components/QualityControl';
import { PerformanceStats } from './components/PerformanceStats';
import { SampleCalculator } from './components/SampleCalculator';
import { WhyUxi } from './components/WhyUxi';
import { Resources } from './components/Resources';
import { SocialFeed } from './components/SocialFeed';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SpecialistModal } from './components/SpecialistModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans">
      <SEO />
      {/* Sticky Glass Navbar */}
      <Navbar onOpenSpecialist={() => setSpecialistModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenSpecialist={() => setSpecialistModalOpen(true)} />

        {/* Services Grid */}
        <Services onOpenSpecialist={() => setSpecialistModalOpen(true)} />

        {/* Methodology & Process */}
        <Methodology />

        {/* Quality Control & Anti-fraud */}
        <QualityControl />

        {/* Performance Statistics & Comparison */}
        <PerformanceStats />

        {/* Interactive Sample Calculator */}
        <SampleCalculator onOpenSpecialist={() => setSpecialistModalOpen(true)} />

        {/* Why UXI & Leadership History */}
        <WhyUxi />

        {/* Resources & Downloadable Whitepapers */}
        <Resources />

        {/* Instagram Feed */}
        <SocialFeed />

        {/* Contact Form & Location */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal for Specialist Callback */}
      <SpecialistModal
        isOpen={specialistModalOpen}
        onClose={() => setSpecialistModalOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
