import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Políticas de uso y privacidad | Wolf Daniel's & Maktub",
  description:
    "Política de uso, privacidad y manejo de datos personales de Wolf Daniel's & Maktub, incluyendo el flujo de atención por WhatsApp.",
};

export default function PoliticasDeUso() {
  return (
    <div className="flex flex-1 flex-col bg-brand-black">
      <Header />

      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-3xl text-brand-cream/80">
          <h1 className="text-3xl text-brand-cream sm:text-4xl">
            Políticas de uso y privacidad
          </h1>
          <p className="mt-2 text-sm text-brand-cream/50">
            Última actualización: 13 de junio de 2026
          </p>

          <section className="mt-10 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              1. Responsable del tratamiento de datos
            </h2>
            <p>
              Wolf Daniel&apos;s &amp; Maktub (en adelante, &quot;nosotros&quot;) es
              responsable del uso y protección de los datos personales que nos
              proporciones a través de nuestro sitio web, número de WhatsApp y
              demás canales de contacto, conforme a la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares y
              su normativa aplicable en México.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              2. Datos que recabamos
            </h2>
            <p>Cuando nos contactas, en especial por WhatsApp, podemos recabar:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Tu número de teléfono y nombre de contacto.</li>
              <li>
                El contenido de tus mensajes (texto, imágenes y archivos que
                envíes para cotizar, por ejemplo fotos de modelos, tallas y
                cantidades).
              </li>
              <li>
                Datos de envío y facturación que nos compartas para procesar
                un pedido (domicilio, datos de contacto adicionales, etc.).
              </li>
              <li>
                Información técnica básica de navegación en el sitio web
                (páginas visitadas, dispositivo, ubicación aproximada), con
                fines estadísticos.
              </li>
            </ul>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              3. Flujo de atención por WhatsApp
            </h2>
            <p>
              Nuestro número de WhatsApp opera a través de la plataforma de
              WhatsApp Business de Meta. Al escribirnos, tu mensaje puede ser
              atendido de dos formas:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong className="text-brand-cream">
                  Atención automatizada (bot):
                </strong>{" "}
                un asistente automatizado responde preguntas frecuentes,
                envía catálogo, información de precios, modelos disponibles y
                ayuda inicial para tu cotización, las 24 horas del día.
              </li>
              <li>
                <strong className="text-brand-cream">
                  Atención humana:
                </strong>{" "}
                cuando tu solicitud requiere seguimiento personalizado
                (cotización formal, pedidos especiales, dudas complejas o
                solicitud explícita de hablar con una persona), un asesor de
                Wolf Daniel&apos;s &amp; Maktub revisa la conversación y te
                atiende directamente. Puedes pedir hablar con un humano en
                cualquier momento.
              </li>
            </ul>
            <p>
              La información que envías por WhatsApp se almacena de forma
              segura en nuestros sistemas internos (base de datos y panel de
              administración de uso interno) con el único fin de dar
              seguimiento a tu solicitud, generar tu cotización, procesar tu
              pedido y mejorar nuestra atención. No utilizamos esta
              información para fines distintos a los aquí descritos.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              4. Finalidades del tratamiento
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Brindarte información sobre nuestros productos, catálogo y precios al mayoreo.</li>
              <li>Generar cotizaciones y dar seguimiento a tu pedido.</li>
              <li>Procesar pagos, envíos y entregas.</li>
              <li>Brindar soporte y atención a clientes.</li>
              <li>Enviarte avisos relacionados con tu pedido (por ejemplo, recordatorios de seguimiento).</li>
              <li>Mejorar nuestros productos, catálogo y procesos de atención.</li>
            </ul>
            <p>
              No vendemos, rentamos ni compartimos tus datos personales con
              terceros para fines de mercadotecnia ajenos a Wolf Daniel&apos;s
              &amp; Maktub.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              5. Transferencia de datos
            </h2>
            <p>
              Para operar nuestro canal de atención usamos la plataforma de
              WhatsApp Business de Meta (Meta Platforms, Inc.), que actúa
              como proveedor de mensajería conforme a sus propias políticas
              de privacidad. No transferimos tus datos a otros terceros,
              salvo cuando sea necesario para cumplir con la entrega de tu
              pedido (por ejemplo, paqueterías) o por requerimiento de alguna
              autoridad competente.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              6. Medidas de seguridad
            </h2>
            <p>
              Tus datos se almacenan en bases de datos protegidas con acceso
              restringido únicamente a personal autorizado de Wolf
              Daniel&apos;s &amp; Maktub, mediante usuarios y contraseñas
              individuales.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              7. Derechos ARCO
            </h2>
            <p>
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte
              (derechos ARCO) al uso de tus datos personales, así como a
              revocar el consentimiento que en su caso nos hayas otorgado:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong className="text-brand-cream">Acceso:</strong> conocer
                qué datos personales tenemos de ti y para qué los usamos.
              </li>
              <li>
                <strong className="text-brand-cream">Rectificación:</strong>{" "}
                solicitar la corrección de tus datos cuando sean inexactos o
                estén incompletos.
              </li>
              <li>
                <strong className="text-brand-cream">Cancelación:</strong>{" "}
                solicitar que eliminemos tus datos de nuestros registros
                cuando consideres que no son necesarios para las finalidades
                aquí descritas.
              </li>
              <li>
                <strong className="text-brand-cream">Oposición:</strong>{" "}
                oponerte al uso de tus datos para fines específicos.
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, puedes escribirnos
              por el mismo WhatsApp con el que nos contactaste o enviarnos un
              correo, indicando tu nombre, el derecho que deseas ejercer y los
              datos a los que se refiere tu solicitud. Daremos respuesta en un
              plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="font-heading text-xl text-brand-gold">
              8. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política de uso y privacidad para
              reflejar cambios en nuestros procesos o en la legislación
              aplicable. Cualquier cambio será publicado en esta misma página
              con su fecha de actualización.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
