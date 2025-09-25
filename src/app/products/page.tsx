'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
          {/* Futuristic Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">Our Products</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto font-light tracking-wide px-4">
              Custom development solutions designed to elevate your digital presence and customer experience.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black flex justify-center items-center relative overflow-hidden">
          {/* Futuristic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Custom Website Development Product */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-6 sm:p-8 lg:p-10 flex flex-col min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 sm:mb-6 border border-cyan-400/30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 tracking-wider">CUSTOM WEBSITES</h2>
                  <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-sm sm:text-base lg:text-xl text-gray-300 font-medium tracking-wide">Bespoke web development tailored to your business needs</p>
                </div>
                
                <div className="flex-grow">
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4">What's Included</h3>
                      <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-300">
                        <li className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-0.5 sm:mt-1">
                            <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Custom design and user experience</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Responsive design for all devices</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Content management system integration</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">SEO optimization and performance tuning</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Hosting setup and ongoing maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cyan-400/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-black text-white mb-2 tracking-tight">
                      Custom Pricing
                    </div>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">Get a personalized quote based on your specific requirements</p>
                  </div>
                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 border border-cyan-400/50">
                    Start Your Custom Website
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Voice Agents Product */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-purple-400/30 shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/60 transition-all duration-500 p-10 flex flex-col min-h-[800px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl mb-6 border border-purple-400/30">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg shadow-purple-400/25">
                      <div className="w-6 h-6 bg-black rounded-sm transform rotate-45"></div>
                    </div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">VOICE AGENTS</span>
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 mx-auto rounded-full mb-6 shadow-lg shadow-purple-400/50"></div>
                  <p className="text-xl text-gray-300 font-medium tracking-wide">AI-powered voice assistants tailored to your business needs</p>
                </div>
                
                <div className="flex-grow">
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-4">Capabilities</h3>
                      <ul className="space-y-4 text-lg text-gray-300">
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Natural conversation and context understanding</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Custom voice training and personality design</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Integration with your existing systems and databases</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Multi-language support and regional accents</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">Real-time analytics and conversation insights</span>
                        </li>
                        <li className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25 mt-1">
                            <span className="text-black text-sm font-bold">✓</span>
                          </div>
                          <span className="font-medium tracking-wide">24/7 availability and seamless handoff to humans</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-purple-400/30">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-black text-white mb-2 tracking-tight">
                      Custom Pricing
                    </div>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">Get a personalized quote based on your specific requirements</p>
                  </div>
                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black rounded-xl font-bold text-center hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 border border-purple-400/50">
                    Build Your Voice Agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Solution CTA */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 relative overflow-hidden">
          {/* Futuristic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Complete Digital Solution</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto tracking-wide">
              Combine both products for maximum impact. Get a custom website AND voice agent to create a complete digital experience for your customers.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 mb-12 border border-cyan-400/30">
              <h3 className="text-3xl font-bold text-white mb-4">Website + Voice Agent Bundle</h3>
              <p className="text-xl text-gray-300 mb-6">Everything you need for a complete digital presence</p>
              <div className="text-4xl font-black text-white">
                Custom Pricing
              </div>
              <p className="text-gray-300 text-lg mt-2">Get a personalized quote based on your specific requirements</p>
            </div>
            <Link href="/contact" className="inline-block px-16 py-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-3xl font-black text-2xl shadow-2xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/25 border border-cyan-400/50 tracking-wider">
              Get Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
