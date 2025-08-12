import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export type RegionSelection = {
  state?: string;
  district?: string;
  market?: string;
  commodity?: string;
};

export type AppPreferences = {
  language: 'hi' | 'en';
  region: RegionSelection;
  notificationsEnabled: boolean;
};

export type AppContextValue = {
  preferences: AppPreferences;
  setLanguage: (lang: 'hi' | 'en') => void;
  updateRegion: (partial: Partial<RegionSelection>) => void;
  toggleNotifications: (enabled: boolean) => void;
  resetRegion: () => void;
};

const defaultPreferences: AppPreferences = {
  language: 'hi',
  region: {},
  notificationsEnabled: true,
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<AppPreferences>(defaultPreferences);

  const value = useMemo<AppContextValue>(() => ({
    preferences,
    setLanguage: (lang) => setPreferences((p) => ({ ...p, language: lang })),
    updateRegion: (partial) => setPreferences((p) => ({ ...p, region: { ...p.region, ...partial } })),
    toggleNotifications: (enabled) => setPreferences((p) => ({ ...p, notificationsEnabled: enabled })),
    resetRegion: () => setPreferences((p) => ({ ...p, region: {} })),
  }), [preferences]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}