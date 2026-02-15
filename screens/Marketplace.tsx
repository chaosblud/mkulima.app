
import React from 'react';
import { ORDERS, BUYERS } from '../constants';

const Marketplace: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-primary/10">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">potted_plant</span>
          </div>
          <h1 className="text-xl font-800 tracking-tight text-[#0d1b10] dark:text-white">MKULIMA</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-background-light dark:hover:bg-slate-800 rounded-full">
            <span className="material-symbols-outlined text-[#0d1b10] dark:text-white">notifications</span>
          </button>
          <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20" 
            style={{ backgroundImage: `url('https://picsum.photos/seed/farmer_avatar/100/100')` }} />
        </div>
      </header>

      <section className="p-4 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/60">search</span>
          <input className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50" 
            placeholder="Search buyers or specific crops..." type="text"/>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <FilterPill active icon="grid_view" label="All Crops" />
          <FilterPill icon="agriculture" color="text-orange-600" label="Maize" />
          <FilterPill icon="coffee" color="text-amber-800" label="Coffee" />
          <FilterPill icon="spa" color="text-green-700" label="Beans" />
          <FilterPill icon="location_on" label="Rift Valley" />
        </div>
      </section>

      <section className="px-4 py-2">
        <div className="grid grid-cols-2 gap-3">
          <StatBox label="Total Demand" value="145" unit="Tons" />
          <StatBox label="Active Buyers" value="82" unit="Verified" />
        </div>
      </section>

      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold tracking-tight">Available Orders</h2>
          <button className="text-primary text-sm font-bold flex items-center">
            See all <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
        <div className="space-y-4">
          {ORDERS.map(order => (
            <OrderCard key={order.id} {...order} />
          ))}
        </div>
      </section>

      <section className="mt-8 bg-primary/5 dark:bg-slate-900/50 py-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold tracking-tight">Featured Buyers</h2>
          <span className="material-symbols-outlined text-primary">verified_user</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {BUYERS.map(buyer => (
            <BuyerCard key={buyer.id} {...buyer} />
          ))}
        </div>
      </section>

      <section className="p-6 text-center">
        <div className="bg-[#0d1b10] text-white rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 size-40 bg-primary/20 rounded-full blur-3xl" />
          <h3 className="text-xl font-bold mb-2">Have produce ready?</h3>
          <p className="text-white/70 text-sm mb-6">List your harvest today and get matched with verified buyers in minutes.</p>
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95">
            <span className="material-symbols-outlined">add_circle</span>
            List Your Produce
          </button>
        </div>
      </section>
    </div>
  );
};

const FilterPill = ({ icon, label, active, color }: { icon: string; label: string; active?: boolean; color?: string }) => (
  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold transition-all ${active ? 'bg-primary text-white shadow-primary/30' : 'bg-white dark:bg-slate-800 border border-primary/10 hover:bg-background-light'}`}>
    <span className={`material-symbols-outlined text-[18px] ${color || ''}`}>{icon}</span>
    {label}
  </button>
);

const StatBox = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
  <div className="bg-primary/5 dark:bg-slate-800 p-4 rounded-xl border border-primary/10">
    <p className="text-[11px] uppercase tracking-wider font-bold text-primary/70">{label}</p>
    <p className="text-2xl font-800">{value} <span className="text-sm font-medium opacity-60">{unit}</span></p>
  </div>
);

const OrderCard = ({ type, title, location, price, expiry }: any) => (
  <div className="bg-white dark:bg-slate-800 border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-3">
      <div>
        <span className={`inline-block px-2 py-1 text-[10px] font-bold rounded-md uppercase mb-2 ${type === 'HIGH DEMAND' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300'}`}>
          {type}
        </span>
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h3>
      </div>
      <div className="bg-background-light dark:bg-slate-700 p-2 rounded-lg text-center">
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase leading-none">Expires</p>
        <p className={`text-sm font-bold ${type === 'HIGH DEMAND' ? 'text-red-500' : ''}`}>{expiry}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 text-sm opacity-70 mb-4">
      <div className="flex items-center gap-1">
        <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
        {location}
      </div>
      <div className="flex items-center gap-1">
        <span className="material-symbols-outlined text-[18px] text-primary">payments</span>
        {price}
      </div>
    </div>
    <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
      Quote My Price
    </button>
  </div>
);

const BuyerCard = ({ logo, name, rating, reviews, experience }: any) => (
  <div className="min-w-[200px] bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/10 shadow-sm">
    <div className="size-12 rounded-lg bg-cover bg-center mb-3" style={{ backgroundImage: `url('${logo}')` }} />
    <h4 className="font-bold text-sm truncate">{name}</h4>
    <div className="flex items-center gap-1 mt-1 mb-2">
      <span className="material-symbols-outlined text-yellow-500 text-[16px] filled">star</span>
      <span className="text-xs font-bold">{rating}</span>
      <span className="text-[10px] opacity-40 font-medium">({reviews} reviews)</span>
    </div>
    <div className="flex items-center gap-1 text-[11px] opacity-60">
      <span className="material-symbols-outlined text-[14px]">history</span>
      <span>{experience} on Mkulima</span>
    </div>
  </div>
);

export default Marketplace;
