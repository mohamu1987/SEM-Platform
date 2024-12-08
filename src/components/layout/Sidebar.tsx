import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">SEM Platform</h1>
      </div>
      <nav className="mt-6">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50',
              location.pathname === item.path && 'bg-gray-50 text-blue-600'
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}