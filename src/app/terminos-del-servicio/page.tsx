import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos del servicio | Wolf Daniel's & Maktub",
  description:
    "Términos del servicio del sitio web y del canal de WhatsApp de Wolf Daniel's & Maktub, así como condiciones de compra al mayoreo.",
};

export default function TerminosDelServicio() {
  return (
    <div className="flex flex-1 flex-col bg-brand-black">
      <Header />

      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-3xl text-brand-cream/80">
          <h1 className="text-3xl text-brand-cream sm:text-4xl">
            Términos del servicio
          </h1>
          <p className="mt-2 text-sm text-brand-cream/50">
            Última actualización: 13 de junio de 2026
          </p>

          <section className="mt-10 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              1. Aceptación de los términos
            </h2>
            <p>
              Al usar este sitio web y/o contactarnos por WhatsApp para
              cotizar o realizar un pedido, aceptas estos términos del
              servicio, así como nuestra{" "}
              <a
                href="/politica-de-privacidad"
                className="text-brand-gold underline-offset-4 hover:underline"
              >
                Política de privacidad
              </a>
              .
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              2. Descripción del servicio
            </h2>
            <p>
              Este sitio web y nuestro canal de WhatsApp tienen como fin
              informar sobre los productos de Wolf Daniel&apos;s &amp; Maktub
              y facilitar el contacto para cotizaciones y pedidos al mayoreo.
              La atención inicial por WhatsApp puede ser realizada por un
              asistente automatizado; la confirmación final de cualquier
              pedido siempre la realiza un asesor humano. Puedes pedir hablar
              con una persona en cualquier momento de la conversación.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              3. Venta exclusiva al mayoreo
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
              4. Cotizaciones y disponibilidad
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
              5. Proceso de pedido
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
              6. Pagos y envíos
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
              7. Cambios, garantías y devoluciones
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
              8. Uso aceptable
            </h2>
            <p>
              Te comprometes a usar este sitio web y nuestro canal de WhatsApp
              de forma lícita, sin enviar contenido ofensivo, fraudulento o
              que infrinja derechos de terceros, y a proporcionar información
              veraz al solicitar cotizaciones o realizar pedidos.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              9. Propiedad intelectual
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
              10. Limitación de responsabilidad
            </h2>
            <p>
              Hacemos nuestro mejor esfuerzo para que la información de este
              sitio y de nuestro canal de WhatsApp sea precisa, pero no nos
              responsabilizamos por errores tipográficos, cambios de precio o
              de inventario no reflejados a tiempo. La cotización vigente es
              siempre la confirmada por un asesor.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              11. Modificaciones a estos términos
            </h2>
            <p>
              Podemos actualizar estos términos del servicio en cualquier
              momento. Cualquier cambio será publicado en esta misma página
              con su fecha de actualización.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              12. Legislación aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes vigentes en México.
              Cualquier controversia será resuelta conforme a la legislación
              y jurisdicción aplicables en territorio mexicano.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              13. Contacto
            </h2>
            <p>
              Si tienes dudas sobre estos términos, escríbenos por WhatsApp o
              a{" "}
              <a
                href="mailto:wolf.daniels22@gmail.com"
                className="text-brand-gold underline-offset-4 hover:underline"
              >
                wolf.daniels22@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
