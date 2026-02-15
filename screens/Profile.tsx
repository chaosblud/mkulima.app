
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300 p-6">
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <div className="size-24 rounded-full border-4 border-primary/20 overflow-hidden mb-4">
            <img src="https://picsum.photos/seed/profile/200/200" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-4 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold dark:text-white">John Kamau</h2>
        <p className="text-slate-500 text-sm">Nakuru County • Member since 2021</p>
        <div className="flex gap-4 mt-4">
          <ProfileStat label="Crops" value="4" />
          <ProfileStat label="Orders" value="12" />
          <ProfileStat label="Rating" value="4.8" />
        </div>
      </div>

      <div className="space-y-4">
        <ProfileMenuItem icon="person" label="Personal Information" />
        <ProfileMenuItem icon="notifications_active" label="Price Alerts" subLabel="3 active alerts" />
        <ProfileMenuItem icon="history" label="Order History" />
        <ProfileMenuItem icon="help_center" label="Help & Support" />
        <ProfileMenuItem icon="settings" label="Settings" />
        <ProfileMenuItem icon="logout" label="Logout" color="text-red-500" />
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm">Become a Pro Seller</h4>
          <p className="text-xs text-slate-500">Get verified and access higher volume buyers.</p>
        </div>
        <span className="material-symbols-outlined text-primary">chevron_right</span>
      </div>
    </div>
  );
};

const ProfileStat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center px-4">
    <p className="text-lg font-bold dark:text-white">{value}</p>
    <p className="text-[10px] uppercase font-bold text-slate-400">{label}</p>
  </div>
);

const ProfileMenuItem = ({ icon, label, subLabel, color = 'text-slate-600' }: any) => (
  <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-50 dark:border-slate-700">
    <div className="flex items-center gap-3">
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      <div className="text-left">
        <p className="font-bold text-sm dark:text-white">{label}</p>
        {subLabel && <p className="text-[10px] text-primary font-bold">{subLabel}</p>}
      </div>
    </div>
    <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
  </button>
);

export default Profile;
