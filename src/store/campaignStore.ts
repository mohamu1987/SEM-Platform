import { create } from 'zustand';
import type { Campaign } from '../types/campaign';

interface CampaignStore {
  campaigns: Campaign[];
  selectedCampaignId: string | null;
  loading: boolean;
  error: string | null;
  setCampaigns: (campaigns: Campaign[]) => void;
  selectCampaign: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCampaignStore = create<CampaignStore>((set) => ({
  campaigns: [],
  selectedCampaignId: null,
  loading: false,
  error: null,
  setCampaigns: (campaigns) => set({ campaigns }),
  selectCampaign: (id) => set({ selectedCampaignId: id }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));