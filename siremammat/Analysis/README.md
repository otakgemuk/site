# Analysis Page — Upload Workflow

## File Structure

```
/Analysis/
├── index.html               ← Landing page (auto-reads cards/index.json)
├── tradecard_editor.html    ← Enhanced editor with Manifest button
├── cards/
│   ├── index.json           ← Manifest of all sessions (auto-computed stats)
│   ├── 2025-03-10.html      ← Individual trade card files
│   ├── 2025-03-11.html
│   └── ...
```

## Daily Upload Workflow

### 1. Fill Out Your EOD Review
Open `tradecard_editor.html` in your browser. Fill in session info, upload your chart, add trades.

### 2. Save the Card
Click **⬇ Save Card** — this downloads `tradecard_YYYY-MM-DD.html`. Rename it to `YYYY-MM-DD.html` and upload to `/Analysis/cards/`.

### 3. Copy the Manifest Entry
Click **📋 Copy Manifest** — this copies a JSON snippet to your clipboard looking like:
```json
{
  "date": "2025-03-12",
  "title": "TREND FROM OPEN",
  "instrument": "MNQ Futures",
  "strategy": "TREND FROM OPEN",
  "trades": 3,
  "netPts": 848,
  "winRate": 100,
  "bias": "BEARISH OPEN, TRADING RANGE",
  "result": "WIN",
  "url": "cards/2025-03-12.html"
}
```

### 4. Update cards/index.json
- Download `cards/index.json` from Neocities
- Paste the new entry at the **top** of the array (or append — landing page sorts by date)
- Save and re-upload `cards/index.json`

### 5. Upload Both Files
Upload to Neocities:
- `/Analysis/cards/YYYY-MM-DD.html` (the card)
- `/Analysis/cards/index.json` (updated manifest)

Done. The landing page auto-computes all stats from the manifest.

## Tips
- Keep card filenames as `YYYY-MM-DD.html` — consistent and sortable
- The landing page filters by WIN/LOSS/MIXED and by bias tags (TREND, RANGE, BEARISH)
- Stats (net points, win rate, sessions, trades) are all computed live from index.json
- You can batch uploads weekly — just stack up the manifest entries
