'use client';

import Navbar from '@/components/Navbar';

export default function Demo() {
  return (
    <main className="min-h-screen bg-[#faf3ed]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-[#faf3ed] pt-36 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">Get a Demo System</h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-4 font-medium">Schedule a 1:1 call with Greg to discuss your business needs and see how Autera can help automate and scale your operations.</p>
        </div>
      </section>
      {/* Fullscreen Calendly Booking */}
      <div className="w-full h-[calc(100vh-6rem)] flex justify-center items-start">
        <iframe
          src="https://calendly.com/your-link/demo"
          width="100%"
          height="100%"
          frameBorder="0"
          className="border-0 min-h-[600px] h-full"
          title="Book a Demo Call"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
} 