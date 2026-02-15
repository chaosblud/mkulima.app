
export enum Screen {
  HOME = 'home',
  MARKET = 'market',
  TRENDS = 'trends',
  AI_ASSISTANT = 'ai_assistant',
  TOOLS = 'tools',
  SUPPORT = 'support',
  PROFILE = 'profile'
}

export interface Order {
  id: string;
  type: 'HIGH DEMAND' | 'STANDARD';
  title: string;
  location: string;
  price: string;
  expiry: string;
}

export interface Buyer {
  id: string;
  name: string;
  rating: number;
  reviews: string;
  experience: string;
  logo: string;
}

export interface MarketPrice {
  id: string;
  crop: string;
  unit: string;
  price: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  color: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: string;
}
