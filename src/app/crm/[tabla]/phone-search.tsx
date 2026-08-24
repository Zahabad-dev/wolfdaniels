"use client";

export default function PhoneSearch({ defaultValue }: { defaultValue: string }) {
  return (
    <form className="flex gap-2" action="">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Buscar por número de WhatsApp (ej. 6142717281)"
        className="w-full max-w-sm rounded-lg border border-white/10 bg-brand-gray2 px-3 py-2 text-sm text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-gold"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-gold px-4 py-2 text-sm font-heading text-brand-black transition-opacity hover:opacity-90"
      >
        Buscar
      </button>
      {defaultValue && (
        <a
          href="?"
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-brand-cream/70 transition-colors hover:text-brand-gold"
        >
          Limpiar
        </a>
      )}
    </form>
  );
}
