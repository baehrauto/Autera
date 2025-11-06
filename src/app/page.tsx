'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards((prev) => new Set(prev).add(index));
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('[data-philosophy-card]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

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
      label: 'Tasks systematized',
      description: 'Let intelligence handle the routine'
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
      description: 'Reliable systems'
    },
    {
      number: '0',
      label: 'Manual interventions',
      description: 'Full end-to-end systems'
    },
    {
      number: '40%',
      label: 'Time saved on emails',
      description: 'Systematic inbox management'
    },
    {
      number: '100%',
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
      label: 'Average infrastructure time',
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight px-4">
            Precision in<br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              motion
            </span>.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-5xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed tracking-wide px-4">
            Systems that outlast their creators.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
            <Link 
              href="/apply"
              className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-base sm:text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 w-full sm:w-auto text-center justify-center"
            >
              <span className="relative z-10 tracking-wider">Request Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/about"
              className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent text-cyan-600 rounded-2xl font-bold text-base sm:text-lg border-2 border-cyan-500 hover:bg-cyan-50 hover:border-cyan-600 transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-auto text-center justify-center"
            >
              View Systems
            </Link>
          </div>
        </div> {/* End .max-w-7xl mx-auto text-center */}
      </section> {/* End Hero Section */}

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Partnership <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Program</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto tracking-wide">
              For owners who choose time over management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starter Service */}
          <div className="group relative bg-white rounded-3xl border border-cyan-200 shadow-xl hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 p-8 flex flex-col min-h-[700px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 border border-cyan-400/30">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/25">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-center w-full mb-3">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-wider">FOUNDATION</h3>
                </div>
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

            {/* Growth Service */}
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

            {/* Partner Service */}
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

      {/* The Autera Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight px-4">
              The <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Autera Philosophy</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-wide px-4">
              Precision in motion. Systems, engineered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Perpetual Access */}
            <div 
              data-philosophy-card
              data-index="0"
              className={`group relative bg-white rounded-3xl border border-cyan-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 ${
                visibleCards.has(0) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">Perpetual Access</h3>
                <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  <p>Autera systems aren't something you set up. They're something you step into.</p>
                  <p>Every detail is already built, refined, and ready.</p>
                  <p className="text-gray-700 font-medium">You gain seamless access to an operation that simply works. Quietly and consistently.</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mt-6"></div>
              </div>
            </div>

            {/* Continuous Refinement */}
            <div 
              data-philosophy-card
              data-index="1"
              className={`group relative bg-white rounded-3xl border border-blue-200 shadow-lg hover:border-blue-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 ${
                visibleCards.has(1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">Continuous Refinement</h3>
                <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  <p>Your system improves as you use it.</p>
                  <p>Updates, optimizations, and safeguards happen automatically in the background.</p>
                  <p className="text-gray-700 font-medium">While your business moves forward, Autera keeps everything running at its best.</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mt-6"></div>
              </div>
            </div>

            {/* Silent Infrastructure */}
            <div 
              data-philosophy-card
              data-index="2"
              className={`group relative bg-white rounded-3xl border border-purple-200 shadow-lg hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 ${
                visibleCards.has(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">Silent Infrastructure</h3>
                <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  <p>Autera runs beneath the surface. Steady, invisible, dependable.</p>
                  <p>No dashboards to check, no problems to chase.</p>
                  <p className="text-gray-700 font-medium">Just a calm, reliable flow that keeps your business in motion.</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mt-6"></div>
              </div>
            </div>

            {/* Built for the Few */}
            <div 
              data-philosophy-card
              data-index="3"
              className={`group relative bg-white rounded-3xl border border-gray-300 shadow-lg hover:border-gray-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 ${
                visibleCards.has(3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gray-400/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">Built for the Few</h3>
                <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  <p>Autera isn't made for everyone. It's built for those who value precision over speed and peace over control.</p>
                  <p>You don't just use our systems. You live within them.</p>
                  <p className="text-gray-700 font-medium">Because excellence isn't about doing more. It's about needing less.</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tight px-4">
              Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Systems</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-wide px-4">
              Custom-engineered infrastructure for high-performance operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Custom Website Development */}
            <div className="group relative bg-white rounded-3xl border border-cyan-200 shadow-xl hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 p-6 sm:p-8 lg:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-cyan-400/25">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight">Autera Sites</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-cyan-600 font-bold tracking-wider">Operational Gateways</p>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Operational gateways that convert attention directly into workflow. 
                  Every interaction engineered to drive business forward with precision.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-600 mb-3 sm:mb-4">System Architecture:</h4>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5 sm:mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium tracking-wide">Precision-engineered user experience for maximum conversion</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Universal compatibility across all operational environments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Intelligent content management for seamless operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Performance optimization for maximum operational efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Infrastructure deployment and continuous optimization</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">
                      Reserved for Qualified Companies
                    </div>
                    <p className="text-gray-600 text-lg mb-6">Apply for partnership to access our systems</p>
                    <Link href="/apply" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
                      Apply for Partnership
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Voice Agents */}
            <div className="group relative bg-white rounded-3xl border border-purple-200 shadow-xl hover:shadow-2xl hover:border-purple-400 transition-all duration-500 p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-purple-400/25">
                    <div className="w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
                      <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">Autera Agents</span>
                    </h3>
                    <p className="text-lg text-purple-600 font-bold tracking-wider">Custom Employees for Departments</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Custom-engineered intelligent agents that operate as dedicated employees for your departments.<br />
                  Each agent understands your systems and executes decisions autonomously.<br />
                  Operational excellence specific to your departmental needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <h4 className="text-2xl font-bold text-purple-600 mb-4">Agent Capabilities:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Department-specific knowledge and operational expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Autonomous decision-making within departmental scope</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Seamless integration with department workflows and systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Natural language communication for team collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">Real-time performance tracking and departmental analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-lg font-medium tracking-wide">24/7 availability with intelligent escalation protocols</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">
                      Reserved for Qualified Companies
                    </div>
                    <p className="text-gray-600 text-lg mb-6">Apply for partnership to access our systems</p>
                    <Link href="/apply" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
                      Apply for Partnership
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Give Business Owners Their TIME BACK Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white w-full overflow-hidden relative">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Precision in{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Motion
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto tracking-wide">
            Operational excellence from companies that demand continuous innovation
          </p>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 animate-scroll w-full">
            {/* First set of metrics */}
            {metrics.map((metric, index) => (
              <div 
                key={`first-${index}`}
                className="w-[400px] flex-shrink-0 p-8 rounded-3xl bg-white border border-cyan-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">{metric.number}</div>
                <div className="text-2xl font-bold text-gray-900 mb-3 tracking-wider">{metric.label}</div>
                <p className="text-base text-gray-600 leading-relaxed tracking-wide">{metric.description}</p>
              </div>
            ))}
            {/* Second set of metrics for seamless loop */}
            {metrics.map((metric, index) => (
              <div 
                key={`second-${index}`}
                className="w-[400px] flex-shrink-0 p-8 rounded-3xl bg-white border border-cyan-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">{metric.number}</div>
                <div className="text-2xl font-bold text-gray-900 mb-3 tracking-wider">{metric.label}</div>
                <p className="text-base text-gray-600 leading-relaxed tracking-wide">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Tools Section (restored) */}
      <section className="w-full overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white py-12 relative">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        
        <p className="text-cyan-600 text-center mb-8 text-lg font-medium tracking-wider relative z-10">Reserved for qualified companies and powered by precision infrastructure</p>
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

