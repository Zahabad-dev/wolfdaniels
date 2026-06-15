"use client";

import { useActionState } from "react";
import { actualizarFaqAction } from "@/app/crm/actions";

export default function FaqRowForm({
  id,
  area,
  pregunta,
  respuesta,
  activo,
}: {
  id: string;
  area: string;
  pregunta: string;
  respuesta: string;
  activo: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    actualizarFaqAction,
    undefined
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-brand-gray2 p-4"
    >
      <input type="hidden" name="id" value={id} />

      <div className="flex items-center justify-between">
        <span className="font-heading text-xs uppercase tracking-wide text-brand-gold">
          Área: {area}
        </span>
        <label className="flex items-center gap-2 text-sm text-brand-cream/80">
          <input
            type="checkbox"
            name="activo"
            defaultChecked={activo}
            className="h-4 w-4 accent-brand-gold"
          />
          Activa
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm text-brand-cream/80">
        Pregunta
        <textarea
          name="pregunta"
          defaultValue={pregunta}
          rows={2}
          required
          className="rounded-lg border border-white/10 bg-brand-black px-3 py-2 text-brand-cream outline-none focus:border-brand-gold"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-brand-cream/80">
        Respuesta
        <textarea
          name="respuesta"
          defaultValue={respuesta}
          rows={3}
          required
          className="rounded-lg border border-white/10 bg-brand-black px-3 py-2 text-brand-cream outline-none focus:border-brand-gold"
        />
      </label>

      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
      {state?.success && (
        <p className="text-sm text-green-400">{state.success}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-brand-gold px-6 py-2 text-sm font-heading text-brand-black transition-opacity disabled:opacity-60"
      >
        {pending ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
