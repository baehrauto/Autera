'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WebsitesPortfolio() {
  const projects = [
    {
      name: 'Blueline Intelligence Agency',
      description: 'Professional investigation services website for a licensed private detective agency with over 28 years of law enforcement experience.',
      image: '/images/partners/logo.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      features: ['Professional Design', 'Service Showcase', 'Contact Forms', 'Mobile Responsive'],
      results: 'Professional online presence established',
      gradient: 'from-cyan-500 to-blue-500',
      url: 'https://www.bluelineintellagency.com/'
    },
    {
      name: 'Trust But Verify Solutions',
      description: 'Veteran-owned company specializing in SCIF construction, secure facility design, and federal compliance consulting for government agencies.',
      image: '/images/partners/logo2.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      features: ['Government Focus', 'Project Showcase', 'Service Portfolio', 'Payment Integration'],
      results: 'Professional government contractor presence',
      gradient: 'from-blue-500 to-purple-500',
      url: 'https://tbv-solutions.vercel.app/'
    }
  ];

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
            <span className="tracking-wider uppercase">Web Development Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Custom <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Websites</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            Transform your digital presence with bespoke web solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
              Our <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Web Projects</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
              From e-commerce platforms to corporate websites, we build digital experiences that convert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 p-6 sm:p-8 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-cyan-400/25`}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={32}
                        height={32}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">{project.name}</h3>
                      <div className="text-sm text-cyan-300 font-bold tracking-wider">Web Development</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-300 font-bold text-sm mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-300 font-bold text-sm mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 border border-cyan-400/30">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white mb-1">
                        {project.results}
                      </div>
                      <p className="text-gray-300 text-sm mb-4">Measured Impact</p>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                      >
                        View Live Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black w-full overflow-hidden relative">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight">
                Ready to Build Your <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Dream Website</span>?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Let's create a custom web solution that perfectly represents your brand and drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <Link 
                  href="/contact"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl font-bold text-base sm:text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 border border-cyan-400/50 w-full sm:w-auto text-center justify-center"
                >
                  <span className="relative z-10 tracking-wider">Get Your Custom Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/portfolio"
                  className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent text-cyan-300 rounded-2xl font-bold text-base sm:text-lg border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm w-full sm:w-auto text-center justify-center"
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
