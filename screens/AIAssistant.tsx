
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: "Hello! I'm your MKULIMA AI Assistant. How can I help with your farm today?", sender: 'ai', timestamp: '09:41 AM' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated AI response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Based on your location in Nakuru and current soil moisture data, the ideal planting window for maize starts next Tuesday. Would you like me to set a reminder for you?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[radial-gradient(#e7f3e9_1px,transparent_1px)] dark:bg-background-dark [background-size:20px_20px]">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-4 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[24px]">potted_plant</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight dark:text-white">MKULIMA AI</h1>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-xs font-medium text-slate-500">Active now</span>
            </div>
          </div>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-600 dark:text-gray-400">more_vert</span>
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide">
        {messages.map(msg => (
          <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border ${msg.sender === 'ai' ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-slate-200 border-slate-300 text-slate-600'}`}>
              <span className="material-symbols-outlined text-sm">{msg.sender === 'ai' ? 'smart_toy' : 'person'}</span>
            </div>
            <div className={`flex flex-col gap-1 max-w-[80%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
              <div className={`rounded-2xl p-4 shadow-sm border ${msg.sender === 'user' ? 'rounded-br-none bg-primary text-white border-primary' : 'rounded-bl-none bg-white dark:bg-slate-800 dark:text-white border-slate-100 dark:border-slate-700'}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <span className="text-[10px] text-slate-400 font-medium mx-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        
        {messages.length < 3 && (
          <div className="flex flex-col gap-3 py-2 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-11">Quick Actions</p>
            <div className="flex flex-wrap gap-2 ml-11">
              <SuggestionChip icon="biotech" label="Diagnose a plant" />
              <SuggestionChip icon="partly_cloudy_day" label="Weather forecast" />
              <SuggestionChip icon="payments" label="Market prices" />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-slate-900 px-4 py-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full rounded-full border-none bg-slate-100 dark:bg-slate-800 py-3 pl-12 pr-4 text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Ask me about crops, soil, or pests..." type="text"/>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-primary">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </button>
            </div>
          </div>
          <button 
            onClick={handleSend}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[22px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SuggestionChip = ({ icon, label }: { icon: string; label: string }) => (
  <button className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-gray-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all">
    <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
    {label}
  </button>
);

export default AIAssistant;
