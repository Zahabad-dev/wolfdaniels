"use client";

import { actualizarBotActivoAction } from "@/app/crm/actions";

export default function BotToggle({
  numeroWhatsapp,
  activo,
}: {
  numeroWhatsapp: string;
  activo: boolean;
}) {
  return (
    <form action={actualizarBotActivoAction}>
      <input type="hidden" name="numero_whatsapp" value={numeroWhatsapp} />
      <label className="flex items-center gap-2 text-sm text-brand-cream/80">
        <input
          type="checkbox"
          name="bot_activo"
          defaultChecked={activo}
          onChange={(e) => e.currentTarget.form?.requestSubmit()}
          className="h-4 w-4 accent-brand-gold"
        />
        {activo ? "Bot activo" : "Bot desactivado"}
      </label>
    </form>
  );
}
