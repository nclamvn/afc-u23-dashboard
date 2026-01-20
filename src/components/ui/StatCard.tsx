import { ExternalLink, BarChart3, Settings } from 'lucide-react';

interface StatCardProps {
  title: string;
  children: React.ReactNode;
  actions?: {
    chart?: boolean;
    settings?: boolean;
    external?: boolean;
  };
  className?: string;
}

export default function StatCard({ title, children, actions, className = '' }: StatCardProps) {
  return (
    <div className={`stat-card overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)]">
        <h3 className="text-sm font-medium text-white">{title}</h3>
        {actions && (
          <div className="flex items-center gap-2">
            {actions.chart && (
              <button className="p-1 text-[var(--text-muted)] hover:text-white transition-colors">
                <BarChart3 size={16} />
              </button>
            )}
            {actions.settings && (
              <button className="p-1 text-[var(--text-muted)] hover:text-white transition-colors">
                <Settings size={16} />
              </button>
            )}
            {actions.external && (
              <button className="p-1 text-[var(--text-muted)] hover:text-white transition-colors">
                <ExternalLink size={16} />
              </button>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
