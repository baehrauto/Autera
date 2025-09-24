'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ServiceStats {
  name: string;
  usage: number;
  status: 'active' | 'inactive' | 'warning';
  lastUpdated: string;
  performance: number;
  details: {
    totalLeads: number;
    conversionRate: number;
    responseTime: string;
    costSavings: string;
    recentActivities: string[];
    monthlyTrends: {
      month: string;
      leads: number;
      conversions: number;
    }[];
    topPerformingCampaigns: {
      name: string;
      leads: number;
      conversionRate: number;
    }[];
  };
}

const serviceData: Record<string, ServiceStats> = {
  'cold-outreach': {
    name: 'Cold Outreach Automation',
    usage: 85,
    status: 'active',
    lastUpdated: '2 minutes ago',
    performance: 92,
    details: {
      totalLeads: 245,
      conversionRate: 12.5,
      responseTime: '2.3 minutes',
      costSavings: '$1,250',
      recentActivities: [
        'Campaign "Summer 2024" completed',
        'New template added: "Tech Startup"',
        'Response rate increased by 8%',
        '5 new leads qualified'
      ],
      monthlyTrends: [
        { month: 'Jan', leads: 180, conversions: 22 },
        { month: 'Feb', leads: 195, conversions: 24 },
        { month: 'Mar', leads: 210, conversions: 26 },
        { month: 'Apr', leads: 230, conversions: 28 },
        { month: 'May', leads: 245, conversions: 30 }
      ],
      topPerformingCampaigns: [
        { name: 'Tech Startup Outreach', leads: 85, conversionRate: 15.2 },
        { name: 'Enterprise Solutions', leads: 72, conversionRate: 13.8 },
        { name: 'SaaS Growth', leads: 65, conversionRate: 12.5 }
      ]
    }
  },
  'ai-phone': {
    name: 'AI Phone Answering',
    usage: 45,
    status: 'active',
    lastUpdated: '5 minutes ago',
    performance: 88,
    details: {
      totalLeads: 180,
      conversionRate: 15.2,
      responseTime: '0.5 minutes',
      costSavings: '$2,100',
      recentActivities: [
        'New call routing rule added',
        'Voice model updated',
        '3 missed calls handled',
        '2 appointments scheduled'
      ],
      monthlyTrends: [
        { month: 'Jan', leads: 120, conversions: 18 },
        { month: 'Feb', leads: 135, conversions: 20 },
        { month: 'Mar', leads: 150, conversions: 22 },
        { month: 'Apr', leads: 165, conversions: 25 },
        { month: 'May', leads: 180, conversions: 27 }
      ],
      topPerformingCampaigns: [
        { name: '24/7 Support Line', leads: 65, conversionRate: 18.5 },
        { name: 'Sales Inquiries', leads: 55, conversionRate: 16.2 },
        { name: 'Customer Service', leads: 45, conversionRate: 14.8 }
      ]
    }
  },
  'lead-response': {
    name: 'Lead Response & Booking',
    usage: 72,
    status: 'warning',
    lastUpdated: '10 minutes ago',
    performance: 75,
    details: {
      totalLeads: 310,
      conversionRate: 8.7,
      responseTime: '1.2 minutes',
      costSavings: '$1,800',
      recentActivities: [
        'Calendar integration updated',
        '2 meetings rescheduled',
        'New booking form added',
        'Response template optimized'
      ],
      monthlyTrends: [
        { month: 'Jan', leads: 220, conversions: 18 },
        { month: 'Feb', leads: 240, conversions: 20 },
        { month: 'Mar', leads: 260, conversions: 22 },
        { month: 'Apr', leads: 285, conversions: 24 },
        { month: 'May', leads: 310, conversions: 27 }
      ],
      topPerformingCampaigns: [
        { name: 'Product Demo Booking', leads: 95, conversionRate: 12.5 },
        { name: 'Consultation Scheduling', leads: 85, conversionRate: 10.8 },
        { name: 'Support Meeting', leads: 75, conversionRate: 9.5 }
      ]
    }
  }
};

export default function ServiceDetails({ params }: { params: { serviceId: string } }) {
  const service = serviceData[params.serviceId];

  if (!service) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
            <p className="mt-4 text-gray-600">The requested service could not be found.</p>
            <Link 
              href="/dashboard"
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Performance Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    }
  };

  const chartData = {
    labels: service.details.monthlyTrends.map(trend => trend.month),
    datasets: [
      {
        label: 'Leads',
        data: service.details.monthlyTrends.map(trend => trend.leads),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      },
      {
        label: 'Conversions',
        data: service.details.monthlyTrends.map(trend => trend.conversions),
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            href="/dashboard"
            className="text-blue-600 hover:text-blue-900 text-sm font-medium"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{service.name}</h1>
          <div className="mt-2 flex items-center">
            <div className={`h-3 w-3 rounded-full ${
              service.status === 'active' ? 'bg-green-400' :
              service.status === 'warning' ? 'bg-yellow-400' :
              'bg-red-400'
            }`} />
            <span className="ml-2 text-sm text-gray-500">
              {service.status.charAt(0).toUpperCase() + service.status.slice(1)} • Last updated {service.lastUpdated}
            </span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Leads</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{service.details.totalLeads}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Conversion Rate</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{service.details.conversionRate}%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Response Time</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{service.details.responseTime}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Monthly Savings</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{service.details.costSavings}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Monthly Trends</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="h-96">
                <Bar options={chartOptions} data={chartData} />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Monthly Summary</h4>
                  <div className="mt-2 space-y-2">
                    {service.details.monthlyTrends.map((trend, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-500">{trend.month}</span>
                        <div className="flex space-x-4">
                          <span className="text-blue-600">{trend.leads} leads</span>
                          <span className="text-green-600">{trend.conversions} conversions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Performance Metrics</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Growth</span>
                      <span className="text-green-600">
                        +{Math.round(((service.details.monthlyTrends[service.details.monthlyTrends.length - 1].leads - service.details.monthlyTrends[0].leads) / service.details.monthlyTrends[0].leads) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Average Monthly Leads</span>
                      <span className="text-blue-600">
                        {Math.round(service.details.monthlyTrends.reduce((acc, curr) => acc + curr.leads, 0) / service.details.monthlyTrends.length)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Average Monthly Conversions</span>
                      <span className="text-green-600">
                        {Math.round(service.details.monthlyTrends.reduce((acc, curr) => acc + curr.conversions, 0) / service.details.monthlyTrends.length)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Campaigns */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Top Performing Campaigns</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {service.details.topPerformingCampaigns.map((campaign, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-500">
                        {campaign.leads} leads
                      </div>
                      <div className="text-sm text-gray-500">
                        {campaign.conversionRate}% conversion
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activities</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {service.details.recentActivities.map((activity, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-gray-900">{activity}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 