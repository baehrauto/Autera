'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 overflow-hidden">
          {/* Futuristic Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight">Automation Services</h1>
            <p className="text-3xl md:text-4xl text-gray-300 max-w-5xl mx-auto font-light tracking-wide">
              Executive-level automation services designed to transform your operations and drive growth.
            </p>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black flex justify-center items-center relative overflow-hidden">
          {/* Futuristic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch relative z-10">
            {/* Starter Card */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">STARTER</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-300 font-medium tracking-wide">Essential automation for growing businesses</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-5 text-base text-gray-300">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">One system automation</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Free automation audit</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Weekly strategy calls</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Basic reporting dashboard</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">5 integration connections</span>
                    </li>
              </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cyan-400/30">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-white mb-2 tracking-tight">
                      $1,500<span className="text-2xl font-normal text-cyan-300">/month</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">One system + audit + weekly call</p>
                  </div>
                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 border border-cyan-400/50">
                    Book a Free Automation Audit
                  </Link>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">GROWTH</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-300 font-medium tracking-wide">Advanced automation for scaling businesses</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-5 text-base text-gray-300">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Everything in Starter</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Multiple system automation</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Ongoing operations support</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">15 integration connections</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Priority support</span>
                    </li>
              </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cyan-400/30">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-white mb-2 tracking-tight">
                      $3,000<span className="text-2xl font-normal text-cyan-300">/month</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">Multiple systems + ongoing ops support</p>
                  </div>
                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 border border-cyan-400/50">
                    Book a Free Automation Audit
                  </Link>
                </div>
              </div>
            </div>

            {/* Partner Card */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">PARTNER</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-300 font-medium tracking-wide">Complete business automation with enterprise features</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-5 text-base text-gray-300">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Everything in Growth</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Deep system integration</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Weekly operations management</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Custom AI model training</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Unlimited integrations</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Dedicated success manager</span>
                    </li>
              </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cyan-400/30">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-white mb-2 tracking-tight">
                      $5,000<span className="text-2xl font-normal text-cyan-300">/month</span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium tracking-wide">Deep integration + run ops weekly</p>
                  </div>
                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 border border-cyan-400/50">
                    Book a Free Automation Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 relative overflow-hidden">
          {/* Futuristic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to Put Your Operations on Autopilot?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto tracking-wide">
              Start with a free automation audit and see exactly where revenue is slipping through the cracks.
            </p>
            <Link href="/contact" className="inline-block px-16 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-3xl font-black text-2xl shadow-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/25 border border-cyan-400/50 tracking-wider">
              Book a Free Automation Audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


