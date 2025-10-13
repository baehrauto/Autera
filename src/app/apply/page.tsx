'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Apply() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-8 border border-cyan-500/30">
            <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span className="tracking-wider uppercase">Partnership Application</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Apply for <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Partnership</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            We accept a limited number of new partnerships each quarter. Our systems are designed for companies that operate at a higher standard.
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Schedule Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Partnership</span> Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              We accept a limited number of new partnerships each quarter. Schedule a consultation to discuss your operational requirements.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm p-8">
            {/* Calendly inline widget begin */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/greg-autera" style={{minWidth: '320px', height: '700px'}}></div>
            {/* Calendly inline widget end */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
