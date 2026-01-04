import { MarketSector, NewsItem, StockPosition, MarketType, TradeRecord, ActiveStock } from "./types";

export const APP_NAME = "AlphaSight";

// Dictionary for UI Translations
export const DICTIONARY = {
  en: {
    nav: {
      portfolio: "Portfolio DNA",
      sentiment: "Market Sentiment",
      radar: "Future Radar",
      analysis: "Stock Deep Dive",
      macro: "Macro Hub"
    },
    common: {
      loading: "AI Analyst Thinking...",
      refresh: "Refresh Data",
      askAi: "Ask AI Analyst",
      symbol: "Symbol",
      price: "Price",
      change: "Change",
      pnl: "P&L",
      flow: "Net Flow",
      action: "Action"
    },
    portfolio: {
      totalValue: "Total Asset Value",
      dayGain: "Day's Gain",
      monthGain: "Month's Gain",
      yearGain: "Year's Gain",
      aiReport: "Generate Daily Strategy Report",
      holding: "Holdings Breakdown",
      table: {
        sector: "Sector",
        weight: "Weight",
        volume: "Vol",
        sectorChange: "Sec. Chg"
      },
      history: {
        title: "Recent Operations Log",
        date: "Date",
        logic: "Logic/Thesis",
        stopLoss: "Stop Loss",
        target: "Target",
        shares: "Shares",
        amount: "Amount"
      }
    },
    market: {
      heat: "Sector Heatmap",
      mood: "Market Mood Index",
      interpretation: "AI Market Interpretation",
      activeTable: "Active Leaders",
      turnover: "Turnover",
      heatDaily: "Daily Flow",
      heat3Day: "3-Day Flow"
    },
    radar: {
      smartMoney: "Smart Money Tracker",
      nextBig: "Potential Explosive Sectors"
    },
    analysis: {
      placeholder: "Enter symbol (e.g., AAPL, 600519)",
      analyze: "Analyze",
      fundamental: "Fundamental",
      technical: "Technical",
      verdict: "AI Verdict"
    },
    macro: {
      title: "Global Intelligence",
      impact: "Market Impact"
    }
  },
  zh: {
    nav: {
      portfolio: "持仓分析",
      sentiment: "市场热度",
      radar: "未来雷达",
      analysis: "个股深度",
      macro: "宏观视野"
    },
    common: {
      loading: "AI分析师思考中...",
      refresh: "刷新数据",
      askAi: "咨询AI",
      symbol: "代码",
      price: "现价",
      change: "涨跌幅",
      pnl: "盈亏",
      flow: "主力净流",
      action: "操作"
    },
    portfolio: {
      totalValue: "总资产",
      dayGain: "本日盈亏",
      monthGain: "本月盈亏",
      yearGain: "本年盈亏",
      aiReport: "生成今日策略报告",
      holding: "持仓明细",
      table: {
        sector: "所属板块",
        weight: "持仓占比",
        volume: "当日成交",
        sectorChange: "板块涨幅"
      },
      history: {
        title: "最近操作记录",
        date: "日期",
        logic: "交易逻辑",
        stopLoss: "止损位",
        target: "预计目标",
        shares: "股数",
        amount: "金额"
      }
    },
    market: {
      heat: "板块热力图",
      mood: "市场情绪指数",
      interpretation: "AI市场解读",
      activeTable: "活跃龙头",
      turnover: "换手率",
      heatDaily: "主力净买入",
      heat3Day: "三日净买入"
    },
    radar: {
      smartMoney: "聪明钱追踪",
      nextBig: "潜在爆发板块"
    },
    analysis: {
      placeholder: "输入代码 (如: AAPL, 600519)",
      analyze: "深度分析",
      fundamental: "基本面",
      technical: "技术面",
      verdict: "AI结论"
    },
    macro: {
      title: "全球情报",
      impact: "市场影响"
    }
  }
};

// Mock Data for Demo
export const MOCK_POSITIONS: StockPosition[] = [
  { symbol: 'TSLA', name: 'Tesla', market: MarketType.US_STOCK, avgPrice: 180.50, currentPrice: 245.30, shares: 100, pnlPercent: 35.9, todayChange: 2.5, sector: 'Consumer Discretionary', volume: 125000000, sectorChange: 1.2 },
  { symbol: '00700', name: 'Tencent', market: MarketType.H_SHARE, avgPrice: 320.00, currentPrice: 380.20, shares: 500, pnlPercent: 18.8, todayChange: -1.2, sector: 'Communication', volume: 45000000, sectorChange: -0.5 },
  { symbol: '600519', name: 'Moutai', market: MarketType.A_SHARE, avgPrice: 1750.00, currentPrice: 1680.00, shares: 200, pnlPercent: -4.0, todayChange: 0.5, sector: 'Consumer Staples', volume: 21000, sectorChange: 0.8 },
  { symbol: 'NVDA', name: 'NVIDIA', market: MarketType.US_STOCK, avgPrice: 450.00, currentPrice: 890.00, shares: 50, pnlPercent: 97.7, todayChange: 3.1, sector: 'Technology', volume: 55000000, sectorChange: 2.4 },
];

export const MOCK_SECTORS: MarketSector[] = [
  { name: 'AI & Chips', change: 3.4, flow: 1500, flow3Day: 4500, strength: 'Strong' },
  { name: 'EV & Battery', change: -0.8, flow: -240, flow3Day: -600, strength: 'Weak' },
  { name: 'Consumer', change: 1.2, flow: 320, flow3Day: 800, strength: 'Neutral' },
  { name: 'Healthcare', change: 0.5, flow: 80, flow3Day: 150, strength: 'Neutral' },
  { name: 'Crypto Related', change: 5.1, flow: 2100, flow3Day: 5200, strength: 'Strong' },
  { name: 'Real Estate', change: -1.5, flow: -500, flow3Day: -1200, strength: 'Weak' },
];

export const MOCK_NEWS: NewsItem[] = [
  { id: '1', title: 'Fed Signals Potential Rate Cut in Q3', source: 'Bloomberg', time: '10:30 AM', impact: 'High', sentiment: 'Positive' },
  { id: '2', title: 'New Stimulus Package Announced for Manufacturing', source: 'Xinhua', time: '09:15 AM', impact: 'High', sentiment: 'Positive' },
  { id: '3', title: 'Tech Giant Misses Earnings Expectations', source: 'Reuters', time: '08:00 AM', impact: 'Medium', sentiment: 'Negative' },
];

// New Mock Data for Trade History
export const MOCK_TRADE_HISTORY: TradeRecord[] = [
  {
    id: 't1',
    date: '2024-05-15',
    symbol: 'NVDA',
    name: 'NVIDIA',
    action: 'Buy',
    logic: 'Breakout from consolidation wedge. AI demand remains strong.',
    amount: 22500,
    shares: 50,
    stopLossPrice: 420.00,
    stopLossPercent: -6.5,
    targetPrice: 600.00
  },
  {
    id: 't2',
    date: '2024-05-10',
    symbol: 'TSLA',
    name: 'Tesla',
    action: 'Buy',
    logic: 'Oversold RSI < 30 on daily. Contrarian play on FSD news.',
    amount: 18050,
    shares: 100,
    stopLossPrice: 165.00,
    stopLossPercent: -8.0,
    targetPrice: 220.00
  },
  {
    id: 't3',
    date: '2024-04-20',
    symbol: '00700',
    name: 'Tencent',
    action: 'Buy',
    logic: 'Valuation repair. PE Ratio historically low.',
    amount: 160000,
    shares: 500,
    stopLossPrice: 290.00,
    stopLossPercent: -9.3,
    targetPrice: 400.00
  },
  {
    id: 't4',
    date: '2024-03-01',
    symbol: 'BABA',
    name: 'Alibaba',
    action: 'Sell',
    logic: 'Stop loss triggered. Failed to hold support at $75.',
    amount: 15000,
    shares: 200,
    stopLossPrice: 75.00,
    stopLossPercent: -5.0,
    targetPrice: 90.00
  }
];

export const MOCK_ACTIVE_STOCKS: ActiveStock[] = [
  { symbol: '300059', name: 'East Money', price: 14.20, change: 5.6, turnover: 12.5, hotIndex: 98 },
  { symbol: '601138', name: 'Foxconn Ind', price: 22.45, change: 8.9, turnover: 8.2, hotIndex: 95 },
  { symbol: '002594', name: 'BYD', price: 210.60, change: 2.1, turnover: 3.4, hotIndex: 88 },
  { symbol: '600030', name: 'CITIC Sec', price: 19.80, change: -1.2, turnover: 4.1, hotIndex: 75 },
  { symbol: '000725', name: 'BOE Tech', price: 4.15, change: 0.5, turnover: 2.8, hotIndex: 60 },
];