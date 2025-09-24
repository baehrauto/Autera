import Navbar from '@/components/Navbar'

const steps = [
  {
    step: 'Step 1',
    title: 'Audit & Strategy',
    description: 'We start with a business process audit:',
    features: [
      'Map out your current workflows (sales, finance, ops, customer service)',
      'Identify where revenue is slipping through the cracks (missed follow-ups, manual errors, delays)',
      'Build a custom automation roadmap tied to your KPIs'
    ],
    example: {
      title: 'Example:',
      text: 'A gym loses 15% of members each month because renewals aren\'t followed up. We design an automated sequence that keeps members engaged and retained.'
    }
  },
  {
    step: 'Step 2',
    title: 'Automation Build',
    description: 'We don\'t just give advice — we build the systems for you:',
    features: [
      'Workflow Design & Implementation → From lead intake to invoicing, everything flows',
      'Intelligent Task Routing → Assigns work to the right person automatically',
      'Document Automation → Contracts, invoices, proposals generated instantly',
      'E-Signature Workflows → Secure digital approvals with full tracking',
      'Integrations → CRM, email, Slack, accounting, project management — all connected'
    ],
    example: {
      title: 'Example:',
      text: 'An insurance agency misses policy renewals. We implement 90/60/30-day automated reminders, auto-generate renewal packets, and log everything in an audit trail.'
    }
  },
  {
    step: 'Step 3',
    title: 'Real-Time Oversight',
    description: 'Automation means nothing if you can\'t measure it. We install:',
    features: [
      'Executive Dashboards → Live metrics on sales, revenue, tasks, and bottlenecks',
      'Smart Notifications → Alerts for what needs attention now (not noise)',
      'Audit Logs → Every action timestamped, so compliance is covered'
    ],
    example: {
      title: 'Example:',
      text: 'A dealership GM gets a Monday dashboard email showing leads, pending quotes, and contracts at risk — without asking anyone on staff.'
    }
  },
  {
    step: 'Step 4',
    title: 'Continuous Optimization',
    subtitle: '(Executive Operations Service)',
    description: 'Businesses evolve — your systems should too. With Autera, you get:',
    features: [
      'Weekly Strategy Calls → Review KPIs, solve bottlenecks',
      'Continuous Monitoring → If something breaks, we fix it before you even notice',
      'Scaling Support → Add new automations as you grow',
      'Dedicated Slack Channel → Questions answered same-day, M–F'
    ],
    example: {
      title: 'Example:',
      text: 'A catering company doubles order volume. We upgrade their workflow with automated kitchen prep sheets, staff task routing, and vendor ordering — without adding headcount.'
    }
  }
]

const platformLayers = [
  {
    title: 'Automation Platform',
    subtitle: '(Foundation Layer)',
    features: [
      'Data integration across 50+ tools (Google Sheets, CRMs, accounting, etc)',
      'Smart alerts (email, SMS, Slack/Teams)',
      'Automated document generation + e-sign',
      'Compliance-grade audit logs'
    ]
  },
  {
    title: 'Executive Dashboard',
    subtitle: '(Control Layer)',
    features: [
      'KPIs in real-time',
      'Weekly reports for leadership',
      'Visual pipeline of tasks, renewals, or deals'
    ]
  },
  {
    title: 'Fractional COO Service',
    subtitle: '(Growth Layer)',
    features: [
      'Strategic oversight (we run operations like a COO would)',
      'Continuous process improvement',
      'Human + tech blend — not just software, but execution'
    ]
  }
]

const outcomes = [
  'Save 40+ hours per week in manual work',
  'Eliminate missed revenue from renewals & follow-ups',
  'Protect themselves from compliance and legal risk',
  'Get clarity, control, and flow — without hiring a full-time COO'
]

export default function Services() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-36 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">How Autera Works</h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6 font-medium">Fractional COO + automation authority. We don't just give you software — we architect your entire operations.</p>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={index} className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{step.step} — {step.title}</h2>
                  {step.subtitle && (
                    <p className="text-lg text-blue-600 font-medium">{step.subtitle}</p>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                <ul className="space-y-3 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">→</span>
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-blue-800 mb-2">{step.example.title}</p>
                  <p className="text-gray-700 text-sm">{step.example.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-[#faf3ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What You Get with Autera</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformLayers.map((layer, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{layer.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-6">{layer.subtitle}</p>
                <ul className="space-y-3">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">⚡ The Outcome</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <p className="text-xl text-gray-700 text-center mb-8 font-medium">With Autera, businesses:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Put Your Operations on Autopilot?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Start with a free business process audit and see exactly where revenue is slipping through the cracks.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-200">
            Book a Free Business Process Audit
          </a>
        </div>
      </section>
    </main>
  )
} 