'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    subtitle: 'Deep Business Analysis',
    description: 'We dive deep into your current operations to identify every inefficiency and missed opportunity.',
    features: [
      'Complete workflow mapping across all departments',
      'Revenue leak identification and quantification',
      'KPI baseline establishment and benchmarking',
      'Custom automation roadmap creation'
    ],
    icon: '🔍',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    number: '02',
    title: 'System Architecture',
    subtitle: 'Intelligent Design',
    description: 'We architect a complete automation ecosystem tailored to your specific business needs.',
    features: [
      'Multi-platform integration strategy',
      'Custom workflow design and optimization',
      'Data flow architecture and security protocols',
      'Scalable infrastructure planning'
    ],
    icon: '⚙️',
    color: 'from-blue-400 to-purple-400'
  },
  {
    number: '03',
    title: 'Implementation',
    subtitle: 'Seamless Deployment',
    description: 'We build, test, and deploy your automation systems with zero disruption to your operations.',
    features: [
      'Phased rollout with minimal business impact',
      'Comprehensive testing and quality assurance',
      'Team training and change management',
      'Real-time monitoring and optimization'
    ],
    icon: '🚀',
    color: 'from-purple-400 to-pink-400'
  },
  {
    number: '04',
    title: 'Optimization',
    subtitle: 'Continuous Excellence',
    description: 'We continuously monitor, refine, and enhance your systems to maximize performance and ROI.',
    features: [
      'Performance analytics and reporting',
      'Proactive issue detection and resolution',
      'Continuous improvement recommendations',
      'Strategic scaling and expansion support'
    ],
    icon: '📈',
    color: 'from-pink-400 to-cyan-400'
  }
];

const capabilities = [
  {
    title: 'Workflow Automation',
    description: 'Eliminate manual processes with intelligent automation',
    features: [
      'Lead qualification and routing',
      'Invoice generation and payment tracking',
      'Customer onboarding sequences',
      'Renewal and retention campaigns'
    ],
    icon: '🔄',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Data Integration',
    description: 'Connect all your tools and systems seamlessly',
    features: [
      '50+ platform integrations',
      'Real-time data synchronization',
      'Custom API development',
      'Legacy system modernization'
    ],
    icon: '🔗',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Intelligent Analytics',
    description: 'Make data-driven decisions with powerful insights',
    features: [
      'Executive dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Performance benchmarking'
    ],
    icon: '📊',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Document Management',
    description: 'Streamline document workflows and compliance',
    features: [
      'Automated document generation',
      'E-signature workflows',
      'Compliance tracking',
      'Version control and audit trails'
    ],
    icon: '📄',
    gradient: 'from-pink-500/20 to-cyan-500/20'
  }
];

const results = [
  {
    metric: '40+',
    label: 'Hours Saved Per Week',
    description: 'Eliminate manual tasks and focus on growth'
  },
  {
    metric: '95%',
    label: 'Reduction in Errors',
    description: 'Automated processes ensure consistency'
  },
  {
    metric: '300%',
    label: 'ROI Increase',
    description: 'Typical return on automation investment'
  },
  {
    metric: '24/7',
    label: 'System Monitoring',
    description: 'Always-on performance and reliability'
  }
];

const testimonials = [
  {
    quote: "Autera transformed our entire operation. We went from spending 60% of our time on manual tasks to focusing on strategic growth. The ROI was immediate.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions"
  },
  {
    quote: "The automation systems Autera built for us have saved us over $200K annually in operational costs. It's like having a full-time operations team that never sleeps.",
    author: "Michael Rodriguez",
    role: "Operations Director, GrowthCorp",
    company: "GrowthCorp"
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 font-bold text-sm tracking-wider uppercase">
                Complete Business Transformation
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AUTOMATION
              </span>
              <br />
              <span className="text-white">SOLUTIONS</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light tracking-wide leading-relaxed px-4">
              Transform your business operations with intelligent automation that works 24/7 to drive growth, reduce costs, and eliminate human error.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center px-4">
              <Link href="/contact" className="inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl font-black text-lg sm:text-xl shadow-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/25 border border-cyan-400/50 tracking-wider w-full sm:w-auto text-center justify-center">
                Get Your Free Audit
              </Link>
              <Link href="/products" className="inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 border-2 border-cyan-400/50 text-cyan-300 rounded-2xl font-bold text-lg sm:text-xl hover:bg-cyan-400/10 transition-all duration-300 tracking-wider w-full sm:w-auto text-center justify-center">
                View Our Products
              </Link>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
                A proven methodology that transforms businesses from manual chaos to automated excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-2xl shadow-cyan-400/25 group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400/30 mb-2 sm:mb-0 sm:mr-4">{step.number}</span>
                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">{step.title}</h3>
                          <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-bold tracking-wider">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">{step.description}</p>
                      <ul className="space-y-2 sm:space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start sm:items-center">
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg mt-0.5 sm:mt-0`}>
                              <span className="text-black text-xs font-bold">✓</span>
                            </div>
                            <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
                Core <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
                Comprehensive automation solutions that cover every aspect of your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 border border-cyan-400/30 hover:border-cyan-400/60 backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                      <div className="text-4xl sm:text-5xl mr-0 sm:mr-6 mb-4 sm:mb-0">{capability.icon}</div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">{capability.title}</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium tracking-wide">{capability.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {capability.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start sm:items-center">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg shadow-cyan-400/25 mt-0.5 sm:mt-0">
                            <span className="text-black text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
                Proven <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
                Real metrics from businesses that have transformed their operations with Autera
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {results.map((result, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 border border-cyan-400/30 hover:border-cyan-400/60 backdrop-blur-sm text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400 mb-3 sm:mb-4 tracking-tight">{result.metric}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight">{result.label}</h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
                Client <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Success</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
                Hear from business leaders who've transformed their operations with Autera
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 border border-cyan-400/30 hover:border-cyan-400/60 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-cyan-400 mb-4 sm:mb-6">"</div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-medium tracking-wide">{testimonial.quote}</p>
                    <div className="border-t border-cyan-400/30 pt-4 sm:pt-6">
                      <p className="text-lg sm:text-xl font-bold text-white mb-1">{testimonial.author}</p>
                      <p className="text-base sm:text-lg text-cyan-300 font-medium">{testimonial.role}</p>
                      <p className="text-sm sm:text-base text-gray-400 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-6 sm:p-12 lg:p-20 border border-cyan-400/30 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 lg:mb-10 tracking-tight px-4">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed tracking-wide px-4">
                Join hundreds of businesses that have already automated their operations and are seeing dramatic improvements in efficiency, profitability, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4">
                <Link href="/contact" className="inline-flex items-center px-8 sm:px-12 lg:px-16 py-6 sm:py-7 lg:py-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-3xl font-black text-lg sm:text-xl lg:text-2xl shadow-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/25 border border-cyan-400/50 tracking-wider w-full sm:w-auto text-center justify-center">
                  Get Your Free Business Audit
                </Link>
                <div className="text-center">
                  <p className="text-cyan-300 text-base sm:text-lg font-bold tracking-wider mb-1 sm:mb-2">⏱️ Takes 30 minutes</p>
                  <p className="text-gray-400 text-sm sm:text-base tracking-wide">Get actionable insights & ROI projections</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}