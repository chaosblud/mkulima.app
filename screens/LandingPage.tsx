
import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-primary/10 justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-3xl">leaf_spark</span>
          </div>
          <h2 className="text-[#0d1b10] dark:text-white text-xl font-extrabold tracking-tight">MKULIMA</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary text-sm font-bold tracking-wide uppercase">Swahili</button>
          <button className="bg-primary text-[#0d1b10] px-5 py-2 rounded-lg font-bold text-sm">Login</button>
        </div>
      </header>

      <section className="relative h-[480px] w-full bg-cover bg-center flex items-center justify-center p-6 text-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://picsum.photos/seed/farm/800/1200')` }}>
        <div className="max-w-2xl flex flex-col gap-4">
          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
            Empowering Kenya's Farmers with AI
          </h1>
          <p className="text-white/90 text-base font-medium leading-relaxed">
            Get real-time advice, soil analysis, and access to premium markets from the palm of your hand.
          </p>
          <div className="flex flex-col gap-4 w-full justify-center mt-6">
            <button onClick={onStart} className="min-w-[200px] h-14 bg-primary text-[#0d1b10] rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="min-w-[200px] h-14 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4 p-4 -mt-12 relative z-10">
        <div className="flex-1 min-w-[150px] bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-primary/10">
          <p className="text-[#4c9a59] text-xs font-bold uppercase tracking-wider">Active Farmers</p>
          <p className="text-[#0d1b10] dark:text-white text-2xl font-extrabold">10,000+</p>
          <div className="flex items-center gap-1 text-primary text-xs font-bold mt-1">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+15% this month</span>
          </div>
        </div>
        <div className="flex-1 min-w-[150px] bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-primary/10">
          <p className="text-[#4c9a59] text-xs font-bold uppercase tracking-wider">Market Access</p>
          <p className="text-[#0d1b10] dark:text-white text-2xl font-extrabold">47 Counties</p>
          <div className="flex items-center gap-1 text-primary text-xs font-bold mt-1">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            <span>Verified Buyers</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <h3 className="text-center text-2xl font-bold mb-8">How it Works</h3>
        <div className="space-y-6">
          <Step num={1} icon="person_add" title="Sign Up" desc="Create your farm profile in seconds using your phone number." />
          <Step num={2} icon="psychology" title="Get Advice" desc="Receive AI-driven tips on soil health, pests, and weather." />
          <Step num={3} icon="storefront" title="Sell Produce" desc="Connect directly with wholesalers and get best prices." />
        </div>
      </section>
    </div>
  );
};

const Step = ({ num, icon, title, desc }: { num: number; icon: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 bg-primary/5 rounded-xl border border-primary/10">
    <div className="bg-primary text-[#0d1b10] size-10 rounded-full flex items-center justify-center font-bold shrink-0">{num}</div>
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);

export default LandingPage;
