
import { Order, Buyer, MarketPrice } from './types';

export const ORDERS: Order[] = [
  {
    id: '1',
    type: 'HIGH DEMAND',
    title: 'Wanted: 2 Tons Grade A Maize',
    location: 'Nakuru, Rift Valley',
    price: 'KSh 45k - 50k',
    expiry: '2d'
  },
  {
    id: '2',
    type: 'STANDARD',
    title: 'Wanted: 500kg Dry Beans',
    location: 'Eldoret',
    price: 'Market Rate',
    expiry: '5d'
  }
];

export const BUYERS: Buyer[] = [
  {
    id: 'b1',
    name: 'AgriCorp East Africa',
    rating: 4.9,
    reviews: '120+',
    experience: '4 years',
    logo: 'https://picsum.photos/seed/agri/100/100'
  },
  {
    id: 'b2',
    name: 'Zindi Millers',
    rating: 4.7,
    reviews: '45',
    experience: '2 years',
    logo: 'https://picsum.photos/seed/zindi/100/100'
  }
];

export const MARKET_PRICES: MarketPrice[] = [
  { id: 'p1', crop: 'Maize', unit: '90KG BAG', price: 3200, change: 2.4, trend: 'up', color: 'text-yellow-600' },
  { id: 'p2', crop: 'Beans', unit: '90KG BAG', price: 8500, change: 1.2, trend: 'down', color: 'text-red-600' },
  { id: 'p3', crop: 'Tomatoes', unit: 'BOX / CRATE', price: 4800, change: 0.8, trend: 'up', color: 'text-primary' },
  { id: 'p4', crop: 'Onions', unit: 'PER KG', price: 120, change: 0, trend: 'neutral', color: 'text-purple-600' }
];

export const PRICE_HISTORY = [
  { day: 'MON', value: 40 },
  { day: 'TUE', value: 55 },
  { day: 'WED', value: 45 },
  { day: 'THU', value: 70 },
  { day: 'FRI', value: 65 },
  { day: 'SAT', value: 85 },
  { day: 'SUN', value: 95 },
];
