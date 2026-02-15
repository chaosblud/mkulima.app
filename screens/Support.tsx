
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="px-6 py-8 bg-gradient-to-b from-primary/10 to-transparent">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">We're here to help!</h2>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Reach out to the MKULIMA team anytime. We love hearing from our farmers and partners.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-6 mb-8">
        <ContactButton icon="call" label="Call Us" subText="+254 7XX XXX" color="bg-primary" />
        <ContactButton icon="chat" label="WhatsApp" subText="Chat now" color="bg-[#25D366]" />
      </div>

      <div className="px-6 mb-10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">mail</span>
          Send us a message
        </h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input label="Full Name" placeholder="John Doe" />
          <Input label="Email Address" placeholder="john@example.com" type="email" />
          <div>
            <label className="block text-sm font-semibold mb-1">How can we help?</label>
            <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
              placeholder="Tell us what's on your mind..." rows={4}></textarea>
          </div>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-95">
            Send Message
          </button>
        </form>
      </div>

      <div className="px-6 mb-10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">location_on</span>
          Our Headquarters
        </h3>
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800">
            <img src="https://picsum.photos/seed/map/400/200" alt="Map" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-white p-2 rounded-full shadow-xl animate-bounce">
                <span className="material-symbols-outlined">person_pin_circle</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900">
            <p className="font-bold">MKULIMA Hub</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Harambee Avenue, Nairobi CBD, Kenya</p>
            <button className="mt-3 text-sm font-bold text-primary hover:underline">Open in Google Maps</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactButton = ({ icon, label, subText, color }: any) => (
  <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all group">
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-3 shadow-lg`}>
      <span className="material-symbols-outlined text-white">{icon}</span>
    </div>
    <span className="font-bold text-sm">{label}</span>
    <span className="text-xs text-primary font-medium">{subText}</span>
  </button>
);

const Input = ({ label, placeholder, type = 'text' }: any) => (
  <div>
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
      placeholder={placeholder} type={type} />
  </div>
);

export default Support;
