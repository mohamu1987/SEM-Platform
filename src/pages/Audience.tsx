import React from 'react';
import { Users, UserPlus, UserMinus, Activity } from 'lucide-react';

const audienceStats = [
  { title: 'Total Audience', value: '124.7K', icon: Users, change: '+5.4%' },
  { title: 'New Users', value: '2.1K', icon: UserPlus, change: '+12.3%' },
  { title: 'Churned Users', value: '342', icon: UserMinus, change: '-2.1%' },
  { title: 'Active Users', value: '98.2K', icon: Activity, change: '+8.7%' },
];

export default function Audience() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Audience Overview</h1>

      <div className="grid grid-cols-4 gap-6">
        {audienceStats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Audience Demographics</h2>
        <div className="text-center text-gray-500 py-12">
          Demographics data visualization will be implemented here
        </div>
      </div>
    </div>
  );
}