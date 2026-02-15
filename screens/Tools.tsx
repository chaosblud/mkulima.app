
import React from 'react';

interface ToolsProps {
  onLaunchAI: () => void;
}

const Tools: React.FC<ToolsProps> = ({ onLaunchAI }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-800 text-slate-800 dark:text-white mb-2">Farming Tools</h2>
        <p className="text-slate-500 text-sm mb-6">Empowering your farm with intelligent data and AI.</p>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-sm" 
            placeholder="Find a specific tool..." type="text"/>
        </div>
      </div>

      <div className="mb-8 group">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-green-600 p-1 shadow-lg shadow-primary/20">
          <div className="bg-white dark:bg-slate-900 rounded-[calc(1rem-2px)] p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">linked_camera</span>
              </div>
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">AI Crop Diagnosis</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              Identify pests, diseases, and nutrient deficiencies instantly. Just snap a photo of your leaf or stem.
            </p>
            <button onClick={onLaunchAI} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Launch Scanner <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <ToolCard 
          icon="partly_cloudy_day" 
          title="Weather Intelligence" 
          desc="Hyper-local forecasts for better planting."
          stats={[
            { label: 'Today', value: '24°C', color: 'text-primary' },
            { label: 'Rain', value: '12%', color: 'text-blue-500' },
            { label: 'Soil', value: 'Moist', color: 'text-amber-800' },
          ]}
          linkText="Check full forecast"
        />
        
        <ToolCard 
          icon="payments" 
          title="Market Price Comparison" 
          desc="Real-time prices from different hubs."
          customContent={
            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 dark:text-slate-400">Maize (90kg) - Nairobi</span>
                <span className="font-bold">KES 4,200 <span className="text-green-500">↑</span></span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 dark:text-slate-400">Beans (90kg) - Mombasa</span>
                <span className="font-bold">KES 8,500 <span className="text-red-500">↓</span></span>
              </div>
            </div>
          }
          linkText="Compare Markets"
        />

        <ToolCard 
          icon="science" 
          title="Input Recommendations" 
          desc="Best seeds and fertilizers for your soil."
          tags={['NPK Fertilizer', 'Hybrid Seed', 'Organic']}
          linkText="Get Recommendations"
        />
      </div>
    </div>
  );
};

const ToolCard = ({ icon, title, desc, stats, linkText, customContent, tags }: any) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
    <div className="flex gap-4">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold dark:text-white">{title}</h3>
        <p className="text-slate-500 text-sm mb-3">{desc}</p>
        
        {stats && (
          <div className="flex items-center justify-between p-3 bg-background-light dark:bg-slate-800 rounded-lg mb-3">
            {stats.map((s: any) => (
              <div key={s.label} className="text-center px-2">
                <p className="text-[10px] uppercase text-slate-400 font-bold">{s.label}</p>
                <p className={`font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        )}

        {customContent}

        {tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((t: string) => (
              <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-bold text-slate-600 dark:text-slate-300">{t}</span>
            ))}
          </div>
        )}

        <button className="text-primary text-sm font-bold flex items-center gap-1">
          {linkText} <span className="material-symbols-outlined text-xs">open_in_new</span>
        </button>
      </div>
    </div>
  </div>
);

export default Tools;
