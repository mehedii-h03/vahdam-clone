// Reserved example domain: replace when a real deployment origin is known.
export const site = {
  name: "Tea & Wellness Demo",
  description: "A frontend-only tea and wellness storefront demonstration.",
  url: new URL("https://example.com"),
} as const;

// Public implemented pages only. Internal /design-system is intentionally omitted.
export const staticRoutes = ["/", "/tea-shop"] as const;
