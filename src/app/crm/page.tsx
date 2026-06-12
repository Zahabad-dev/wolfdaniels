import Image from "next/image";
import Link from "next/link";

export default function CrmPlaceholder() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-brand-black px-6 text-center">
      <Image
        src="/brand/wolf-logo.png"
        alt="Wolf Daniel's"
        width={64}
        height={64}
        className="h-16 w-auto object-contain"
      />
      <h1 className="text-3xl text-brand-cream sm:text-4xl">
        CRM de clientes
      </h1>
      <p className="max-w-md text-brand-cream/70">
        Próximamente: acceso con usuario y contraseña para consultar tus
        contactos, prospectos y solicitudes de mayoreo.
      </p>
      <Link
        href="/"
        className="rounded-full border border-brand-gold/60 px-6 py-2 font-heading text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
