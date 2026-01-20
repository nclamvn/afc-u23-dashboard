'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GoalsDonutChartProps {
  tournamentGoals: number;
  intGoals: number;
  clubGoals?: number;
}

export default function GoalsDonutChart({ tournamentGoals, intGoals, clubGoals = 0 }: GoalsDonutChartProps) {
  const otherGoals = Math.max(0, intGoals - tournamentGoals);

  const data = [
    { name: 'AFC U23', value: tournamentGoals, color: '#f97316' },
    { name: 'Other Int\'l', value: otherGoals, color: '#3b82f6' },
  ];

  const totalGoals = tournamentGoals + otherGoals;

  return (
    <div className="flex items-center gap-4">
      <div className="w-24 h-24 min-w-[96px] min-h-[96px] relative">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={40}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{totalGoals}</span>
        </div>
      </div>

      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-[var(--text-secondary)]">{item.name}</span>
            <span className="font-medium text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
