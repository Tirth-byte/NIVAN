export type Tier = { name: string; short: string; color: string };

export const TIERS: Tier[] = [
  { name: "Iron",        short: "I",  color: "#7A7E89" },
  { name: "Bronze",      short: "B",  color: "#A57250" },
  { name: "Silver",      short: "S",  color: "#B6BCC7" },
  { name: "Gold",        short: "G",  color: "#E0B872" },
  { name: "Platinum",    short: "P",  color: "#36E2D2" },
  { name: "Emerald",     short: "E",  color: "#36D399" },
  { name: "Diamond",     short: "D",  color: "#7C5CFF" },
  { name: "Master",      short: "M",  color: "#C9BCFF" },
  { name: "Grandmaster", short: "GM", color: "#FF5C7C" },
  { name: "Challenger",  short: "C",  color: "#FFD089" },
];

export const DIVISIONS = ["IV", "III", "II", "I"] as const;

export const GAMES = [
  { slug: "league-of-legends", name: "League of Legends" },
  { slug: "valorant",          name: "Valorant" },
  { slug: "apex-legends",      name: "Apex Legends" },
  { slug: "overwatch-2",       name: "Overwatch 2" },
  { slug: "rocket-league",     name: "Rocket League" },
  { slug: "cs2",               name: "CS2" },
] as const;

export type GameSlug = (typeof GAMES)[number]["slug"];
