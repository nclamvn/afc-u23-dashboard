'use client';

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
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="fixed inset-0 bg-[#050508] z-0" />

      {/* Red Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top red glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff2d2d]/10 rounded-full blur-[150px]" />
        {/* Right crimson glow */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#dc143c]/8 rounded-full blur-[130px]" />
        {/* Bottom orange-red glow */}
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#ff4500]/8 rounded-full blur-[120px]" />
        {/* Center deep red */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b0000]/5 rounded-full blur-[200px]" />
      </div>

      {/* Floating Red Particles */}
      <ParticleBackground />

      {/* Sidebar */}
      <div className="relative z-20">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 relative z-10">
        <Header breadcrumbs={breadcrumbs} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
