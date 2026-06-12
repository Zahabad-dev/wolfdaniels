import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/whatsapp";

const FEATURES = [
  {
    title: "Fabricación propia",
    text: "Producimos directamente nuestras camisas, sin intermediarios, lo que nos permite ofrecer precios reales de fábrica.",
  },
  {
    title: "Precios de mayorista",
    text: "Listas de precios pensadas para reventa, con pedido mínimo de 30 piezas por compra.",
  },
  {
    title: "Variedad de modelos",
    text: "Camisas vaqueras en distintos modelos, telas y acabados bajo las marcas Wolf Daniel's y Maktub.",
  },
  {
    title: "Atención personalizada",
    text: "Te asesoramos por WhatsApp para encontrar el modelo y la cantidad que mejor se ajuste a tu negocio.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos qué modelo te interesa o pide nuestro catálogo completo.",
  },
  {
    n: "02",
    title: "Cotización y disponibilidad",
    text: "Te confirmamos precio por pieza, tallas y tiempos de entrega.",
  },
  {
    n: "03",
    title: "Confirmas tu pedido",
    text: "Pedido mínimo de 30 piezas. Coordinamos pago y envío a tu negocio.",
  },
];

export default function Home() {
  const heroWhatsapp = whatsappLink(
    "Hola, me interesa cotizar camisas vaqueras al mayoreo (Wolf Daniel's / Maktub)."
  );

  return (
    <div className="flex flex-1 flex-col bg-brand-black">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 sm:py-32">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
            <Image
              src="/brand/maktub-logo.png"
              alt="Maktub"
              width={160}
              height={160}
              className="h-28 w-auto object-contain"
              priority
            />
            <h1 className="max-w-3xl text-4xl text-brand-cream sm:text-6xl">
              Camisas vaqueras{" "}
              <span className="text-brand-gold">de fábrica a tu negocio</span>
            </h1>
            <p className="max-w-xl text-base text-brand-cream/70 sm:text-lg">
              Fabricantes de camisas vaqueras de las marcas{" "}
              <strong className="text-brand-cream">Wolf Daniel&apos;s</strong>{" "}
              y <strong className="text-brand-cream">Maktub</strong>. Venta
              exclusiva al mayoreo, pedido mínimo de 30 piezas.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-gold px-8 py-3 font-heading text-brand-black transition-transform hover:scale-105"
              >
                Cotiza por WhatsApp
              </a>
              <a
                href="#marcas"
                className="rounded-full border border-brand-cream/30 px-8 py-3 font-heading text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Conoce nuestras marcas
              </a>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-3xl text-brand-cream sm:text-4xl">
                Somos fabricantes
              </h2>
              <p className="mt-4 text-brand-cream/70">
                En Wolf Daniel&apos;s &amp; Maktub fabricamos camisas
                vaqueras con atención al detalle, pensadas para tiendas,
                mayoristas y revendedores. Al comprar directo de fábrica
                obtienes mejores precios y disponibilidad constante de
                modelos.
              </p>
              <p className="mt-4 text-brand-cream/70">
                Trabajamos exclusivamente con pedidos al mayoreo, con un
                mínimo de <strong className="text-brand-gold">30 piezas</strong>{" "}
                por compra.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-brand-gray2 p-5"
                >
                  <h3 className="font-heading text-base text-brand-gold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-cream/70">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section id="marcas" className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
              Nuestras marcas
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-gray p-8 text-center">
                <Image
                  src="/brand/wolf-logo.png"
                  alt="Wolf Daniel's"
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="font-heading text-xl text-brand-gold">
                  Wolf Daniel&apos;s
                </h3>
                <p className="text-sm text-brand-cream/70">
                  Camisas vaqueras de estilo clásico, pensadas para el uso
                  diario y la reventa en tiendas de ropa vaquera y western.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-gray p-8 text-center">
                <Image
                  src="/brand/maktub-logo.png"
                  alt="Maktub"
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="font-heading text-xl text-brand-gold">
                  Maktub
                </h3>
                <p className="text-sm text-brand-cream/70">
                  Modelos con diseños propios y acabados diferenciados, para
                  mayoristas que buscan ampliar su catálogo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo comprar / Mayoreo */}
        <section id="mayoreo" className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
              Cómo comprar al mayoreo
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n} className="text-center sm:text-left">
                  <span className="font-heading text-4xl text-brand-gold">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-heading text-lg text-brand-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-cream/70">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-brand-gold/30 bg-brand-gray2 px-8 py-16 text-center">
            <h2 className="text-3xl text-brand-cream sm:text-4xl">
              ¿Listo para surtir tu negocio?
            </h2>
            <p className="max-w-xl text-brand-cream/70">
              Escríbenos por WhatsApp y te enviamos catálogo, modelos
              disponibles y precios por mayoreo.
            </p>
            <a
              href={whatsappLink(
                "Hola, quiero información sobre los modelos y precios al mayoreo."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-green px-8 py-3 font-heading text-brand-black transition-transform hover:scale-105"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
