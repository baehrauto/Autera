import Navbar from '@/components/Navbar'

const stats = [
  {
    title: 'Total Calls Handled',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    description: 'Last 30 days'
  },
  {
    title: 'Lead Conversion Rate',
    value: '24%',
    change: '+5%',
    trend: 'up',
    description: 'Last 30 days'
  },
  {
    title: 'Average Response Time',
    value: '2.3s',
    change: '-0.5s',
    trend: 'up',
    description: 'Last 30 days'
  },
  {
    title: 'Customer Satisfaction',
    value: '94%',
    change: '+2%',
    trend: 'up',
    description: 'Last 30 days'
  }
]

const recentActivity = [
  {
    service: 'AI Phone Answering',
    action: 'New call handled',
    time: '2 minutes ago',
    status: 'success'
  },
  {
    service: 'Lead Generation',
    action: 'New lead qualified',
    time: '15 minutes ago',
    status: 'success'
  },
  {
    service: 'Document Automation',
    action: 'Invoice generated',
    time: '1 hour ago',
    status: 'success'
  },
  {
    service: 'Support Automation',
    action: 'Ticket resolved',
    time: '2 hours ago',
    status: 'success'
  }
]

export default function DemoDashboard() {
  return (
    <main>
      <Navbar />
      
      {/* Demo Banner */}
      <div className="bg-[#00AEEF] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">This is a demo dashboard. <a href="/login" className="underline">Login</a> to access your actual dashboard.</p>
        </div>
      </div>
      
      {/* Dashboard Header */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#0057D9]">Demo Dashboard</h1>
          <p className="text-gray-600 mt-2">See how Autera's AI automation can transform your business operations.</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold text-[#0057D9]">{stat.value}</p>
                  <span className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#0057D9] mb-6">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {activity.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Service Performance */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#0057D9] mb-6">Service Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Response Times</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Phone Answering</span>
                    <span>2.3s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Lead Response</span>
                    <span>1.8s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Document Generation</span>
                    <span>3.1s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Success Rates</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Call Resolution</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Lead Qualification</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Document Accuracy</span>
                    <span>96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#00AEEF] h-2.5 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0057D9] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the full power of Autera's AI automation platform with your own dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Schedule a Demo
            </a>
            <a href="/login" className="btn-secondary">
              Login to Your Account
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 