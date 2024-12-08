export interface Campaign {
  id: string;
  name: string;
  platform: 'google' | 'bing';
  status: 'active' | 'paused' | 'ended';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  startDate: string;
  endDate: string;
}

export interface AdGroup {
  id: string;
  campaignId: string;
  name: string;
  status: 'active' | 'paused';
  cpc: number;
  impressions: number;
  clicks: number;
  conversions: number;
}

export interface Keyword {
  id: string;
  adGroupId: string;
  text: string;
  matchType: 'exact' | 'phrase' | 'broad';
  status: 'active' | 'paused';
  cpc: number;
  position: number;
  impressions: number;
  clicks: number;
  conversions: number;
}