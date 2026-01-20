'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { MarketValueHistory } from '@/data/types';

interface MarketValueChartProps {
  data: MarketValueHistory[];
  currentValue: string;
}

export default function MarketValueChart({ data, currentValue }: MarketValueChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-bold text-white">{currentValue}</p>
        <p className="text-[var(--text-muted)] text-sm">Current Market Value</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <p className="text-2xl font-bold text-white">{currentValue}</p>
        <p className="text-[var(--text-muted)] text-xs">Market Value (mln €)</p>
      </div>
      <div className="h-32 min-h-[128px]">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
              tickFormatter={(value) => `${value}m`}
            />
            <Tooltip
              contentStyle={{
                background: '#1e1e32',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
              itemStyle={{ color: '#f97316' }}
              formatter={(value) => [`€${value}m`, 'Value']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ fill: '#f97316', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: '#f97316' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
