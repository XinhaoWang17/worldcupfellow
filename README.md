# WorldCupFellow ⚽

A 2026 FIFA World Cup companion app for iPhone.

## Features

- **赛程 (Schedule)**: Browse all 104 matches. Grouped by date, filtered by stage or group A–L. Live scores update automatically.
- **积分榜 (Standings)**: Full group tables for all 12 groups with P/W/D/L/GF/GA/GD/Pts. Top 2 per group highlighted in gold.

## Tech Stack

- React Native + Expo (TypeScript)
- Expo Router (file-based navigation, bottom tabs)
- Automatic dark/light mode following iOS system setting
- 2026 FIFA World Cup official brand colors (FIFA navy + blue + gold)

## Data

Live data from [wc2026api.com](https://www.wc2026api.com). Full offline fallback with all 104 fixtures and 48-team groups embedded in the app.

## Running

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your iPhone.

## Building for iOS

```bash
npx eas build --platform ios
```

## Tournament

| | |
|--|--|
| Dates | June 11 – July 19, 2026 |
| Hosts | USA 🇺🇸 · Canada 🇨🇦 · Mexico 🇲🇽 |
| Teams | 48 · 12 groups |
| Matches | 104 |
| Venues | 16 stadiums |