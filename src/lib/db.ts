import { Pool } from "pg";

let pool: Pool | undefined;

export function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

export function query<T extends object = object>(text: string, params?: unknown[]) {
  return getPool().query<T>(text, params);
}

export const CRM_TABLES = {
  prospectos: {
    table: "prospectos_mayoreo",
    label: "Prospectos",
  },
  clientes: {
    table: "clientes_mayoreo",
    label: "Clientes mayoristas",
  },
  registrados: {
    table: "clientes_registrados",
    label: "Contactos registrados",
  },
  solicitudes: {
    table: "solicitudes_mayoreo",
    label: "Solicitudes",
  },
  faq: {
    table: "faq_mayoreo",
    label: "FAQ",
  },
  areas: {
    table: "areas_mayoreo",
    label: "Áreas",
  },
} as const;

export type CrmTableSlug = keyof typeof CRM_TABLES;
