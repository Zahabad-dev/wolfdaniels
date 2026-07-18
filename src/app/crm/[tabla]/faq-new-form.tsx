"use client";

import { useActionState } from "react";
import { crearFaqAction } from "@/app/crm/actions";

const AREAS = ["COT", "PED", "PAG", "ENV", "DIS", "QUE"];

export default function FaqNewForm() {
  const [state, dispatch, pending] = useActionState(crearFaqAction, undefined);
  return (
    <form
      action={dispatch}
      className="flex flex-col gap-3 rounded-2xl border border-brand-gold/40 bg-brand-gold/5 p-5"
    >
      <p className="text-sm font-heading text-brand-gold">+ Nueva pregunta</p>

      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-brand-cream/60">Área</label>
          <select
            name="area_codigo"
            required
            className="rounded-lg border border-white/10 bg-brand-gray2 px-3 py-2 text-sm text-brand-cream focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            <option value="">— elegir —</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-brand-cream/60">Pregunta</label>
        <input
          name="pregunta"
          required
          placeholder="¿Cuál es el precio por pieza?"
          className="rounded-lg border border-white/10 bg-brand-gray2 px-3 py-2 text-sm text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-gold"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-brand-cream/60">Respuesta</label>
        <textarea
          name="respuesta"
          required
          rows={3}
          placeholder="Manejamos tres opciones: $168, $180 y $200 MXN por pieza..."
          className="resize-y rounded-lg border border-white/10 bg-brand-gray2 px-3 py-2 text-sm text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-gold"
        />
      </div>

      {state?.error && (
        <p className="text-xs text-red-400">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-xs text-green-400">{state.success}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-lg bg-brand-gold px-4 py-2 text-sm font-heading text-brand-black transition-opacity disabled:opacity-50"
      >
        {pending ? "Guardando..." : "Agregar pregunta"}
      </button>
    </form>
  );
}
