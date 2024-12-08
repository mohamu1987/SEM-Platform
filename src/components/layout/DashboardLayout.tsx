import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Settings, Users, Bell } from 'lucide-react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        items={[
          { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
          { icon: BarChart3, label: 'Campaigns', path: '/campaigns' },
          { icon: Users, label: 'Audience', path: '/audience' },
          { icon: Settings, label: 'Settings', path: '/settings' },
        ]}
      />
      <div className="ml-64">
        <TopBar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}