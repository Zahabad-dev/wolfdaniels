import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { CRM_TABLES } from "@/lib/db";
import { logoutAction } from "@/app/crm/actions";

export default async function CrmDashboard() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-brand-black px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/wolf-logo.png"
              alt="Wolf Daniel's"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl text-brand-cream">CRM</h1>
              <p className="text-sm text-brand-cream/60">
                {session?.user?.name ?? session?.user?.email}
              </p>
            </div>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-brand-cream/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Cerrar sesión
            </button>
          </form>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(CRM_TABLES).map(([slug, info]) => (
            <Link
              key={slug}
              href={`/crm/${slug}`}
              className="rounded-2xl border border-white/10 bg-brand-gray2 p-6 transition-colors hover:border-brand-gold"
            >
              <h2 className="font-heading text-lg text-brand-gold">
                {info.label}
              </h2>
              <p className="mt-1 text-sm text-brand-cream/60">
                Ver registros de {info.table}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
