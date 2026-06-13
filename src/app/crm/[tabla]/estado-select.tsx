"use client";

import { actualizarEstadoAction } from "@/app/crm/actions";

const ESTADOS = ["Nuevo", "Escalado", "Atendido", "Cerrado"] as const;

export default function EstadoSelect({
  numeroWhatsapp,
  value,
}: {
  numeroWhatsapp: string;
  value: string;
}) {
  return (
    <form action={actualizarEstadoAction}>
      <input type="hidden" name="numero_whatsapp" value={numeroWhatsapp} />
      <select
        name="estado"
        defaultValue={value}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="rounded-lg border border-white/10 bg-brand-black px-2 py-1 text-sm text-brand-cream outline-none focus:border-brand-gold"
      >
        {ESTADOS.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </form>
  );
}
