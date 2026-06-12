import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-brand-gray">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <h3 className="font-heading text-lg text-brand-gold">
            Wolf Daniel&apos;s &amp; Maktub
          </h3>
          <p className="mt-2 max-w-sm text-sm text-brand-cream/70">
            Fabricantes de camisas vaqueras. Venta exclusiva al mayoreo,
            pedido mínimo 30 piezas.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-brand-cream/70">
          <span className="font-heading text-brand-cream">Contacto</span>
          <a
            href={whatsappLink("Hola, quiero información sobre los modelos y precios al mayoreo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-green"
          >
            WhatsApp
          </a>
          <Link href="/crm" className="transition-colors hover:text-brand-gold">
            Acceso clientes
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-center text-xs text-brand-cream/40">
        © {new Date().getFullYear()} Wolf Daniel&apos;s &amp; Maktub. Todos los derechos reservados.
      </div>
    </footer>
  );
}
