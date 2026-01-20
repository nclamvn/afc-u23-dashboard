'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ParticleBackground from '../ui/ParticleBackground';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
}

export default function DashboardLayout({ children, breadcrumbs }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="fixed inset-0 bg-[#050508] z-0" />

      {/* Red Ambient Gradients - Smaller on mobile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff2d2d]/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#dc143c]/8 rounded-full blur-[80px] md:blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#ff4500]/8 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#8b0000]/5 rounded-full blur-[120px] md:blur-[200px]" />
      </div>

      {/* Floating Red Particles */}
      <ParticleBackground />

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed position always */}
      <div className={`
        fixed z-40 top-0 left-0 h-screen
        transform transition-transform duration-300 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content - with left margin for sidebar on desktop */}
      <div className="flex-1 ml-0 lg:ml-64 relative z-10 w-full min-h-screen">
        <Header
          breadcrumbs={breadcrumbs}
          onMenuClick={() => setSidebarOpen(true)}
          showMenuButton={true}
        />
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
