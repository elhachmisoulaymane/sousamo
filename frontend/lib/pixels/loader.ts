"use client";

const META = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const SNAP = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID;

let loaded = false;

export function loadPixels() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  // Caricamento differito per non penalizzare le performance.
  if (META) {
    /* eslint-disable */
    (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode!.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq?.("init", META);
    window.fbq?.("track", "PageView");
    /* eslint-enable */
  }

  if (TIKTOK) {
    /* eslint-disable */
    (function (w: any, d, t) {
      w.TiktokAnalyticsObject = t;
      const ttq: any = (w[t] = w[t] || []);
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
      ttq.setAndDefer = function (e: any, n: any) {
        e[n] = function () {
          e.push([n].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.load = function (e: any) {
        const u = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = u;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        const o = d.createElement("script");
        o.type = "text/javascript";
        o.async = !0;
        o.src = u + "?sdkid=" + e + "&lib=" + t;
        const a = d.getElementsByTagName("script")[0];
        a.parentNode!.insertBefore(o, a);
      };
      ttq.load(TIKTOK);
      ttq.page();
    })(window, document, "ttq");
    /* eslint-enable */
  }

  if (SNAP) {
    /* eslint-disable */
    (function (e: any, t, n) {
      if (e.snaptr) return;
      const a: any = (e.snaptr = function () {
        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
      });
      a.queue = [];
      const s = "script";
      const r = t.createElement(s);
      r.async = !0;
      r.src = n;
      const u = t.getElementsByTagName(s)[0];
      u.parentNode!.insertBefore(r, u);
    })(window, document, "https://sc-static.net/scevent.min.js");
    window.snaptr?.("init", SNAP);
    window.snaptr?.("track", "PAGE_VIEW");
    /* eslint-enable */
  }
}
