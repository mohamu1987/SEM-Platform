import React from 'react';
import { BarChart3, Users, TrendingUp, DollarSign } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-1/2 bg-primary relative">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-white">SEM Platform</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Marketing with AI-Powered Insights
          </h2>
          <p className="text-lg text-white/80 mb-12">
            Optimize your campaigns across multiple platforms with our advanced SEM management tools.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: BarChart3, title: 'Smart Analytics', description: 'AI-driven insights for better performance' },
              { icon: Users, title: 'Audience Targeting', description: 'Reach the right customers effectively' },
              { icon: TrendingUp, title: 'Performance Tracking', description: 'Real-time monitoring and optimization' },
              { icon: DollarSign, title: 'Budget Control', description: 'Maximize ROI with smart spending' },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start space-x-3">
                <div className="mt-1">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Testimonial"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-white/90 text-sm">"This platform has revolutionized how we manage our SEM campaigns. The AI insights are game-changing."</p>
              <p className="text-white font-medium text-sm mt-1">John Smith, Marketing Director</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        {children}
      </div>
    </div>
  );
}