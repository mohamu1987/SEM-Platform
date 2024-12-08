import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', spend: 4000, impressions: 2400, clicks: 2400 },
  { date: '2024-02', spend: 3000, impressions: 1398, clicks: 2210 },
  { date: '2024-03', spend: 2000, impressions: 9800, clicks: 2290 },
  { date: '2024-04', spend: 2780, impressions: 3908, clicks: 2000 },
  { date: '2024-05', spend: 1890, impressions: 4800, clicks: 2181 },
];

const stats = [
  { title: 'Total Spend', value: '$12,670', icon: DollarSign, change: '+12.5%' },
  { title: 'Impressions', value: '22.3K', icon: Users, change: '+8.2%' },
  { title: 'Clicks', value: '11.1K', icon: BarChart3, change: '+5.4%' },
  { title: 'Conversions', value: '2.3K', icon: TrendingUp, change: '+14.2%' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
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
              <span className="text-sm text-green-600">{stat.change}</span>
              <span className="text-sm text-gray-600 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Performance Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="spend" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="impressions" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="clicks" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}