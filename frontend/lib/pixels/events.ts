"use client";

type AnyObj = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (e: string, p?: AnyObj) => void; page: () => void };
    snaptr?: (...args: unknown[]) => void;
  }
}

function eventId(): string {
  return `nl_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

const API = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function trackEvent(name: string, data: AnyObj = {}) {
  const id = eventId();
  const payload = { ...data, event_id: id };

  try {
    if (typeof window !== "undefined") {
      window.fbq?.("track", name, payload, { eventID: id });
      window.ttq?.track(name, payload);
      window.snaptr?.("track", name, payload);
    }
  } catch {
    /* pixel non ancora caricato */
  }

  // CAPI server-side (deduplicato con lo stesso event_id)
  if (API) {
    try {
      await fetch(`${API}/api/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: name, event_id: id, data }),
        keepalive: true,
      });
    } catch {
      /* best effort */
    }
  }
}

export const Pixels = {
  viewContent: (p: AnyObj) => trackEvent("ViewContent", p),
  addToCart: (p: AnyObj) => trackEvent("AddToCart", p),
  initiateCheckout: (p: AnyObj) => trackEvent("InitiateCheckout", p),
  purchase: (p: AnyObj) => trackEvent("Purchase", p),
};
