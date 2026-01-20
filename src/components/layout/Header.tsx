'use client';

import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  showBackButton?: boolean;
  backHref?: string;
}

export default function Header({ breadcrumbs, showBackButton, backHref = '/' }: HeaderProps) {
  return (
    <header className="h-14 sticky top-0 z-40">
      {/* Ultra transparent glass background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0808]/40 via-[#0a0808]/30 to-[#0a0808]/40 backdrop-blur-3xl" />

      {/* Subtle bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Very subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link
              href={backHref}
              className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/[0.04] text-white/50 hover:text-white/80 transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </Link>
          )}

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight size={12} className="text-white/20" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/40 hover:text-white/70 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[13px] text-white/80 font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Search - More transparent */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 group-focus-within:text-white/40 transition-colors"
            />
            <input
              type="text"
              placeholder="Search players..."
              className="w-64 bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/[0.04] focus:border-white/[0.08] backdrop-blur-xl rounded-xl pl-9 pr-4 py-2 text-[13px] text-white/80 placeholder-white/25 focus:outline-none transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5">
              <kbd className="px-1.5 py-0.5 text-[9px] font-medium text-white/20 bg-white/[0.02] rounded border border-white/[0.04]">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[9px] font-medium text-white/20 bg-white/[0.02] rounded border border-white/[0.04]">
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
