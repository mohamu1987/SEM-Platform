import React from 'react';
import { Shield, Bell, User, CreditCard } from 'lucide-react';

const settingsSections = [
  {
    title: 'Account Settings',
    icon: User,
    description: 'Update your account information and preferences.',
    href: '#account',
  },
  {
    title: 'Billing & Subscriptions',
    icon: CreditCard,
    description: 'Manage your billing information and subscription plans.',
    href: '#billing',
  },
  {
    title: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive alerts and notifications.',
    href: '#notifications',
  },
  {
    title: 'Security',
    icon: Shield,
    description: 'Manage your security preferences and API keys.',
    href: '#security',
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="grid grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <a
            key={section.title}
            href={section.href}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-50 rounded-full">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
                <p className="mt-1 text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Connected Platforms</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google Ads"
                  className="h-6"
                />
                <span className="ml-3 text-sm font-medium text-gray-900">Google Ads</span>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                Configure
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <img
                  src="https://www.bing.com/th?id=OIP.0hUYNcDzX9hJkjXeNyMQzwHaCG"
                  alt="Bing Ads"
                  className="h-6"
                />
                <span className="ml-3 text-sm font-medium text-gray-900">Bing Ads</span>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}