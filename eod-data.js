// eod-data.js — SireMammat EOD Reviews
// Generated: 2026-03-28T03:08:40.704Z

window.EOD_DATA = [
  {
    "num": 3,
    "date": "2025-03-22",
    "day": "Saturday",
    "instrument": "ES",
    "result": "WIN",
    "pts": 21.5,
    "trades": 2,
    "wins": 2,
    "losses": 0,
    "title": "Opening Drive + VWAP Reclaim — Clean Execution Day",
    "summary": "Caught the opening drive long on ES with full size, held through VWAP, scaled out at +10. Second trade faded the midday reversal back to VWAP cleanly. Stayed disciplined — closed when target hit.",
    "tags": [
      "ES",
      "Opening Drive",
      "VWAP Reclaim"
    ],
    "sessions": [
      {
        "time": "8:30–9:30 AM",
        "name": "Pre-Market Prep",
        "notes": "Marked prior day high/low, VWAP, identified trend day signals. VIX 18.2 — moderate. Bias: long.",
        "color": "blue"
      },
      {
        "time": "9:30–10:30 AM",
        "name": "Opening Drive",
        "notes": "Long entry on first 5-min candle retest. Entered with 2 MES. Scaled out at +10, trailed runner to +14.",
        "color": "green"
      },
      {
        "time": "11:00–1:30 PM",
        "name": "Midday",
        "notes": "Waited 45 mins. Saw VWAP rejection short setup. Entered 1 MES, clean +7.5 pts to prior low.",
        "color": "green"
      },
      {
        "time": "Closed early",
        "name": "Afternoon (skipped)",
        "notes": "Target hit. Closed at 1:45 PM per rule: up 20+ pts, day is done.",
        "color": "sub"
      }
    ],
    "trade_log": [
      {
        "setup": "Opening Drive Long",
        "direction": "Long",
        "entry": "5-min retest at 5843",
        "pts": 14,
        "result": "WIN"
      },
      {
        "setup": "VWAP Rejection Short",
        "direction": "Short",
        "entry": "VWAP fade at 5857",
        "pts": 7.5,
        "result": "WIN"
      }
    ],
    "strengths": [
      "Waited for confirmed signal — no premature entries",
      "Respected the \"day complete at 20 pts\" rule and closed early",
      "Stop placement was structure-based, not arbitrary",
      "Scaled out at the right level and let the runner work"
    ],
    "improvements": [
      "Position size on trade 2 could have been 2 contracts — setup quality was A+",
      "Midday wait was 45 mins — good, but could have identified the setup 10 mins earlier"
    ],
    "lessons": [
      "<strong>Patience before the open pays off.</strong> The 60 minutes of pre-market prep directly set up both trades. Without the level identification, the VWAP rejection trade would have been missed.",
      "<strong>Closing when the target is hit is a skill.</strong> Stopped at +21.5 with the session still open. The market moved another +15 pts in the afternoon — but that is irrelevant. The rule exists to protect gains from overtrading.",
      "<strong>Trade 2 size was conservative.</strong> When a setup is clearly A+ quality with structure confirmed, sizing up to full allocation is correct. Noted for next time."
    ],
    "id": 1774665143399
  },
  {
    "num": 2,
    "date": "2025-03-21",
    "day": "Friday",
    "instrument": "NQ",
    "result": "LOSS",
    "pts": -8,
    "trades": 3,
    "wins": 1,
    "losses": 2,
    "title": "Counter-Trend Mistake — Lesson on Waiting for Structure",
    "summary": "Took a counter-trend long on NQ during opening drive — clear mistake in hindsight. First candle was bearish, I entered against the flow. Second trade was better but couldn't recover the morning loss.",
    "tags": [
      "NQ",
      "Counter-Trend Error",
      "Kill Switch"
    ],
    "sessions": [
      {
        "time": "8:30–9:30 AM",
        "name": "Pre-Market Prep",
        "notes": "Marked levels. Economic calendar clean. NQ globex range: 22 pts. No clear bias — range day possible.",
        "color": "blue"
      },
      {
        "time": "9:30–10:00 AM",
        "name": "Opening Drive (error)",
        "notes": "First 5-min candle bearish and wide. Ignored signal — entered long against momentum. Stopped out -8 pts.",
        "color": "red"
      },
      {
        "time": "11:30 AM",
        "name": "Midday Recovery",
        "notes": "Waited for structure after the loss. Short setup appeared at VWAP rejection — taken. +5 pts partial recovery.",
        "color": "gold"
      },
      {
        "time": "Stopped",
        "name": "Mandatory Break",
        "notes": "Two losses — mandatory 60-min break rule. Did not return.",
        "color": "sub"
      }
    ],
    "trade_log": [
      {
        "setup": "Opening Drive Long (Error)",
        "direction": "Long",
        "entry": "Counter-trend entry NQ 20940",
        "pts": -8,
        "result": "LOSS"
      },
      {
        "setup": "VWAP Rejection Short",
        "direction": "Short",
        "entry": "VWAP fade NQ 20965",
        "pts": 5,
        "result": "WIN"
      },
      {
        "setup": "LVN Fade Short (overtrading)",
        "direction": "Short",
        "entry": "Chased after recovery",
        "pts": -5,
        "result": "LOSS"
      }
    ],
    "strengths": [
      "Respected the kill switch after trade 3 and stopped trading",
      "VWAP rejection short (trade 2) was a valid setup — good read",
      "Took the mandatory break after 2 losses in a row"
    ],
    "improvements": [
      "Trade 1: never enter long when the opening 5-min candle is a wide bear bar — this is a rule",
      "Trade 3 was revenge trading disguised as a setup — the recovery mindset led to a bad entry",
      "Should have stopped after trade 2 (up +5 net) instead of going for one more"
    ],
    "lessons": [
      "<strong>The first 5-min candle is the setup.</strong> A wide bearish first candle on NQ during the opening drive is a short signal — or a no-trade signal. It is never a long entry.",
      "<strong>Revenge trading is subtle.</strong> Trade 3 felt justified in the moment. Looking back, the motivation was recovering the morning loss, not executing a high-quality setup.",
      "<strong>Stopping after a partial recovery is correct.</strong> Being net -8 pts with a +5 recovery available means the day could have ended at -3. Instead, trade 3 made it -8."
    ],
    "id": 1774665143400
  },
  {
    "num": 1,
    "date": "2025-03-20",
    "day": "Thursday",
    "instrument": "ES",
    "result": "WIN",
    "pts": 17,
    "trades": 2,
    "wins": 2,
    "losses": 0,
    "title": "M2B Textbook — Two-Legged Pullback to EMA",
    "summary": "Strong uptrend from open. Waited for the two-legged pullback, entered on the B2 signal bar, and the trade ran immediately. Clean execution on the first documented EOD.",
    "tags": [
      "ES",
      "M2B",
      "EMA Pullback"
    ],
    "sessions": [
      {
        "time": "8:30–9:30 AM",
        "name": "Pre-Market Prep",
        "notes": "Strong overnight session. Globex range 38 pts — trend day signals present. Bias: long, buy every pullback.",
        "color": "blue"
      },
      {
        "time": "9:30–10:00 AM",
        "name": "Opening Drive",
        "notes": "Market gapped up and held above VWAP immediately. Waited for the first pullback — one-legged, not yet.",
        "color": "gold"
      },
      {
        "time": "10:45 AM",
        "name": "M2B Entry",
        "notes": "Two-legged pullback to EMA completed. B2 signal bar formed with bull close. Entered buy stop.",
        "color": "green"
      },
      {
        "time": "Closed early",
        "name": "Afternoon (skipped)",
        "notes": "Target +17 pts hit at 2:10 PM. Closed session per rules.",
        "color": "sub"
      }
    ],
    "trade_log": [
      {
        "setup": "M2B — EMA 2nd Entry Long",
        "direction": "Long",
        "entry": "Buy stop above B2 signal bar",
        "pts": 14,
        "result": "WIN"
      },
      {
        "setup": "VWAP Reclaim Long",
        "direction": "Long",
        "entry": "VWAP retest after consolidation",
        "pts": 3,
        "result": "WIN"
      }
    ],
    "strengths": [
      "Waited for two full legs on the pullback — no premature entry",
      "Signal bar quality was A+ — bull close, EMA touch, strong context",
      "Followed the plan exactly as written in the M2B playbook",
      "Closed at target without trying to squeeze extra points"
    ],
    "improvements": [
      "Could have entered with larger size — the M2B signal was maximum quality",
      "Trade 2 target was set too conservatively — only +3 when more was available"
    ],
    "lessons": [
      "<strong>Waiting is the hardest and most profitable skill.</strong> The M2B setup requires two legs. Most traders enter on the first leg. Waiting for leg two requires conviction and patience — but the probability is significantly higher.",
      "<strong>Signal bar quality determines position size.</strong> When the signal bar is A+ (bull close, touches EMA, with-trend), that is the time to use full position size.",
      "<strong>The first documented EOD sets the standard.</strong> Every session gets a review this thorough going forward. The discipline of logging forces clarity on what actually happened."
    ],
    "id": 1774665143401
  }
];
