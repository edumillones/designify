import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-babyblue">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue/10 to-babyblue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-midnightblue">Política de Privacidad</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            En Designify, valoramos y protegemos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-midnightblue mb-6">1. Recopilación de Información</h2>
          <p className="text-black/60 mb-6">
            Recopilamos información que usted nos proporciona directamente, como nombre, dirección de correo electrónico, y detalles de contacto cuando utiliza nuestros servicios o se comunica con nosotros.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">2. Uso de la Información</h2>
          <p className="text-black/60 mb-6">
            Utilizamos su información para proporcionar y mejorar nuestros servicios, comunicarnos con usted, y cumplir con nuestras obligaciones legales y contractuales.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">3. Protección de Datos</h2>
          <p className="text-black/60 mb-6">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">4. Compartir Información</h2>
          <p className="text-black/60 mb-6">
            No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios que nos ayudan a operar nuestro negocio, siempre bajo estrictas condiciones de confidencialidad.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">5. Cookies y Tecnologías Similares</h2>
          <p className="text-black/60 mb-6">
            Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el uso de nuestro sitio web. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">6. Derechos del Usuario</h2>
          <p className="text-black/60 mb-6">
            Usted tiene derecho a acceder, corregir, actualizar o solicitar la eliminación de su información personal. También puede oponerse al procesamiento de sus datos o solicitar su portabilidad.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">7. Cambios en la Política de Privacidad</h2>
          <p className="text-black/60 mb-6">
            Podemos actualizar esta política de privacidad periódicamente. Le notificaremos cualquier cambio significativo publicando la nueva política de privacidad en esta página.
          </p>

          <h2 className="text-2xl font-bold text-midnightblue mb-6">8. Contacto</h2>
          <p className="text-black/60 mb-6">
            Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos personales, por favor contáctenos a través de [correo electrónico de contacto].
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnightblue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas más información sobre nuestra política de privacidad?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Estamos comprometidos con la transparencia. No dudes en contactarnos si tienes alguna pregunta.
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