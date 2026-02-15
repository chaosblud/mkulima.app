
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { MARKET_PRICES, PRICE_HISTORY } from '../constants';

const MarketPrices: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="flex items-center bg-white dark:bg-slate-900 p-4 sticky top-0 z-10 border-b border-gray-50 dark:border-slate-800">
        <div className="flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-full mr-3">
          <span className="material-symbols-outlined text-primary text-2xl">potted_plant</span>
        </div>
        <h1 className="text-[#0d1b10] dark:text-white text-xl font-extrabold flex-1">MKULIMA</h1>
        <div className="flex gap-2">
          <button className="flex size-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-gray-400">Last updated: Today, 08:45 AM</p>
          <span className="inline-flex items-center px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Live</span>
        </div>
        <div className="flex w-full items-stretch rounded-xl h-12 bg-gray-100 dark:bg-slate-800">
          <div className="flex items-center justify-center pl-4 text-gray-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex w-full border-none bg-transparent focus:ring-0 px-3 text-base font-medium" 
            placeholder="Search crops (e.g. Maize, Beans)"/>
        </div>
      </div>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        <MarketTab active label="Nairobi" />
        <MarketTab label="Mombasa" />
        <MarketTab label="Kisumu" />
        <MarketTab label="Eldoret" />
      </div>

      <div className="mx-4 mt-2 mb-4 p-4 rounded-xl bg-gradient-to-br from-primary to-[#0eb42b] text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg leading-tight">Price Alerts</h3>
              <p className="text-xs opacity-90 mt-1 max-w-[180px]">Get notified when Maize prices hit your target range.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-white/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
      </div>

      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-extrabold tracking-tight">Market Prices Overview</h2>
          <button className="text-primary text-xs font-bold flex items-center gap-1">
            See All <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
        <div className="space-y-3">
          {MARKET_PRICES.map(price => (
            <PriceRow key={price.id} {...price} />
          ))}
        </div>

        <div className="mt-8 mb-4">
          <h2 className="text-lg font-extrabold tracking-tight">Price Trends (7 Days)</h2>
          <p className="text-xs text-gray-500">Maize average in Nairobi</p>
        </div>

        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRICE_HISTORY}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold', fill: '#94a3b8' }} />
              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {PRICE_HISTORY.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === PRICE_HISTORY.length - 1 ? '#11d432' : `rgba(17, 212, 50, ${0.2 + (index / 10)})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

const MarketTab = ({ label, active }: { label: string; active?: boolean }) => (
  <button className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-bold transition-all ${active ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400'}`}>
    {label}
  </button>
);

const PriceRow = ({ crop, unit, price, change, trend, color }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm">
    <div className={`size-12 rounded-xl bg-primary/5 flex items-center justify-center ${color}`}>
      <span className="material-symbols-outlined text-3xl">
        {crop === 'Maize' ? 'agriculture' : crop === 'Beans' ? 'grain' : crop === 'Tomatoes' ? 'nutrition' : 'eco'}
      </span>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{crop}</h4>
          <p className="text-[10px] text-gray-400 font-medium">{unit}</p>
        </div>
        <div className="text-right">
          <p className="font-extrabold">KSh {price.toLocaleString()}</p>
          <span className={`text-[10px] font-bold flex items-center justify-end ${trend === 'up' ? 'text-primary' : trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
            <span className="material-symbols-outlined text-xs">
              {trend === 'up' ? 'arrow_drop_up' : trend === 'down' ? 'arrow_drop_down' : 'horizontal_rule'}
            </span>
            {change > 0 ? `+${change}%` : trend === 'neutral' ? '0%' : `-${change}%`}
          </span>
        </div>
      </div>
      <div className="mt-3 h-1 w-full bg-gray-50 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${trend === 'down' ? 'bg-red-500' : 'bg-primary'}`} 
          style={{ width: `${Math.random() * 60 + 20}%` }} />
      </div>
    </div>
  </div>
);

export default MarketPrices;
