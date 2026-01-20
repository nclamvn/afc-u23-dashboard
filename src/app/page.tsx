import Link from 'next/link';
import { Calendar, MapPin, Clock, Trophy, Zap, Users, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="fixed inset-0 bg-[#0a0506]" />

      {/* Red Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top red glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff2d2d]/15 rounded-full blur-[150px]" />
        {/* Right crimson glow */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#dc143c]/12 rounded-full blur-[130px]" />
        {/* Bottom orange-red glow */}
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#ff4500]/10 rounded-full blur-[120px]" />
        {/* Center deep red */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b0000]/8 rounded-full blur-[200px]" />
      </div>

      {/* Floating Red Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4444] to-[#cc0000] flex items-center justify-center shadow-lg shadow-[#ff4444]/30">
              <Trophy className="text-white" size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-white">AFC U23</span>
              <span className="text-white/40 text-sm ml-2">Asian Cup 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[
              { label: 'Home', href: '/', active: true },
              { label: 'Vietnam', href: '/vietnam' },
              { label: 'China', href: '/china' },
              { label: 'H2H', href: '/h2h' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? 'bg-white/[0.08] text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <main className="px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4444]/20 to-[#ff6b35]/20 border border-[#ff4444]/20">
                <Sparkles size={14} className="text-[#ff6b35]" />
                <span className="text-sm font-medium text-white/80">Semifinal • Live Tonight</span>
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
              </div>
            </div>

            {/* Match Card - Premium Glass Design */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4444]/25 via-[#dc143c]/20 to-[#ff6b35]/25 blur-3xl opacity-60" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/[0.1] overflow-hidden">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="p-10">
                  {/* Teams Section */}
                  <div className="flex items-center justify-between gap-8">
                    {/* Vietnam */}
                    <Link href="/vietnam" className="flex-1 group">
                      <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#da251d]/20 to-[#ffcd00]/20 flex items-center justify-center border border-white/[0.1] group-hover:border-[#da251d]/50 transition-colors">
                            <span className="text-6xl">🇻🇳</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-lg bg-[#30d158]/20 border border-[#30d158]/30">
                            <span className="text-[10px] font-bold text-[#30d158]">TOP 4</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">Vietnam</h2>
                        <p className="text-white/40 text-sm">U23 Việt Nam</p>
                        <div className="flex items-center gap-3 mt-3 text-xs text-white/50">
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">W4</span>
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">D0</span>
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">L0</span>
                        </div>
                      </div>
                    </Link>

                    {/* VS Section */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/[0.15] flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }} />
                        {/* Inner content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl font-black bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">VS</span>
                        </div>
                      </div>
                      {/* Match time */}
                      <div className="mt-4 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                        <p className="text-lg font-bold text-white text-center">22:30</p>
                        <p className="text-xs text-white/40 text-center">Vietnam Time</p>
                      </div>
                    </div>

                    {/* China */}
                    <Link href="/china" className="flex-1 group">
                      <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#de2910]/20 to-[#ffde00]/20 flex items-center justify-center border border-white/[0.1] group-hover:border-[#de2910]/50 transition-colors">
                            <span className="text-6xl">🇨🇳</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-lg bg-[#ff9f0a]/20 border border-[#ff9f0a]/30">
                            <span className="text-[10px] font-bold text-[#ff9f0a]">TOP 4</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">China</h2>
                        <p className="text-white/40 text-sm">U23 Trung Quốc</p>
                        <div className="flex items-center gap-3 mt-3 text-xs text-white/50">
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">W2</span>
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">D2</span>
                          <span className="px-2 py-1 rounded-md bg-white/[0.05]">L0</span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Match Info Bar */}
                  <div className="mt-8 pt-8 border-t border-white/[0.06]">
                    <div className="flex items-center justify-center gap-8 text-sm">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar size={16} className="text-[#0a84ff]" />
                        <span>20 January 2026</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin size={16} className="text-[#ff375f]" />
                        <span>King Abdullah Stadium, Jeddah</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="flex items-center gap-2 text-white/60">
                        <Trophy size={16} className="text-[#ffd60a]" />
                        <span>AFC U23 Asian Cup - Semifinal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {/* Vietnam Squad */}
              <Link href="/vietnam" className="group">
                <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 hover:border-[#0a84ff]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#da251d]/20 to-[#ffcd00]/20 flex items-center justify-center">
                      <span className="text-2xl">🇻🇳</span>
                    </div>
                    <ArrowRight size={18} className="text-white/30 group-hover:text-[#0a84ff] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Vietnam Squad</h3>
                  <p className="text-sm text-white/40">23 players • Full analysis</p>
                </div>
              </Link>

              {/* China Squad */}
              <Link href="/china" className="group">
                <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 hover:border-[#ff375f]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#de2910]/20 to-[#ffde00]/20 flex items-center justify-center">
                      <span className="text-2xl">🇨🇳</span>
                    </div>
                    <ArrowRight size={18} className="text-white/30 group-hover:text-[#ff375f] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">China Squad</h3>
                  <p className="text-sm text-white/40">23 players • Full analysis</p>
                </div>
              </Link>

              {/* Head to Head */}
              <Link href="/h2h" className="group">
                <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 hover:border-[#ff6b35]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff4444]/20 to-[#ff6b35]/20 flex items-center justify-center">
                      <BarChart3 size={22} className="text-[#ff6b35]" />
                    </div>
                    <ArrowRight size={18} className="text-white/30 group-hover:text-[#ff6b35] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Head to Head</h3>
                  <p className="text-sm text-white/40">Stats • History • Analysis</p>
                </div>
              </Link>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Goals Scored', vn: 12, cn: 5, icon: Zap, color: '#30d158' },
                  { label: 'Clean Sheets', vn: 3, cn: 4, icon: Users, color: '#0a84ff' },
                  { label: 'Win Rate', vn: '100%', cn: '50%', icon: Trophy, color: '#ffd60a' },
                  { label: 'Avg Rating', vn: 7.8, cn: 7.2, icon: BarChart3, color: '#bf5af2' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <stat.icon size={14} style={{ color: stat.color }} />
                      <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-white">{stat.vn}</span>
                      <span className="text-xs text-white/30">vs</span>
                      <span className="text-lg font-bold text-white">{stat.cn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-white/30">
            <span>Vision Pro Style • v5.0</span>
            <span>AFC U23 Asian Cup 2026 Dashboard</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
