"use client";

import { eliminarSolicitudAction } from "@/app/crm/actions";

export default function EliminarButton({
  numeroWhatsapp,
}: {
  numeroWhatsapp: string;
}) {
  return (
    <form
      action={eliminarSolicitudAction}
      onSubmit={(e) => {
        if (!confirm(`¿Eliminar el registro de ${numeroWhatsapp}? Esta acción no se puede deshacer.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="numero_whatsapp" value={numeroWhatsapp} />
      <button
        type="submit"
        className="rounded-lg border border-red-500/40 px-2 py-1 text-sm text-red-400 transition-colors hover:bg-red-500/10"
      >
        Eliminar
      </button>
    </form>
  );
}
