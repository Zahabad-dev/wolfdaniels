"use client";

import { useActionState } from "react";
import Image from "next/image";
import { loginAction } from "@/app/crm/actions";

export default function LoginPage() {
  const [error, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-brand-black px-6">
      <Image
        src="/brand/wolf-logo.png"
        alt="Wolf Daniel's"
        width={64}
        height={64}
        className="h-16 w-auto object-contain"
      />

      <form
        action={formAction}
        className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-brand-gray2 p-8"
      >
        <h1 className="text-center text-2xl text-brand-cream">
          Acceso CRM
        </h1>

        <label className="flex flex-col gap-1 text-sm text-brand-cream/80">
          Usuario
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            className="rounded-lg border border-white/10 bg-brand-black px-3 py-2 text-brand-cream outline-none focus:border-brand-gold"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-brand-cream/80">
          Contraseña
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="rounded-lg border border-white/10 bg-brand-black px-3 py-2 text-brand-cream outline-none focus:border-brand-gold"
          />
        </label>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 rounded-full bg-brand-gold px-6 py-2 font-heading text-brand-black transition-opacity disabled:opacity-60"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
