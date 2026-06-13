import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Condiciones de uso y compra | Wolf Daniel's & Maktub",
  description:
    "Condiciones de uso del sitio web y de compra al mayoreo de Wolf Daniel's & Maktub.",
};

export default function Condiciones() {
  return (
    <div className="flex flex-1 flex-col bg-brand-black">
      <Header />

      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-3xl text-brand-cream/80">
          <h1 className="text-3xl text-brand-cream sm:text-4xl">
            Condiciones de uso y compra
          </h1>
          <p className="mt-2 text-sm text-brand-cream/50">
            Última actualización: 13 de junio de 2026
          </p>

          <section className="mt-10 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              1. Aceptación de las condiciones
            </h2>
            <p>
              Al usar este sitio web y/o contactarnos por WhatsApp para
              cotizar o realizar un pedido, aceptas estas condiciones de uso y
              compra, así como nuestras{" "}
              <a
                href="/politicas-de-uso"
                className="text-brand-gold underline-offset-4 hover:underline"
              >
                Políticas de uso y privacidad
              </a>
              .
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              2. Venta exclusiva al mayoreo
            </h2>
            <p>
              Wolf Daniel&apos;s &amp; Maktub son marcas de fabricación propia
              de venta exclusiva al mayoreo. El pedido mínimo es de{" "}
              <strong className="text-brand-cream">30 piezas</strong> por
              compra, pudiendo combinarse modelos, tallas y colores según
              disponibilidad.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              3. Cotizaciones y disponibilidad
            </h2>
            <p>
              Los precios, modelos y existencias mostrados en este sitio o
              compartidos por WhatsApp son de carácter informativo y están
              sujetos a cambios sin previo aviso, así como a disponibilidad de
              inventario al momento de confirmar el pedido. La cotización
              formal y disponibilidad real se confirma directamente con un
              asesor antes de cerrar el pedido.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              4. Proceso de pedido
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>El cliente solicita cotización por WhatsApp, indicando modelos, tallas y cantidades.</li>
              <li>Se confirma precio por pieza, disponibilidad y tiempos de entrega.</li>
              <li>El cliente confirma el pedido (mínimo 30 piezas) y se coordina la forma de pago.</li>
              <li>Una vez confirmado el pago, se coordina el envío o entrega del pedido.</li>
            </ul>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              5. Pagos y envíos
            </h2>
            <p>
              Las formas de pago aceptadas, costos de envío y tiempos de
              entrega se informan y acuerdan directamente con el asesor al
              momento de confirmar el pedido, ya que pueden variar según el
              destino, volumen y método de envío elegido.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              6. Cambios, garantías y devoluciones
            </h2>
            <p>
              Cualquier situación relacionada con cambios, garantía por
              defectos de fabricación o devoluciones se atiende caso por caso
              directamente con un asesor, dentro de los plazos y condiciones
              que se acuerden al momento del pedido.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              7. Uso del sitio web y atención automatizada
            </h2>
            <p>
              Este sitio web y nuestro canal de WhatsApp tienen como fin
              informar sobre nuestros productos y facilitar el contacto con
              Wolf Daniel&apos;s &amp; Maktub. La atención inicial por
              WhatsApp puede ser realizada por un asistente automatizado; la
              confirmación final de cualquier pedido siempre la realiza un
              asesor humano. Para más información sobre el manejo de tus
              datos, consulta nuestras{" "}
              <a
                href="/politicas-de-uso"
                className="text-brand-gold underline-offset-4 hover:underline"
              >
                Políticas de uso y privacidad
              </a>
              .
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              8. Propiedad intelectual
            </h2>
            <p>
              Las marcas Wolf Daniel&apos;s y Maktub, los logotipos, imágenes
              y contenido de este sitio son propiedad de sus titulares y no
              pueden ser usados, copiados o distribuidos sin autorización
              previa.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              9. Legislación aplicable
            </h2>
            <p>
              Estas condiciones se rigen por las leyes vigentes en México.
              Cualquier controversia será resuelta conforme a la legislación
              y jurisdicción aplicables en territorio mexicano.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
