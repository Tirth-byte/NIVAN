export type ServiceType = "boosting" | "coaching" | "placements" | "duo" | "custom";

export interface OrderState {
  serviceType: ServiceType;
  config: {
    currentRank: string;
    desiredRank: string;
    region: string;
    queueType: string;
    addOns: string[];
  };
  preferences: {
    loginMethod: "credentials" | "riot-sign-on";
    isPrivate: boolean;
    useVpn: boolean;
    vpnRegion?: string;
    playPreference: "solo" | "duo";
  };
  step: number;
}

export const RANKS = [
  "Iron", "Bronze", "Silver", "Gold", "Platinum", "Emerald", "Diamond", "Master", "Grandmaster", "Challenger"
] as const;

export const REGIONS = [
  "North America", "Europe West", "Europe Nordic & East", "Korea", "Oceania", "Brazil", "Japan"
] as const;

export const SERVICES = [
  {
    id: "boosting",
    title: "Rank Boosting",
    description: "Secure, professional rank progression by elite players.",
    priceLabel: "from $12.00",
  },
  {
    id: "coaching",
    title: "1-on-1 Coaching",
    description: "Live sessions with professional analysts and coaches.",
    priceLabel: "from $45.00/hr",
  },
  {
    id: "duo",
    title: "Duo Queue",
    description: "Play alongside a professional to improve your game.",
    priceLabel: "from $15.00/match",
  },
  {
    id: "placements",
    title: "Placement Matches",
    description: "Guarantee a strong start to your competitive season.",
    priceLabel: "from $25.00",
  },
] as const;
