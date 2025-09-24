import Navbar from '@/components/Navbar'

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with AI automation.'
  },
  {
    title: 'Reliability',
    description: 'Our systems are built to be robust, secure, and dependable.'
  },
  {
    title: 'Partnership',
    description: 'We work closely with our clients to understand their unique needs.'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service delivery.'
  }
]

export default function About() {
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
          <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight">About Autera</h1>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto mb-6 font-light tracking-wide">Transforming businesses through intelligent automation</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Our Story</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed tracking-wide">
                Autera was founded with a simple mission: to help businesses harness the power of AI to automate their operations and achieve sustainable growth.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed tracking-wide">
                We recognized that many small to mid-sized businesses were struggling with manual processes, inefficient workflows, and the challenges of scaling their operations. Our team of AI experts and business automation specialists came together to create solutions that would transform these challenges into opportunities.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
                Today, we're proud to be at the forefront of AI automation, helping businesses across various industries streamline their operations, reduce costs, and focus on what matters most - growth and innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-12 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-cyan-300 mb-8 tracking-wider">Our Mission</h3>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed tracking-wide">
                To empower businesses with intelligent automation solutions that drive efficiency, reduce costs, and enable sustainable growth.
              </p>
              <h3 className="text-3xl font-black text-cyan-300 mb-8 tracking-wider">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
                To be the leading provider of AI automation solutions, transforming how businesses operate in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Our Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500">
                <h3 className="text-2xl font-black text-cyan-300 mb-6 tracking-wider">{value.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed tracking-wide">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Our Expertise</span>
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-16 tracking-wide">
            Our team combines deep technical expertise with business acumen to deliver exceptional results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500">
              <h3 className="text-2xl font-black text-cyan-300 mb-6 tracking-wider">AI & Machine Learning</h3>
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Advanced AI algorithms and machine learning models power our automation solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500">
              <h3 className="text-2xl font-black text-cyan-300 mb-6 tracking-wider">Business Process Automation</h3>
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Deep understanding of business workflows and optimization strategies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-3xl shadow-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500">
              <h3 className="text-2xl font-black text-cyan-300 mb-6 tracking-wider">Integration Expertise</h3>
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Seamless integration with existing systems and tools for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 