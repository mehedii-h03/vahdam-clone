import type { OrganizationSchemaInput, ProductSchemaInput } from "@/types/seo";

// No default data or page integration: nothing is emitted until supplied.
export function organizationSchema(data: OrganizationSchemaInput) {
  return { ...data, "@context": "https://schema.org", "@type": "Organization" } as const;
}

export function productSchema(data: ProductSchemaInput) {
  return { ...data, "@context": "https://schema.org", "@type": "Product" } as const;
}

export type SupportedSchema =
  | ReturnType<typeof organizationSchema>
  | ReturnType<typeof productSchema>;

// Escape HTML delimiters before future application/ld+json script embedding.
export function serializeJsonLd(data: SupportedSchema): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
