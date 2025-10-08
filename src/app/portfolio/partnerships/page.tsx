'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PartnershipsPortfolio() {
  const partnerships: any[] = [
    // Partnership projects will be added here as they are completed
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-8 border border-blue-500/30">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse shadow-lg shadow-blue-400/50"></div>
            <span className="tracking-wider uppercase">Strategic Partnerships Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Partnerships</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            Strategic integrations and partnerships that drive business growth
          </p>
        </div>
      </section>

      {/* Partnerships Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
              Our <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Strategic Integrations</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
              Powerful integrations that connect your tools and automate your workflows
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-blue-400/30 p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-400/25">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Partnership Projects Coming Soon</h3>
              <p className="text-lg text-gray-300 mb-6">
                We're developing strategic partnerships and integrations that will be showcased here soon.
              </p>
              <Link 
                href="/portfolio"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-black rounded-xl font-bold hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                View Our Web Portfolio
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black w-full overflow-hidden relative">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-blue-400/30 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight">
                Ready to <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Integrate Your Tools</span>?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Let's connect your existing tools and create powerful automation workflows that streamline your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <Link 
                  href="/contact"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-black rounded-2xl font-bold text-base sm:text-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 border border-blue-400/50 w-full sm:w-auto text-center justify-center"
                >
                  <span className="relative z-10 tracking-wider">Get Your Custom Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/portfolio"
                  className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent text-blue-300 rounded-2xl font-bold text-base sm:text-lg border-2 border-blue-400/50 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm w-full sm:w-auto text-center justify-center"
                >
                  View All Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
