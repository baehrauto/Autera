'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'
import { ContactForm } from '@/lib/types';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to success page with form data
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message
        });
        router.push(`/success?${params.toString()}`);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white pt-36 pb-24 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight">Apply for Partnership</h1>
          <p className="text-3xl md:text-4xl text-gray-600 max-w-4xl mx-auto mb-6 font-light tracking-wide">We accept a limited number of new partnerships each quarter</p>
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
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
          </div>
        </div>
      </section>
    </main>
  )
} 