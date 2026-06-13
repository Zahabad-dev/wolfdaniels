import Link from "next/link";
import CatalogoForm from "./catalogo-form";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

interface CatalogoRow {
  link: string;
  actualizado_en: string;
  actualizado_por: string | null;
}

export default async function CatalogoPage() {
  const { rows } = await query<CatalogoRow>(
    "SELECT link, actualizado_en, actualizado_por FROM catalogo_mayoreo WHERE id = 1"
  );
  const actual = rows[0];

  return (
    <div className="min-h-screen bg-brand-black px-6 py-10">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div>
          <Link
            href="/crm"
            className="text-sm text-brand-cream/60 transition-colors hover:text-brand-gold"
          >
            ← Volver
          </Link>
          <h1 className="mt-1 text-2xl text-brand-cream">Catálogo</h1>
          <p className="text-sm text-brand-cream/50">
            Este es el link que el bot envía cuando preguntan por el catálogo.
            Actualízalo cada vez que tengas una versión nueva.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-brand-gray2 p-6">
          <p className="text-sm text-brand-cream/60">Link actual</p>
          {actual?.link ? (
            <a
              href={actual.link}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block break-all text-brand-gold hover:underline"
            >
              {actual.link}
            </a>
          ) : (
            <p className="mt-1 text-brand-cream/40">Sin link configurado.</p>
          )}
          {actual?.actualizado_en && (
            <p className="mt-2 text-xs text-brand-cream/40">
              Última actualización:{" "}
              {new Date(actual.actualizado_en).toLocaleString("es-MX")}
              {actual.actualizado_por ? ` · ${actual.actualizado_por}` : ""}
            </p>
          )}
        </div>

        <CatalogoForm />
      </div>
    </div>
  );
}
