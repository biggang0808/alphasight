export type Language = 'en' | 'zh';

export enum MarketType {
  A_SHARE = 'A-Share',
  H_SHARE = 'H-Share',
  US_STOCK = 'US-Stock'
}

export interface StockPosition {
  symbol: string;
  name: string;
  market: MarketType;
  avgPrice: number;
  currentPrice: number;
  shares: number;
  pnlPercent: number;
  todayChange: number;
  sector: string;
  volume: number;
  sectorChange: number;
}

export interface TradeRecord {
  id: string;
  date: string;
  symbol: string;
  name: string;
  action: 'Buy' | 'Sell';
  logic: string;
  amount: number; 
  shares: number;
  stopLossPrice: number;
  stopLossPercent: number; 
  targetPrice: number;
}

export interface MarketSector {
  name: string;
  change: number;
  flow: number; 
  flow3Day: number; 
  strength: 'Strong' | 'Neutral' | 'Weak';
}

export interface GlobalResonanceItem {
  usDriver: string; 
  usChange: string; 
  cnConcept: string; 
  reasoning: string; 
  conviction: 'High' | 'Medium' | 'Speculative';
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  time: string;
  impact: 'High' | 'Medium' | 'Low';
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  summary?: string;
}

export interface GlobalState {
  language: Language;
  activeTab: number;
}

export interface ActiveStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  turnover: number;
  hotIndex: number;
}

// --- Deep Dive Analysis ---
export interface StockAnalysisResult {
  symbol: string;
  name: string;
  price: string;
  score: number; // 0-100
  verdict: 'STRONG BUY' | 'BUY' | 'HOLD' | 'SELL' | 'AVOID';
  technical: {
    trend: 'Up' | 'Down' | 'Sideways';
    support: string;
    resistance: string;
    signal: string; 
  };
  fundamental: {
    valuation: 'Undervalued' | 'Fair' | 'Overvalued';
    peRatio: string;
    keyMetric: string;
  };
  catalyst: {
    event: string;
    sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  };
  strategy: {
    entryZone: string;
    stopLoss: string;
    targetPrice: string;
    reasoning: string;
  };
}

// --- NEW: Portfolio Risk Report ---
export interface PortfolioReport {
  riskScore: number; // 0 (Safe) - 100 (Dangerous)
  exposureWarning: string | null; // e.g., "Overweight in Tech (60%)"
  topAction: string; // The single most important action for today
  positions: {
    symbol: string;
    advice: 'HOLD' | 'TRIM' | 'ADD' | 'EXIT';
    reason: string;
  }[];
  psychologyCheck: string; // Advice on trading habits based on history
}

// --- Global Data Container ---
export interface GlobalAppData {
  portfolio: {
    report: PortfolioReport | null;
    loading: boolean;
    lastUpdated: number | null;
  };
  heat: {
    sectors: MarketSector[];
    isLive: boolean;
    analysis: string | null;
    sources: string[];
    loading: boolean;
  };
  radar: {
    data: GlobalResonanceItem[];
    sources: string[];
    hasScanned: boolean;
    loading: boolean;
  };
  macro: {
    news: NewsItem[];
    summary: string | null;
    isLive: boolean;
    loading: boolean;
  };
  deepDive: {
    currentSymbol: string;
    result: StockAnalysisResult | null;
    loading: boolean;
  };
}