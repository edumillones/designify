import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-babyblue">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue/10 to-babyblue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-midnightblue">Términos y Condiciones</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Por favor, lea atentamente los siguientes términos y condiciones que rigen el uso de nuestros servicios.
          </p>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-midnightblue mb-6">1. Aceptación de los Términos</h2>
          <p className="text-black/60 mb-6">
            Al utilizar los servicios de Designify, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">2. Descripción del Servicio</h2>
          <p className="text-black/60 mb-6">
            Designify proporciona servicios de diseño web y desarrollo de aplicaciones. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier parte de nuestros servicios en cualquier momento.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">3. Propiedad Intelectual</h2>
          <p className="text-black/60 mb-6">
            Todo el contenido proporcionado por Designify, incluyendo pero no limitado a diseños, código, imágenes y texto, está protegido por derechos de autor y otras leyes de propiedad intelectual. El cliente retiene la propiedad de su contenido original.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">4. Responsabilidades del Cliente</h2>
          <p className="text-black/60 mb-6">
            El cliente es responsable de proporcionar contenido preciso y legal para su proyecto. Designify no será responsable por cualquier contenido proporcionado por el cliente que infrinja derechos de terceros.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">5. Pagos y Reembolsos</h2>
          <p className="text-black/60 mb-6">
            Los pagos deben realizarse según lo acordado en el contrato de servicio. No se ofrecen reembolsos por servicios ya prestados o trabajos ya realizados.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">6. Limitación de Responsabilidad</h2>
          <p className="text-black/60 mb-6">
            Designify no será responsable por daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">7. Ley Aplicable</h2>
          <p className="text-black/60 mb-6">
            Estos términos se rigen por las leyes de Perú. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Lima, Perú.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">8. Modificaciones a los Términos</h2>
          <p className="text-black/60 mb-6">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnightblue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes alguna pregunta sobre nuestros términos?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Nuestro equipo está aquí para ayudarte. No dudes en contactarnos.
          </p>
          <a href="/contacto">
          <Button size="lg" variant="secondary" className="bg-white text-midnightblue hover:bg-white/90">
            Contáctanos
          </Button>
          </a>
        </div>
      </section>
    </div>
  )
}