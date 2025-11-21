export function trackEvent(name: string, data?: Record<string, any>) {
  if (typeof window === "undefined") return;
  // Lightweight placeholder analytics – replace with real provider later
  // eslint-disable-next-line no-console
  console.log("analytics", name, data ?? {});
}
