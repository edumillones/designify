"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from 'lucide-react'

interface ServiceOption {
  id: string
  title: string
  description: string
  features: string[]
  price: number | string
  category: "web" | "portfolio" | "cv"
}

export default function Component() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInfo: ""
  })

  const services: ServiceOption[] = [
    {
      id: "cv-basic",
      title: "CV Básico",
      description: "Diseño profesional para tu CV",
      price: 59,
      category: "cv",
      features: [
        "Diseño Profesional",
        "1 Página",
        "Formato PDF",
        "1 revisión"
      ]
    },
    {
      id: "cv-professional",
      title: "CV Profesional",
      description: "CV y Portfolio profesional",
      price: 199,
      category: "cv",
      features: [
        "CV + Portfolio",
        "Diseño Profesional",
        "Formato PDF y múltiples formatos",
        "Dominio (.com) incluido",
        "3 revisiones"
      ]
    },
    {
      id: "cv-enterprise",
      title: "CV Enterprise",
      description: "Solución exclusiva para tu CV",
      price: 399,
      category: "cv",
      features: [
        "Diseño Exclusivo",
        "CV Web Interactivo",
        "Analytics"
      ]
    },
    {
      id: "web-basic",
      title: "Web Basic",
      description: "Página web básica para empezar",
      price: 299,
      category: "web",
      features: [
        "Hosting web (5GB) + Dominio (.com)",
        "SSL Gratuito",
        "2 cuentas de correo",
        "Diseño Responsive",
        "3 Páginas",
        "SEO Básico"
      ]
    },
    {
      id: "web-premium",
      title: "Web Premium",
      description: "Solución web avanzada",
      price: 599,
      category: "web",
      features: [
        "Hosting web (10GB) + Dominio (.com)",
        "SSL Gratuito",
        "Hasta 5 cuentas de correo",
        "Diseño Responsive",
        "7 Páginas",
        "SEO Avanzado",
        "Analytics"
      ]
    },
    {
      id: "web-enterprise",
      title: "Web Enterprise",
      description: "Solución web personalizada",
      price: "Personalizado",
      category: "web",
      features: [
        "Panel de Control",
        "Hosting web ilimitado + Dominio (.com)",
        "SSL Certificado",
        "Cuentas de correo ilimitadas",
        "Soporte Técnico 24/7",
        "Gestión de inventario a medida",
        "Pasarela de pagos",
        "Solución a medida",
        "Páginas ilimitadas",
        "SEO Premium"
      ]
    },
    {
      id: "portfolio-standard",
      title: "Portfolio Estándar",
      description: "Portfolio básico para mostrar tu trabajo",
      price: 80,
      category: "portfolio",
      features: [
        "Diseño Moderno",
        "3 Proyectos",
        "Diseño Responsive"
      ]
    },
    {
      id: "portfolio-professional",
      title: "Portfolio Profesional",
      description: "Portfolio avanzado para destacar",
      price: 160,
      category: "portfolio",
      features: [
        "Diseño Premium",
        "10 Proyectos",
        "Dominio personalizado"
      ]
    },
    {
      id: "portfolio-cv",
      title: "CV + Portfolio",
      description: "Combinación perfecta de CV y Portfolio",
      price: 199,
      category: "portfolio",
      features: [
        "Diseño Profesional",
        "Formato PDF y múltiples formatos",
        "Dominio (.com) incluido",
        "3 revisiones"
      ]
    },
    {
      id: "portfolio-elite",
      title: "Portfolio Elite",
      description: "Portfolio exclusivo sin límites",
      price: "Personalizado",
      category: "portfolio",
      features: [
        "Diseño Exclusivo",
        "Proyectos ilimitados",
        "Analytics"
      ]
    }
  ]
// ... rest of your imports and code ...

const handleSubmit = async (serviceId: string) => {
  try {
    const selectedService = services.find(service => service.id === serviceId)
    
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        selectedService: selectedService?.title,
        servicePrice: selectedService?.price,
      }),
    })

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor')
    }

    const data = await response.json()
    console.log('Respuesta:', data)
    setStep(4)
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    // Aquí podrías mostrar un mensaje de error al usuario
    alert('Error al enviar el formulario. Por favor, intenta nuevamente.')
  }
}

// ... rest of your component code ...;

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black">Selecciona tu Servicio</h2>
              <p className="text-lg text-black/60 mt-4">
                Elige el tipo de servicio que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["CV", "Página Web", "Portfolio"].map((service) => (
                <div 
                  key={service}
                  className="bg-white rounded-3xl p-8 cursor-pointer hover:bg-dodgerblue group transition-colors"
                  onClick={() => {
                    setSelectedService(service.toLowerCase().replace(" ", ""))
                    setStep(2)
                  }}
                >
                  <h3 className="text-2xl font-semibold text-midnightblue group-hover:text-white mb-6">{service}</h3>
                  <button className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full border-2 border-blue group-hover:bg-cornflowerblue group-hover:border-cornflowerblue">
                    Seleccionar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="mx-auto max-w-2xl px-4">
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-midnightblue mb-8 text-center">Información Personal</h2>
              <form onSubmit={(e) => {
                e.preventDefault()
                setStep(3)
              }} className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-midnightblue mb-2">Nombre completo</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-midnightblue mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-midnightblue mb-2">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-midnightblue mb-2">Información adicional</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue min-h-[120px]"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full hover:bg-blue/90 transition-colors"
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black">Selecciona tu Paquete</h2>
              <p className="text-lg text-black/60 mt-4">
                Elige el paquete que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === selectedService)
                .map((service) => (
                  <div key={service.id} className="bg-white rounded-3xl p-10 group hover:bg-dodgerblue transition-colors cursor-pointer">
                    <h3 className="text-4xl font-semibold text-midnightblue group-hover:text-white mb-8">
                      {service.title}
                    </h3>
                    <button 
                      className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full border-2 border-blue group-hover:bg-cornflowerblue group-hover:border-cornflowerblue mb-8"
                      onClick={() => handleSubmit(service.id)}
                    >
                      Adquirir ahora
                    </button>
                    <div className="mb-8">
                      <span className="text-4xl font-semibold text-midnightblue group-hover:text-white">
                        {typeof service.price === 'number' ? `S/${service.price}` : service.price}
                      </span>
                    </div>
                    <div className="space-y-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#E8F2FF] flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-blue" />
                          </div>
                          <p className="text-lg font-medium text-black/60 group-hover:text-white/60">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Image
                      src="/assets/pricing/starone.svg"
                      alt="Decorative star"
                      width={154}
                      height={154}
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="mx-auto max-w-2xl px-4 text-center">
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-midnightblue mb-4">¡Gracias por tu solicitud!</h2>
              <p className="text-lg text-black/60 mb-8">
                Hemos enviado un resumen de tu solicitud a tu correo electrónico. 
                Nos pondremos en contacto contigo pronto.
              </p>
              <button
                onClick={() => setStep(1)}
                className="py-4 px-8 text-xl font-medium text-white bg-blue rounded-full hover:bg-blue/90 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="bg-babyblue min-h-screen py-20">
      {renderStep()}
    </div>
  )
}