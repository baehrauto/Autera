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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-8 border border-cyan-200">
            <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse shadow-lg shadow-cyan-400/25"></div>
            <span className="tracking-wider uppercase">Partnership Application</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Apply for <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Partnership</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            We accept a limited number of new partnerships each quarter. Our systems are designed for companies that operate at a higher standard.
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Schedule Your <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Partnership</span> Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
              We accept a limited number of new partnerships each quarter. Schedule a consultation to discuss your operational requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-cyan-200 p-8">
            {/* Calendly inline widget begin */}
                      <div className="calendly-inline-widget" data-url="https://calendly.com/private-diagnostic-session/30min" style={{minWidth: '320px', height: '700px'}}></div>
            {/* Calendly inline widget end */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
