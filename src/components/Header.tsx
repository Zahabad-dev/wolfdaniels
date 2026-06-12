import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/wolf-logo.png"
            alt="Wolf Daniel's"
            width={44}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="font-heading text-xl leading-none text-brand-cream">
            Wolf Daniel&apos;s
            <span className="block text-xs tracking-[0.3em] text-brand-gold">
              &amp; Maktub
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-heading text-sm text-brand-cream/80 sm:flex">
          <a href="#marcas" className="transition-colors hover:text-brand-gold">
            Marcas
          </a>
          <a href="#mayoreo" className="transition-colors hover:text-brand-gold">
            Mayoreo
          </a>
          <a href="#contacto" className="transition-colors hover:text-brand-gold">
            Contacto
          </a>
          <Link
            href="/crm"
            className="rounded-full border border-brand-gold/60 px-4 py-1.5 text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            Acceso clientes
          </Link>
        </nav>
      </div>
    </header>
  );
}
