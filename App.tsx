import React, { useState } from 'react';
import { GlobalState, GlobalAppData } from './types';
import { Layout } from './components/Layout';
import { Portfolio } from './components/Portfolio';
import { MarketHeat } from './components/MarketHeat';
import { FutureRadar } from './components/FutureRadar';
import { StockDeepDive } from './components/StockDeepDive';
import { MacroHub } from './components/MacroHub';
import { MOCK_SECTORS, MOCK_NEWS } from './constants';

const App: React.FC = () => {
  // 1. UI State (Language, Tab)
  const [uiState, setUiState] = useState<GlobalState>({
    language: 'zh',
    activeTab: 0
  });

  // 2. Data State (Persistent Analysis Results)
  const [appData, setAppData] = useState<GlobalAppData>({
    portfolio: {
      report: null,
      loading: false,
      lastUpdated: null
    },
    heat: {
      sectors: MOCK_SECTORS,
      isLive: false,
      analysis: null,
      sources: [],
      loading: false
    },
    radar: {
      data: [],
      sources: [],
      hasScanned: false,
      loading: false
    },
    macro: {
      news: MOCK_NEWS,
      summary: null,
      isLive: false,
      loading: false
    },
    deepDive: {
      currentSymbol: '',
      result: null,
      loading: false
    }
  });

  // Helper setters
  const updatePortfolio = (updates: Partial<GlobalAppData['portfolio']>) => {
    setAppData(prev => ({ ...prev, portfolio: { ...prev.portfolio, ...updates } }));
  };

  const updateHeat = (updates: Partial<GlobalAppData['heat']>) => {
    setAppData(prev => ({ ...prev, heat: { ...prev.heat, ...updates } }));
  };

  const updateRadar = (updates: Partial<GlobalAppData['radar']>) => {
    setAppData(prev => ({ ...prev, radar: { ...prev.radar, ...updates } }));
  };

  const updateMacro = (updates: Partial<GlobalAppData['macro']>) => {
    setAppData(prev => ({ ...prev, macro: { ...prev.macro, ...updates } }));
  };

  const updateDeepDive = (updates: Partial<GlobalAppData['deepDive']>) => {
    setAppData(prev => ({ ...prev, deepDive: { ...prev.deepDive, ...updates } }));
  };

  return (
    <Layout state={uiState} setState={setUiState}>
      {uiState.activeTab === 0 && (
        <Portfolio 
          lang={uiState.language} 
          data={appData.portfolio}
          onUpdate={updatePortfolio}
        />
      )}
      
      {uiState.activeTab === 1 && (
        <MarketHeat 
          lang={uiState.language} 
          data={appData.heat} 
          onUpdate={updateHeat} 
        />
      )}
      
      {uiState.activeTab === 2 && (
        <FutureRadar 
          lang={uiState.language} 
          data={appData.radar} 
          onUpdate={updateRadar} 
        />
      )}
      
      {uiState.activeTab === 3 && (
        <StockDeepDive 
          lang={uiState.language} 
          data={appData.deepDive}
          onUpdate={updateDeepDive}
        />
      )}
      
      {uiState.activeTab === 4 && (
        <MacroHub 
          lang={uiState.language} 
          data={appData.macro} 
          onUpdate={updateMacro} 
        />
      )}
    </Layout>
  );
};

export default App;