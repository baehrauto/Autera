'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-20 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight">Partnership Program</h1>
            <p className="text-3xl md:text-4xl text-gray-600 max-w-5xl mx-auto font-light tracking-wide">
              For owners who choose time over management.
            </p>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Foundation Service */}
            <div className="group relative bg-white rounded-3xl border border-cyan-200 shadow-xl hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-wider">FOUNDATION</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-600 font-medium tracking-wide">Essential infrastructure for operational excellence</p>
                </div>
                
                <div className="flex-grow">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-cyan-600 mb-4">Designed for:</h4>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Companies establishing operational infrastructure for sustained excellence.
                      </p>
                    </div>
                    
                  <ul className="space-y-5 text-base text-gray-600">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Core system engineering</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Operational assessment</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Strategic oversight sessions</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Performance intelligence dashboard</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Essential system integrations</span>
                    </li>
                </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cyan-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-gray-900 mb-2 tracking-tight">
                      $1,500<span className="text-2xl font-normal text-cyan-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">Foundation infrastructure + assessment + oversight</p>
                  </div>
                  <Link href="/apply" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
                    Apply for Partnership
                  </Link>
                </div>
              </div>
            </div>

              {/* Advanced Service */}
            <div className="group relative bg-white rounded-3xl border border-blue-200 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-wider">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">ADVANCED</span>
                    </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-600 font-medium tracking-wide">Comprehensive infrastructure for operational mastery</p>
                </div>
                
                <div className="flex-grow">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-blue-600 mb-4">Designed for:</h4>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Companies requiring comprehensive operational infrastructure across all departments.
                      </p>
                    </div>
                    
                  <ul className="space-y-5 text-base text-gray-600">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Everything in Foundation</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Multi-system infrastructure engineering</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Continuous operational excellence</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Advanced performance intelligence</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Comprehensive system integrations</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Priority operational support</span>
                    </li>
                </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-gray-900 mb-2 tracking-tight">
                      $3,000<span className="text-2xl font-normal text-blue-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">Multi-system infrastructure + continuous excellence</p>
                  </div>
                  <Link href="/apply" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
                    Apply for Partnership
                  </Link>
                </div>
              </div>
            </div>

              {/* Enterprise Service */}
            <div className="group relative bg-white rounded-3xl border border-purple-200 shadow-xl hover:shadow-2xl hover:border-purple-400 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-wider">
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">ENTERPRISE</span>
                    </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                  <p className="text-lg text-gray-600 font-medium tracking-wide">Complete operational infrastructure with enterprise capabilities</p>
                </div>
                
                <div className="flex-grow">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-purple-600 mb-4">Designed for:</h4>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Enterprise-level companies requiring complete operational infrastructure with dedicated excellence.
                      </p>
                    </div>
                    
                  <ul className="space-y-5 text-base text-gray-600">
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Everything in Advanced</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Deep infrastructure integration</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Weekly operational excellence management</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Custom intelligence architecture development</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Unlimited infrastructure integrations</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="font-medium tracking-wide">Dedicated operational excellence manager</span>
                    </li>
                </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-purple-200">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-gray-900 mb-2 tracking-tight">
                      $5,000<span className="text-2xl font-normal text-purple-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">Deep infrastructure + weekly excellence management</p>
                  </div>
                  <Link href="/apply" className="block w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
                    Apply for Partnership
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-white py-24 relative overflow-hidden">
          {/* Subtle Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Built for Discipline</h2>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto tracking-wide">
              We engineer systems for companies that demand excellence. Your operational superiority becomes our standard.
            </p>
            <Link href="/apply" className="inline-block px-16 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-3xl font-black text-2xl shadow-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/25 tracking-wider">
              Apply for Partnership
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
