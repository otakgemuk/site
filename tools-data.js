// ─────────────────────────────────────────────────────────────
//  TOOLS DATA — Sire Mammat
//  Edit using tools-editor.html — then upload this file to Cloudflare
//  Last updated: 2026-03-22
// ─────────────────────────────────────────────────────────────

const TOOLS_DATA = [
  {
    id: 1,
    name: "TradingView",
    category: "Charting",
    badge: "Free + Pro",
    icon: "📊",
    url: "https://tradingview.com",
    rating: 5,
    used_daily: true,
    tagline: "Best multi-timeframe charting for daily prep and level identification.",
    description: "TradingView is my primary charting platform for everything outside of live execution. I use it for pre-market preparation, marking up key levels, identifying support and resistance, and reviewing the daily and weekly structure before every session. The Pine Script alert system is excellent for flagging VWAP crosses and level breaks.",
    pros: [
        "Best-in-class charting interface — fast and clean",
        "Multi-timeframe analysis in one view",
        "Strong community with shared indicators",
        "Excellent alert system for key levels",
        "Works in browser — no install required"
    ],
    cons: [
        "Pro subscription needed for multiple charts and indicators",
        "Not connected to futures execution directly"
    ],
    affiliate: false,
  },
  {
    id: 2,
    name: "QuantTower",
    category: "Charting",
    badge: "Multi-Asset Trading Platform",
    icon: "🔧",
    url: "https://www.quantower.com/",
    rating: 4,
    used_daily: true,
    tagline: "Trading Platform",
    description: "My preferred trading platform that comes with multiple feeds and supporting multiple connectivity - CQG, Rithmic, Interactive Brokers, BYbit etc\nYou can create your own workspace, alerts and comes with advanced charting including volume profiles, footprint charts and classic candlesticks",
    pros: [
        "Very User Friendly",
        "Customization of workspace",
        "Easy to track your portfolios",
        "Free ccopy trading"
    ],
    cons: [
        "Hardware requirement - you need a fast PC with lots of RAM",
        "Limited to 2 indicators on free mode"
    ],
    affiliate: false,
  },
  {
    id: 3,
    name: "BarChart.com",
    category: "Market Overview",
    badge: "Free + Paid",
    icon: "🔧",
    url: "https://www.barchart.com/futures",
    rating: 5,
    used_daily: true,
    tagline: "Best major markets overview summary for all markets including the Futures Market",
    description: "My daily routine includes checking the market overview and the expected moves numbers which comes free and mostly used by traders to check commitment of traders data.",
    pros: [
        "Easy to Understand",
        "Coverage is good",
        "Trading Guide",
        "Excellent Authors",
        "Technical Analysis"
    ],
    cons: [
        "Not everything is free"
    ],
    affiliate: false,
  },
  {
    id: 5,
    name: "Tradovate",
    category: "Broker",
    badge: "Low Commissions",
    icon: "🏦",
    url: "https://tradovate.com",
    rating: 4,
    used_daily: false,
    tagline: "Low commission futures broker — excellent for MES and MNQ micro contracts.",
    description: "Tradovate offers some of the lowest commission rates for futures trading and has a clean browser-based platform that works well for discretionary trading. I used it extensively when building consistency on micro contracts (MES, MNQ) before scaling to full-size. The monthly subscription model makes sense once you hit a certain trade volume.",
    pros: [
        "Among the lowest commissions for futures",
        "Clean browser-based platform — works anywhere",
        "Good for micro contract trading (MES/MNQ)",
        "Monthly subscription can beat per-trade fees at volume",
        "Solid mobile app for monitoring positions"
    ],
    cons: [
        "Less feature-rich than NinjaTrader for execution",
        "Monthly subscription adds up if trade volume is low"
    ],
    affiliate: false,
  },
  {
    id: 8,
    name: "Finviz",
    category: "Market Overview",
    badge: "Free",
    icon: "🔔",
    url: "https://finviz.com",
    rating: 3,
    used_daily: true,
    tagline: "Pre-market heat map and sector scanning — 2-minute overview each morning.",
    description: "Finviz gives me a quick visual snapshot of the broad market each morning. The heat map shows which sectors and individual names are moving — useful context for understanding whether the ES move is broad-based or driven by a handful of mega-cap stocks. I spend about 2 minutes on Finviz as part of my pre-market routine, not more.",
    pros: [
        "Best heat map for quick market context",
        "Free with no account required",
        "Futures, sector, and individual stock overview",
        "Fast to load — useful for quick checks"
    ],
    cons: [
        "Limited depth — surface-level overview only",
        "Real-time data requires Elite subscription"
    ],
    affiliate: false,
  }
];
