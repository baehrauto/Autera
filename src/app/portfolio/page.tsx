'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const portfolioSections = [
    {
      title: 'Websites',
      description: 'Custom web development solutions that transform your digital presence',
      icon: '🌐',
      gradient: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-400/30',
      hoverBorderColor: 'hover:border-cyan-400/60',
      shadowColor: 'shadow-cyan-500/25',
      href: '/portfolio/websites',
      projects: [
        {
          name: 'Blueline Intelligence Agency',
          description: 'Professional investigation services website for a licensed private detective agency',
          image: '/images/partners/logo.png',
          technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
        },
        {
          name: 'Trust But Verify Solutions',
          description: 'Veteran-owned SCIF construction and federal compliance consulting company',
          image: '/images/partners/logo2.png',
          technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel']
        }
      ]
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
            <span className="tracking-wider uppercase">Our Work Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Portfolio</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            Real results from businesses that put their operations on autopilot
          </p>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
              Our <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
              Explore our web development portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {portfolioSections.map((section, index) => (
              <Link
                key={section.title}
                href={section.href}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 p-6 sm:p-8 lg:p-10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-cyan-400/25`}>
                      <span className="text-3xl">{section.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">{section.title}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-bold tracking-wider">Portfolio Section</p>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4">Featured Projects:</h4>
                    <div className="space-y-4">
                      {section.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-4 border border-cyan-400/20">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Image
                                src={project.image}
                                alt={project.name}
                                width={24}
                                height={24}
                                className="rounded"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-white font-bold text-sm sm:text-base mb-1">{project.name}</h5>
                              <p className="text-gray-300 text-xs sm:text-sm mb-2">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-6"></div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center text-cyan-300 font-bold text-lg group-hover:text-cyan-200 transition-colors duration-300">
                      <span>View {section.title} Portfolio</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
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
                Ready to See Your Business on <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">AUTOPILOT</span>?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Let's discuss how we can transform your operations and showcase your success story in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <Link 
                  href="/contact"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl font-bold text-base sm:text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 border border-cyan-400/50 w-full sm:w-auto text-center justify-center"
                >
                  <span className="relative z-10 tracking-wider">Book a Free Automation Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/solutions"
                  className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent text-cyan-300 rounded-2xl font-bold text-base sm:text-lg border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm w-full sm:w-auto text-center justify-center"
                >
                  Learn More About Our Services
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
