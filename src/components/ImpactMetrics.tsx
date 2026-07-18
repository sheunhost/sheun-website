import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Pre-Audit', conversion: 1.2, aov: 45, revenue: 12000 },
  { month: 'Month 1', conversion: 1.5, aov: 48, revenue: 16000 },
  { month: 'Month 2', conversion: 1.9, aov: 52, revenue: 22000 },
  { month: 'Month 3', conversion: 2.4, aov: 65, revenue: 31000 },
  { month: 'Month 4', conversion: 3.1, aov: 72, revenue: 45000 },
  { month: 'Month 5', conversion: 3.8, aov: 80, revenue: 58000 },
  { month: 'Month 6', conversion: 4.2, aov: 85, revenue: 72000 },
];

export function ImpactMetrics() {
  const [activeMetric, setActiveMetric] = useState<'conversion' | 'aov' | 'revenue'>('revenue');

  const metrics = [
    { id: 'revenue', label: 'Monthly Revenue', prefix: '$', suffix: '', color: '#10b981' },
    { id: 'conversion', label: 'Conversion Rate', prefix: '', suffix: '%', color: '#3b82f6' },
    { id: 'aov', label: 'Average Order Value', prefix: '$', suffix: '', color: '#f59e0b' }
  ] as const;

  const activeColor = metrics.find(m => m.id === activeMetric)?.color || '#10b981';

  return (
    <section className="py-32 bg-white dark:bg-navy relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white mb-2">
            Measurable ROI
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-navy dark:text-white tracking-tighter">
            Key Impact <span className="text-[#10b981] italic font-serif font-light">Metrics</span>.
          </h2>
          <p className="text-[#71717a] dark:text-white/70 text-lg sm:text-xl font-serif italic leading-relaxed">
            Beautiful design is useless if it doesn't convert. Here is the average trajectory of stores 6 months post-rebuild.
          </p>
        </div>

        <div className="bg-[#09090b] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none"></div>
          
          <div className="flex flex-wrap gap-4 mb-12 relative z-10 justify-center">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setActiveMetric(metric.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeMetric === metric.id 
                    ? 'bg-white dark:bg-navy text-navy dark:text-white shadow-lg scale-105' 
                    : 'bg-white dark:bg-navy/5 text-white/50 hover:bg-white dark:bg-navy/10 hover:text-white'
                }`}
              >
                {metric.label}
              </button>
            ))}
          </div>

          <div className="h-[400px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={activeColor} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={activeColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#ffffff50" 
                  tick={{ fill: '#ffffff50', fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#ffffff50" 
                  tick={{ fill: '#ffffff50', fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                  tickFormatter={(value) => {
                    const m = metrics.find(m => m.id === activeMetric);
                    const formattedValue = value >= 1000 ? (value / 1000) + 'k' : value;
                    return `${m?.prefix}${formattedValue}${m?.suffix}`;
                  }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                  formatter={(value: number) => {
                    const m = metrics.find(m => m.id === activeMetric);
                    return [`${m?.prefix}${value}${m?.suffix}`, m?.label];
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey={activeMetric} 
                  stroke={activeColor} 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorMetric)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Avg. Conversion Increase</p>
              <p className="text-4xl font-bold text-white">+250%</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Avg. Revenue Lift</p>
              <p className="text-4xl font-bold text-white">+500%</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">ROI Timeline</p>
              <p className="text-4xl font-bold text-white">&lt; 3 Months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
