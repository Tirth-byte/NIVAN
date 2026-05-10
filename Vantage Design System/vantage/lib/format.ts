export const formatUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

export const formatCompact = (n: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);

export const formatDuration = (days: number) => {
  if (days < 1) return `${Math.round(days * 24)}h`;
  if (days < 7) return `${days.toFixed(1)}d`;
  return `${Math.round(days / 7)}w`;
};
