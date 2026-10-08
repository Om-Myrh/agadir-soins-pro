const measurementId = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"];

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function initAnalytics() {
  if (!measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("set", "developer_id.dZjgwMW", true);
  gtag("js", new Date());
  gtag("config", measurementId);
}
