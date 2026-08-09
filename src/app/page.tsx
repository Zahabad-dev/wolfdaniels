import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import GalleryShowcase from "@/components/GalleryShowcase";
import Sucursales from "@/components/Sucursales";
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
    text: "Pide nuestro catálogo, se actualiza cada semana con modelos y precios vigentes.",
  },
  {
    n: "02",
    title: "Cotización y disponibilidad",
    text: "Te confirmamos precio por pieza, tallas y tiempos de entrega.",
  },
  {
    n: "03",
    title: "Confirmas tu pedido",
    text: "Pedido mínimo de 30 piezas. Coordinamos pago y envío o recolección en sucursal.",
  },
];

export default function Home() {
  const heroWhatsapp = whatsappLink(
    "Hola, me interesa cotizar camisas vaqueras al mayoreo (Wolf Daniel's / Maktub)."
  );
  const catalogoWhatsapp = whatsappLink(
    "Hola, quiero el catálogo de camisas al mayoreo (mínimo 30 piezas). Sé que se actualiza cada semana, ¿me lo pueden compartir?"
  );

  return (
    <div className="flex flex-1 flex-col bg-brand-black">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero con parallax */}
        <ParallaxHero>
          <Image
            src="/brand/maktub-logo.png"
            alt="Maktub"
            width={160}
            height={160}
            className="h-24 w-auto object-contain drop-shadow-lg sm:h-28"
            priority
          />
          <h1 className="max-w-3xl text-4xl text-brand-cream drop-shadow-lg sm:text-6xl">
            Camisas vaqueras{" "}
            <span className="text-brand-gold">de fábrica a tu negocio</span>
          </h1>
          <p className="max-w-xl text-base text-brand-cream/80 drop-shadow sm:text-lg">
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
              className="rounded-full border border-brand-cream/40 px-8 py-3 font-heading text-brand-cream backdrop-blur-sm transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Conoce nuestras marcas
            </a>
          </div>
        </ParallaxHero>

        {/* Galería artística */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
                Hechas para el día a día
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-brand-cream/70">
                Telas técnicas, acabados resistentes y detalle en cada pieza.
                Así se ven nuestras camisas puestas.
              </p>
            </ScrollReveal>
            <div className="mt-12">
              <GalleryShowcase />
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 sm:items-center">
            <ScrollReveal>
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
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-brand-gray2 p-5">
                    <h3 className="font-heading text-base text-brand-gold">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-cream/70">{f.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section id="marcas" className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
                Nuestras marcas
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <ScrollReveal className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-gray p-8 text-center">
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
              </ScrollReveal>
              <ScrollReveal delay={100} className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-gray p-8 text-center">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Promo editorial */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-2">
            <ScrollReveal as="div" className="relative order-2 min-h-[320px] sm:order-1">
              <Image
                src="/gallery/promo-lluvia.webp"
                alt="Camisa Wolf Daniel's repelente al agua"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal
              delay={120}
              className="order-1 flex flex-col justify-center gap-4 bg-brand-gray2 px-8 py-16 sm:order-2"
            >
              <span className="font-heading text-sm tracking-[0.3em] text-brand-gold">
                Tecnología DWR
              </span>
              <h2 className="text-3xl text-brand-cream sm:text-4xl">
                Que la lluvia no te detenga
              </h2>
              <p className="text-brand-cream/70">
                Camisas transpirables, 100% repelentes al agua, pensadas para
                trabajar y moverse todo el día sin preocuparte por el clima.
              </p>
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-fit rounded-full bg-brand-gold px-6 py-2.5 font-heading text-sm text-brand-black transition-transform hover:scale-105"
              >
                Pregunta por este modelo
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Cómo comprar / Mayoreo */}
        <section id="mayoreo" className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
                Cómo comprar al mayoreo
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <ScrollReveal key={step.n} delay={i * 100} className="text-center sm:text-left">
                  <span className="font-heading text-4xl text-brand-gold">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-heading text-lg text-brand-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-cream/70">
                    {step.text}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200} className="mt-12 rounded-2xl border border-brand-gold/30 bg-brand-gray2 px-8 py-10 text-center">
              <h3 className="font-heading text-xl text-brand-gold">
                Catálogo actualizado cada semana
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-brand-cream/70">
                Escríbenos por WhatsApp y pide el catálogo vigente: modelos,
                tallas y precios de mayoreo desde 30 piezas.
              </p>
              <a
                href={catalogoWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-brand-green px-8 py-3 font-heading text-brand-black transition-transform hover:scale-105"
              >
                Pedir catálogo por WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Sucursales */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-center text-3xl text-brand-cream sm:text-4xl">
                Nuestras sucursales
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-brand-cream/70">
                Visítanos o confirma tu pedido al{" "}
                <a
                  href={whatsappLink("Hola, quiero confirmar un pedido al mayoreo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold transition-colors hover:text-brand-cream"
                >
                  771 214 3401
                </a>
              </p>
            </ScrollReveal>
            <div className="mt-12">
              <Sucursales />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-6 py-20">
          <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-brand-gold/30 bg-brand-gray2 px-8 py-16 text-center">
            <h2 className="text-3xl text-brand-cream sm:text-4xl">
              ¿Listo para surtir tu negocio?
            </h2>
            <p className="max-w-xl text-brand-cream/70">
              Escríbenos por WhatsApp y te enviamos catálogo, modelos
              disponibles y precios por mayoreo.
            </p>
            <a
              href={catalogoWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-green px-8 py-3 font-heading text-brand-black transition-transform hover:scale-105"
            >
              Escríbenos por WhatsApp
            </a>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
