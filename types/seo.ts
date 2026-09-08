// Deliberately limited schema inputs. Add verified fields only when needed.
export type OrganizationSchemaInput = {
  name: string;
  url: string;
  logo?: string;
};

export type ProductSchemaInput = {
  name: string;
  description?: string;
  image?: string[];
  sku?: string;
  url?: string;
};
