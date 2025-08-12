export const STATES = ['Rajasthan', 'Gujarat', 'Maharashtra'];

export const DISTRICTS: Record<string, string[]> = {
  Rajasthan: ['Bikaner', 'Jaipur', 'Jodhpur'],
  Gujarat: ['Rajkot', 'Ahmedabad'],
  Maharashtra: ['Nagpur', 'Pune'],
};

export const MARKETS: Record<string, string[]> = {
  Bikaner: ['Bikaner Mandi'],
  Jaipur: ['Jaipur Mandi'],
  Jodhpur: ['Jodhpur Mandi'],
  Rajkot: ['Rajkot Mandi'],
  Ahmedabad: ['Ahmedabad Mandi'],
  Nagpur: ['Nagpur Mandi'],
  Pune: ['Pune Mandi'],
};

export const COMMODITY_SEGMENTS = ['Grains', 'Pulses', 'Oils', 'Spices', 'Dry Fruits', 'Rice'] as const;

export const COMMODITIES: Record<string, string[]> = {
  Grains: ['Gehu (Wheat)', 'Makka (Maize)', 'Bajra'],
  Pulses: ['Chana', 'Masoor', 'Moong'],
  Oils: ['Sarson Oil', 'Groundnut Oil', 'Palm Oil'],
  Spices: ['Jeera', 'Dhaniya', 'Mirch', 'Haldi'],
  'Dry Fruits': ['Kaju', 'Badam', 'Kishmish'],
  Rice: ['Basmati', 'Parmal'],
};

export type RateItem = {
  id: string;
  commodity: string;
  market: string;
  state: string;
  district: string;
  pricePerQuintal: number;
  change: number; // positive or negative
  date: string; // ISO
};

export const SAMPLE_RATES: RateItem[] = [
  {
    id: '1',
    commodity: 'Gehu (Wheat)',
    market: 'Bikaner Mandi',
    state: 'Rajasthan',
    district: 'Bikaner',
    pricePerQuintal: 2830,
    change: 20,
    date: new Date().toISOString(),
  },
  {
    id: '2',
    commodity: 'Jeera',
    market: 'Rajkot Mandi',
    state: 'Gujarat',
    district: 'Rajkot',
    pricePerQuintal: 38100,
    change: -150,
    date: new Date().toISOString(),
  },
];

export type NewsItem = { id: string; title: string; summary: string; time: string };
export const NEWS: NewsItem[] = [
  { id: 'n1', title: 'Aaj Ki Taaza Khabar', summary: 'Gehu bhav mein halka tezi dekhi gayi.', time: '2h' },
  { id: 'n2', title: 'Export Update', summary: 'Dhaniya export quota par naye niyam.', time: '5h' },
];

export type DirectoryEntry = { id: string; name: string; category: string; state: string; phone: string };
export const DIRECTORY: DirectoryEntry[] = [
  { id: 'd1', name: 'Shree Traders', category: 'Grains', state: 'Rajasthan', phone: '+91-900000001' },
  { id: 'd2', name: 'Raj Oil Depot', category: 'Oils', state: 'Gujarat', phone: '+91-900000002' },
];

export type Trader = { id: string; name: string; segment: string; verified: boolean; phone: string };
export const TRADERS: Trader[] = [
  { id: 't1', name: 'Mahesh Kumar', segment: 'Grains', verified: true, phone: '+91-900001111' },
  { id: 't2', name: 'Amit Shah', segment: 'Dry Fruits', verified: true, phone: '+91-900002222' },
];