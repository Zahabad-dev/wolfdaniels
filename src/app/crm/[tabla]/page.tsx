import Link from "next/link";
import { notFound } from "next/navigation";
import { CRM_TABLES, CrmTableSlug, query } from "@/lib/db";
import PrioridadSelect from "./prioridad-select";
import EstadoSelect from "./estado-select";
import BotToggle from "./bot-toggle";
import EliminarButton from "./eliminar-button";

export const dynamic = "force-dynamic";

const ROW_LIMIT = 100;

function isCrmTableSlug(value: string): value is CrmTableSlug {
  return value in CRM_TABLES;
}

export default async function CrmTablePage({
  params,
}: {
  params: Promise<{ tabla: string }>;
}) {
  const { tabla } = await params;

  if (!isCrmTableSlug(tabla)) {
    notFound();
  }

  const info = CRM_TABLES[tabla];
  const result = await query(
    `SELECT * FROM ${info.table} ORDER BY 1 DESC LIMIT ${ROW_LIMIT}`
  );

  const columns = result.fields.map((f) => f.name);

  return (
    <div className="min-h-screen bg-brand-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="/crm"
              className="text-sm text-brand-cream/60 transition-colors hover:text-brand-gold"
            >
              ← Volver
            </Link>
            <h1 className="mt-1 text-2xl text-brand-cream">{info.label}</h1>
            <p className="text-sm text-brand-cream/50">
              {info.table} · últimos {ROW_LIMIT} registros
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-max text-left text-sm">
            <thead className="bg-brand-gray2 text-brand-gold">
              <tr>
                {columns.map((col) => (
                  <th key={col} className="whitespace-nowrap px-4 py-3 font-heading">
                    {col}
                  </th>
                ))}
                {tabla === "solicitudes" && (
                  <th className="whitespace-nowrap px-4 py-3 font-heading">
                    Acciones
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-white/5 text-brand-cream/80 odd:bg-white/[0.02]"
                >
                  {columns.map((col) => {
                    const typedRow = row as Record<string, unknown>;

                    if (tabla === "solicitudes" && col === "estado") {
                      return (
                        <td key={col} className="whitespace-nowrap px-4 py-2">
                          <EstadoSelect
                            numeroWhatsapp={String(typedRow.numero_whatsapp)}
                            value={String(typedRow.estado)}
                          />
                        </td>
                      );
                    }

                    if (tabla === "solicitudes" && col === "prioridad") {
                      return (
                        <td key={col} className="whitespace-nowrap px-4 py-2">
                          <PrioridadSelect
                            numeroWhatsapp={String(typedRow.numero_whatsapp)}
                            value={String(typedRow.prioridad)}
                          />
                        </td>
                      );
                    }

                    if (tabla === "solicitudes" && col === "bot_bloqueado") {
                      return (
                        <td key={col} className="whitespace-nowrap px-4 py-2">
                          <BotToggle
                            numeroWhatsapp={String(typedRow.numero_whatsapp)}
                            activo={!typedRow.bot_bloqueado}
                          />
                        </td>
                      );
                    }

                    return (
                      <td key={col} className="whitespace-nowrap px-4 py-2">
                        {formatCell(typedRow[col])}
                      </td>
                    );
                  })}
                  {tabla === "solicitudes" && (
                    <td className="whitespace-nowrap px-4 py-2">
                      <EliminarButton
                        numeroWhatsapp={String((row as Record<string, unknown>).numero_whatsapp)}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {result.rows.length === 0 && (
            <p className="px-4 py-6 text-center text-brand-cream/50">
              Sin registros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return "—";
  if (value instanceof Date) return value.toLocaleString("es-MX");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}
