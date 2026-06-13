"use client";

import { useActionState } from "react";
import { actualizarCatalogoAction } from "@/app/crm/actions";

export default function CatalogoForm() {
  const [state, formAction, pending] = useActionState(
    actualizarCatalogoAction,
    undefined
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-brand-gray2 p-6"
    >
      <label className="flex flex-col gap-1 text-sm text-brand-cream/80">
        Nuevo link del catálogo
        <input
          name="link"
          type="url"
          required
          placeholder="https://..."
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
        className="self-start rounded-full bg-brand-gold px-6 py-2 font-heading text-brand-black transition-opacity disabled:opacity-60"
      >
        {pending ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
