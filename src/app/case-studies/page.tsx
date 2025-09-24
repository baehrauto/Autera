import Navbar from '@/components/Navbar'

const caseStudies = [
  {
    title: 'Streamlining Healthcare Administration',
    client: 'Regional Medical Group',
    challenge: 'Manual patient intake and appointment scheduling processes were causing delays and staff burnout.',
    solution: 'Implemented AI-powered phone answering system and automated patient intake workflows.',
    results: [
      'Reduced administrative workload by 60%',
      'Improved patient satisfaction by 45%',
      'Decreased no-show rates by 30%'
    ],
    category: 'Healthcare'
  },
  {
    title: 'Automating Legal Document Processing',
    client: 'Mid-Size Law Firm',
    challenge: 'Time-consuming document generation and client communication processes.',
    solution: 'Deployed AI document automation system with integrated client communication tools.',
    results: [
      'Cut document preparation time by 75%',
      'Increased client response rate by 50%',
      'Reduced administrative costs by 40%'
    ],
    category: 'Legal'
  },
  {
    title: 'Optimizing Real Estate Lead Management',
    client: 'Property Management Company',
    challenge: 'Inefficient lead qualification and follow-up processes.',
    solution: 'Implemented AI-powered lead scoring and automated follow-up system.',
    results: [
      'Increased qualified leads by 80%',
      'Reduced response time to inquiries by 90%',
      'Improved conversion rate by 35%'
    ],
    category: 'Real Estate'
  }
]

export default function CaseStudies() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-36 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">Case Studies</h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-6 font-medium">Discover how our AI automation solutions have transformed businesses across industries</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#faf3ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-lg">
                <div className="mb-6">
                  <span className="inline-block bg-blue-600 text-white text-base px-4 py-2 rounded-full font-bold">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{study.title}</h3>
                <p className="text-gray-700 font-semibold mb-4">{study.client}</p>
                <div className="mb-6">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-700 text-base">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-700 text-base">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700 text-base">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Let's discuss how our AI automation solutions can help your business achieve similar results.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-200">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
} 