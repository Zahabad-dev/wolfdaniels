"use client";

import { actualizarPrioridadAction } from "@/app/crm/actions";

const PRIORIDADES = ["BAJA", "MEDIA", "ALTA"] as const;

export default function PrioridadSelect({
  numeroWhatsapp,
  value,
}: {
  numeroWhatsapp: string;
  value: string;
}) {
  return (
    <form action={actualizarPrioridadAction}>
      <input type="hidden" name="numero_whatsapp" value={numeroWhatsapp} />
      <select
        name="prioridad"
        defaultValue={value}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="rounded-lg border border-white/10 bg-brand-black px-2 py-1 text-sm text-brand-cream outline-none focus:border-brand-gold"
      >
        {PRIORIDADES.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </form>
  );
}
