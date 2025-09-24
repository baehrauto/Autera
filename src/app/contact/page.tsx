import Navbar from '@/components/Navbar'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-36 pb-24 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight">Contact Us</h1>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto mb-6 font-light tracking-wide">Let's discuss how we can help automate your business</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
              <h2 className="text-3xl font-black text-cyan-300 mb-8 tracking-wider text-center">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-bold text-gray-300 mb-2 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-xl bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-400 shadow-lg focus:border-cyan-400 focus:ring-cyan-400/50 px-4 py-3 text-base backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-bold text-gray-300 mb-2 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-xl bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-400 shadow-lg focus:border-cyan-400 focus:ring-cyan-400/50 px-4 py-3 text-base backdrop-blur-sm"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-base font-bold text-gray-300 mb-2 tracking-wide">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-xl bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-400 shadow-lg focus:border-cyan-400 focus:ring-cyan-400/50 px-4 py-3 text-base backdrop-blur-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-bold text-gray-300 mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full rounded-xl bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-400 shadow-lg focus:border-cyan-400 focus:ring-cyan-400/50 px-4 py-3 text-base backdrop-blur-sm resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl font-black text-lg shadow-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cyan-500/25 border border-cyan-400/50 tracking-wider"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 