'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronRight,
  Users,
  BarChart3,
  Settings,
  Info,
  Trophy,
  X
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Premium Glass Modal Component
function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 animate-modal-in">
        {/* Glass container */}
        <div className="relative px-16 py-12 rounded-3xl overflow-hidden">
          {/* Multi-layer glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.1]" />
          <div className="absolute inset-[1px] rounded-3xl border border-white/[0.05]" />

          {/* Subtle accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b6b]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 transition-all duration-300"
          >
            <X size={14} />
          </button>

          {/* Content */}
          <div className="relative z-10 text-center">
            <p className="text-[15px] font-light tracking-[0.4em] text-white/90">
              V I B E C O D E &nbsp; K I T &nbsp; V 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: { label: string; href: string; flag?: string; isWinner?: boolean }[];
}

const navItems: NavItem[] = [
  {
    label: 'Semifinal',
    children: [
      { label: 'Vietnam', href: '/vietnam', flag: '🇻🇳' },
      { label: 'China', href: '/china', flag: '🇨🇳' },
    ],
  },
  {
    label: 'Other Teams',
    children: [
      { label: 'Japan', href: '#japan', flag: '🇯🇵', isWinner: true },
      { label: 'Korea Republic', href: '#korea', flag: '🇰🇷' },
    ],
  },
];

const mainNav = [
  { label: 'Players Database', href: '/vietnam', icon: <Users size={18} /> },
  { label: 'Head to Head', href: '/h2h', icon: <BarChart3 size={18} /> },
];

const bottomNav = [
  { label: 'Settings', href: '#settings', icon: <Settings size={18} /> },
  { label: 'About', href: '#about', icon: <Info size={18} /> },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Semifinal']);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const toggleSection = (label: string) => {
    setExpandedSections(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 z-50 flex flex-col">
      {/* Premium glass background */}
      <div className="absolute inset-0 bg-[#0a0808]/90 backdrop-blur-3xl border-r border-white/[0.04]" />

      {/* Subtle warm ambient glow - very refined */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#ff6b6b]/[0.04] via-[#ff6b6b]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a0505]/50 to-transparent pointer-events-none" />

      {/* Accent line on right edge */}
      <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ff6b6b]/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo/Brand - Premium Glass Style */}
        <div className="p-5 flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="group relative flex-1 flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] rounded-2xl" />

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.05] rounded-2xl" />

            {/* Animated accent line */}
            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b6b]/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <Trophy size={16} className="relative z-10 text-[#ff8a8a] group-hover:text-[#ffaaaa] transition-colors" />
            <span className="relative z-10 text-sm font-medium tracking-wide text-white/80 group-hover:text-white/95 transition-colors">
              AFC U23 2026
            </span>
          </Link>

          {/* Close button - Mobile only */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden ml-2 w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 transition-all"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Floating Flags Section - Refined */}
        <div className="px-4 py-5">
          <div className="relative p-5 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.04]">
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-center justify-center gap-6">
              {/* Vietnam Flag */}
              <div className="relative group">
                <div className="text-4xl animate-float-slow cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(218,37,29,0.4)]">
                  🇻🇳
                </div>
              </div>

              {/* VS - Minimal */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-semibold text-white/25 tracking-[0.2em]">VS</span>
                <div className="w-6 h-[1px] bg-gradient-to-r from-[#da251d]/30 via-white/10 to-[#de2910]/30" />
              </div>

              {/* China Flag */}
              <div className="relative group">
                <div className="text-4xl animate-float-delayed cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(222,41,16,0.4)]">
                  🇨🇳
                </div>
              </div>
            </div>

            {/* Semifinal Label */}
            <p className="text-[9px] text-white/30 font-medium tracking-[0.15em] uppercase text-center mt-4">
              Semifinal
            </p>
          </div>
        </div>

        {/* User Section - Minimal */}
        <div className="px-4 pb-2">
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                <span className="text-xs font-medium text-white/60">G</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#4ade80] rounded-full border-[1.5px] border-[#0a0808]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-white/70 group-hover:text-white/90 transition-colors">Guest</p>
              <p className="text-[11px] text-white/30">1,250 pts</p>
            </div>
          </div>
        </div>

        {/* Navigation - Refined */}
        <nav className="flex-1 overflow-y-auto py-2 px-3">
          {/* Section Label */}
          <p className="px-3 py-2 text-[10px] font-semibold text-white/25 tracking-[0.15em] uppercase">Teams</p>

          {/* Collapsible Sections */}
          {navItems.map((item) => (
            <div key={item.label} className="mb-1">
              <button
                onClick={() => toggleSection(item.label)}
                className="w-full flex items-center justify-between px-3 py-2 text-[13px] text-white/40 hover:text-white/70 rounded-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2 font-medium">
                  {expandedSections.includes(item.label) ? (
                    <ChevronDown size={12} className="text-white/30" />
                  ) : (
                    <ChevronRight size={12} className="text-white/30" />
                  )}
                  {item.label}
                </span>
              </button>
              {expandedSections.includes(item.label) && item.children && (
                <div className="mt-1 ml-1 space-y-0.5">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'flex items-center gap-2.5 px-3 py-2.5 text-[13px] transition-all duration-300 rounded-xl',
                        isActive(child.href)
                          ? 'bg-white/[0.05] text-white/90 font-medium'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]'
                      )}
                    >
                      <span className="text-base">{child.flag}</span>
                      <span>{child.label}</span>
                      {child.isWinner && (
                        <span className="ml-auto px-2 py-0.5 text-[9px] font-bold tracking-wider bg-gradient-to-r from-[#4ade80]/20 to-[#22c55e]/10 text-[#4ade80] rounded-full border border-[#4ade80]/20 animate-pulse-subtle">
                          WIN
                        </span>
                      )}
                      {isActive(child.href) && !child.isWinner && (
                        <div className="ml-auto w-1 h-1 rounded-full bg-[#ff8080]" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className="my-4 mx-3 h-[1px] bg-white/[0.04]" />

          {/* Section Label */}
          <p className="px-3 py-2 text-[10px] font-semibold text-white/25 tracking-[0.15em] uppercase">Quick Access</p>

          {/* Main Nav */}
          <div className="space-y-0.5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 text-[13px] transition-all duration-300 rounded-xl',
                  isActive(item.href)
                    ? 'bg-white/[0.05] text-white/90 font-medium'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]'
                )}
              >
                <span className={cn(
                  'transition-colors',
                  isActive(item.href) ? 'text-[#ff8080]' : 'text-white/30'
                )}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 mx-3 h-[1px] bg-white/[0.04]" />

          {/* Bottom Nav */}
          <div className="space-y-0.5">
            <Link
              href="#settings"
              className="flex items-center gap-3 px-3 py-2.5 text-[13px] text-white/40 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300 rounded-xl"
            >
              <span className="text-white/30"><Settings size={18} /></span>
              <span>Settings</span>
            </Link>
            <button
              onClick={() => setShowAboutModal(true)}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] text-white/40 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300 rounded-xl"
            >
              <span className="text-white/30"><Info size={18} /></span>
              <span>About</span>
            </button>
          </div>
        </nav>

        {/* Footer - Minimal */}
        <div className="p-4">
          <div className="h-[1px] bg-white/[0.04] mb-4" />
          <p className="text-[9px] text-white/20 text-center font-medium tracking-[0.12em] uppercase">
            Vibecode Kit v4
          </p>
        </div>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
    </aside>
  );
}
