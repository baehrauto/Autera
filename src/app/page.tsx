'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { number: '129%', label: 'more leads acquired' },
    { number: '36%', label: 'more deals closed' },
    { number: '37%', label: 'improvement in ticket closure' },
  ];

  const features = [
    {
      name: 'Sales Pipeline & Follow-up Automation',
      description: 'Streamline your sales process with automated follow-ups, pipeline management, and intelligent lead nurturing.',
      price: 'From $199/month',
      features: ['Pipeline tracking', 'Automated follow-ups', 'Task automation', 'Performance analytics'],
      category: 'Sales Automation',
      image: '/images/sales-pipeline.png?v=2'
    },
    {
      name: 'AI-Powered Invoice & Payment Automation',
      description: 'Automate your invoicing and payment collection process with intelligent AI that handles everything from creation to reconciliation.',
      price: 'From $149/month',
      features: ['Automated invoicing', 'Payment processing', 'Reconciliation', 'Financial reporting'],
      category: 'Finance Automation',
      image: '/images/invoice-automation.png?v=2'
    },
    {
      name: 'Deep Personalization Cold Email Outreach',
      description: 'Generate highly personalized cold emails at scale using AI that understands your prospects and crafts compelling messages.',
      price: 'From $179/month',
      features: ['AI content generation', 'Personalization engine', 'A/B testing', 'Performance tracking'],
      category: 'Sales Automation',
      image: '/images/cold-email.png'
    }
  ];

  const trustedBy = [
    'Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5', 'Company 6'
  ];

  const metrics = [
    {
      number: '25+',
      label: 'Hours saved per week',
      description: 'Time back in your calendar'
    },
    {
      number: '1000+',
      label: 'Tasks automated',
      description: 'Let AI handle the routine'
    },
    {
      number: '24/7',
      label: 'Business operations',
      description: 'Work happens while you sleep'
    },
    {
      number: '90%',
      label: 'Faster response times',
      description: 'Never miss an opportunity'
    },
    {
      number: '50%',
      label: 'Cost reduction',
      description: 'Lower operational expenses'
    },
    {
      number: '200%',
      label: 'Team efficiency',
      description: 'Do more with your existing team'
    },
    {
      number: '25%',
      label: 'Revenue growth',
      description: 'Focus on what drives business'
    },
    {
      number: '99.5%',
      label: 'System uptime',
      description: 'Reliable automation'
    },
    {
      number: '0',
      label: 'Manual interventions',
      description: 'Full end-to-end automation'
    },
    {
      number: '40%',
      label: 'Time saved on emails',
      description: 'Automated inbox management'
    },
    {
      number: '92%',
      label: 'Customer satisfaction',
      description: 'Faster, more consistent service'
    },
    {
      number: '6x',
      label: 'Lead conversion rate',
      description: 'Better qualified prospects'
    },
    {
      number: '50+',
      label: 'Integration options',
      description: 'Works with your tools'
    },
    {
      number: '2 days',
      label: 'Average setup time',
      description: 'Quick time to value'
    },
    {
      number: '99%',
      label: 'Task accuracy',
      description: 'Consistent, reliable results'
    },
    {
      number: '10x',
      label: 'Faster processing',
      description: 'AI-powered acceleration'
    },
    {
      number: '2x',
      label: 'ROI in first quarter',
      description: 'Solid return on investment'
    }
  ];

  // Triple the metrics for smoother infinite loop
  const allMetrics = [...metrics, ...metrics, ...metrics];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % metrics.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
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
            <span className="tracking-wider uppercase">AI-Powered Business Automation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Your Operations. On{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              AUTOPILOT
            </span>.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            No chaos. No bottlenecks. Just flow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
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
              See How Autera Works
            </Link>
          </div>
        </div> {/* End .max-w-7xl mx-auto text-center */}
      </section> {/* End Hero Section */}

      {/* The Autera Promise Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
              The <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Autera Promise</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
              Your business, your systems, your success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Full System Ownership */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 p-6 sm:p-8 lg:p-10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wide">Full System Ownership</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  You own every system we create. No vendor lock-in, no monthly subscriptions for the tools themselves. 
                  Complete control over your automation infrastructure.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              </div>
            </div>

            {/* Team Training & Knowledge Transfer */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-blue-400/30 p-10 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wide">Team Training & Knowledge Transfer</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  We don't just build it and leave. We train your team on how to use, maintain, and even modify 
                  the systems we create. Your team becomes self-sufficient.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
              </div>
            </div>

            {/* No Vendor Dependency */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-purple-400/30 p-10 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wide">No Vendor Dependency</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  Your operations continue running even if our relationship changes. You have the code, 
                  the documentation, and the knowledge to keep everything running smoothly.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-wide">Partnership, Not Dependency</h4>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                We're here to empower your business, not create a permanent dependency. 
                Your success is our success, and your independence is our goal.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight px-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide px-4">
              Custom development solutions designed to elevate your digital presence and customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Custom Website Development */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-6 sm:p-8 lg:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-cyan-400/25">
                    <div className="w-8 h-8 bg-black rounded-lg"></div>
            </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">Custom Websites</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-cyan-300 font-bold tracking-wider">Bespoke Web Development</p>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Transform your online presence with custom-built websites that perfectly match your brand and business goals. From design to deployment, we create digital experiences that convert visitors into customers.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4">What's Included:</h4>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium tracking-wide">Custom design and user experience tailored to your brand</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Responsive design that works perfectly on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Content management system for easy updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">SEO optimization and performance tuning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Hosting setup and ongoing maintenance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">
                      Custom Pricing
                    </div>
                    <p className="text-gray-300 text-lg mb-6">Get a personalized quote based on your specific requirements</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 border border-cyan-400/50">
                      Get Your Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Voice Agents */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-purple-400/30 shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/60 transition-all duration-500 p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-purple-400/25">
                    <div className="w-8 h-8 bg-black rounded-lg transform rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                      <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Voice Agents</span>
                    </h3>
                    <p className="text-lg text-purple-300 font-bold tracking-wider">AI-Powered Voice Assistants</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Deploy intelligent voice assistants that handle customer interactions 24/7. Our AI-powered voice agents understand context, provide personalized responses, and seamlessly hand off to humans when needed.
                </p>
                
                <div className="space-y-6 mb-8">
                  <h4 className="text-2xl font-bold text-purple-300 mb-4">Capabilities:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Natural conversation and context understanding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Custom voice training and personality design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Integration with your existing systems and databases</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Multi-language support and regional accents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">Real-time analytics and conversation insights</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-300 text-lg font-medium tracking-wide">24/7 availability and seamless handoff to humans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-400/30">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">
                      Custom Pricing
                    </div>
                    <p className="text-gray-300 text-lg mb-6">Get a personalized quote based on your specific requirements</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black rounded-xl font-bold text-lg hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 border border-purple-400/50">
                      Get Your Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Give Business Owners Their TIME BACK Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black w-full overflow-hidden relative">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Give Business Owners Their{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              TIME BACK
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide">
            Real results from businesses that put their operations on autopilot
          </p>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 animate-scroll w-full">
            {/* First set of metrics */}
            {metrics.map((metric, index) => (
              <div 
                key={`first-${index}`}
                className="w-[400px] flex-shrink-0 p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight">{metric.number}</div>
                <div className="text-2xl font-bold text-white mb-3 tracking-wider">{metric.label}</div>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide">{metric.description}</p>
              </div>
            ))}
            {/* Second set of metrics for seamless loop */}
            {metrics.map((metric, index) => (
              <div 
                key={`second-${index}`}
                className="w-[400px] flex-shrink-0 p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight">{metric.number}</div>
                <div className="text-2xl font-bold text-white mb-3 tracking-wider">{metric.label}</div>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto tracking-wide">
              Executive-level automation services designed to transform your operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starter Service */}
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">STARTER</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                <p className="text-lg text-gray-300 font-medium tracking-wide">Essential automation for growing businesses</p>
              </div>
              
              <div className="flex-grow">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-cyan-300 mb-4">Perfect for:</h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Small to medium businesses ready to automate their core processes and eliminate manual work.
                    </p>
                  </div>
                  
                <ul className="space-y-5 text-base text-gray-300">
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">One system automation</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Free automation audit</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Weekly strategy calls</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Basic reporting dashboard</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
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

            {/* Growth Service */}
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">GROWTH</span>
                  </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                <p className="text-lg text-gray-300 font-medium tracking-wide">Advanced automation for scaling businesses</p>
              </div>
              
              <div className="flex-grow">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-blue-300 mb-4">Perfect for:</h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Growing companies that need comprehensive automation across multiple systems and departments.
                    </p>
                  </div>
                  
                <ul className="space-y-5 text-base text-gray-300">
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Everything in Starter</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Multiple system automation</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Ongoing operations support</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">15 integration connections</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
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

            {/* Partner Service */}
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-wider">
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">PARTNER</span>
                  </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4 shadow-lg shadow-cyan-400/50"></div>
                <p className="text-lg text-gray-300 font-medium tracking-wide">Complete business automation with enterprise features</p>
              </div>
              
              <div className="flex-grow">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">Perfect for:</h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Enterprise-level companies that need complete operational transformation with dedicated support.
                    </p>
                  </div>
                  
                <ul className="space-y-5 text-base text-gray-300">
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Everything in Growth</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Deep system integration</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Weekly operations management</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Custom AI model training</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="font-medium tracking-wide">Unlimited integrations</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-400/25">
                      <span className="text-white text-sm font-bold">✓</span>
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
        </div>
      </section>


      {/* Partners/Tools Section (restored) */}
      <section className="w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 relative">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <p className="text-cyan-300 text-center mb-8 text-lg font-medium tracking-wider relative z-10">Trusted by leading companies and powered by industry-leading tools</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-scroll">
            {/* First set of partners */}
            <div className="flex gap-20">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/openai.png"
                  alt="OpenAI"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/twilio.png"
                  alt="Twilio"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/vapi.png"
                  alt="Vapi"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/gmail.png"
                  alt="Gmail"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/hubspot.png"
                  alt="HubSpot"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/pipedrive.png"
                  alt="Pipedrive"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/instantly.png"
                  alt="Instantly AI"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/pandadoc.png"
                  alt="PandaDoc"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/typeform.png"
                  alt="Typeform"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/calendly.png"
                  alt="Calendly"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/clickup.png"
                  alt="ClickUp"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-20">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/openai.png"
                  alt="OpenAI"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/twilio.png"
                  alt="Twilio"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/vapi.png"
                  alt="Vapi"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/gmail.png"
                  alt="Gmail"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/hubspot.png"
                  alt="HubSpot"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/pipedrive.png"
                  alt="Pipedrive"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/instantly.png"
                  alt="Instantly AI"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/pandadoc.png"
                  alt="PandaDoc"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/typeform.png"
                  alt="Typeform"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/calendly.png"
                  alt="Calendly"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partners/clickup.png"
                  alt="ClickUp"
                  width={140}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
          min-width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .black-tint {
          filter: grayscale(100%) brightness(0);
        }
      `}</style>
    </div>
  );
}

