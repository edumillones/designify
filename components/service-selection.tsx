"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from 'lucide-react'

interface ServiceOption {
  id: string
  title: string
  description: string
  features: string[]
  price: number
  category: "web" | "portfolio" | "cv" | "enterprise"
}

export function ServiceSelection() {
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
      id: "web-basic",
      title: "Página Web Básica",
      description: "Ideal para pequeños negocios",
      price: 350,
      category: "web",
      features: [
        "Hosting web (5GB) + Dominio (.com)",
        "SSL Gratuito",
        "Máximo 2 cuentas de correo",
        "Soporte básico"
      ]
    },
    {
      id: "web-premium",
      title: "Página Web Premium",
      description: "Para negocios en crecimiento",
      price: 750,
      category: "web",
      features: [
        "Hosting web (10GB) + Dominio (.com)",
        "SSL Certificado Premium",
        "Hasta 5 cuentas de correo",
        "Soporte prioritario 24/7"
      ]
    },
    {
      id: "portfolio-standard",
      title: "Portfolio Estándar",
      description: "Muestra tu trabajo profesionalmente",
      price: 139,
      category: "portfolio",
      features: [
        "Diseño moderno responsive",
        "Galería de proyectos",
        "Formulario de contacto",
        "SEO básico"
      ]
    },
    {
      id: "cv-standard",
      title: "CV Profesional",
      description: "Destaca en el mercado laboral",
      price: 40,
      category: "cv",
      features: [
        "Diseño moderno y profesional",
        "Optimizado para ATS",
        "Formato PDF y Word",
        "Una revisión incluida"
      ]
    }
  ]

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Página Web", "Portfolio", "CV", "Enterprise"].map((service) => (
                <div 
                  key={service}
                  className="bg-white rounded-3xl p-8 cursor-pointer hover:bg-dodgerblue group transition-colors"
                  onClick={() => {
                    setSelectedService(service.toLowerCase())
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
                    <button className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full border-2 border-blue group-hover:bg-cornflowerblue group-hover:border-cornflowerblue mb-8">
                      Adquirir ahora
                    </button>
                    <div className="mb-8">
                      <span className="text-4xl font-semibold text-midnightblue group-hover:text-white">
                        ${service.price}
                      </span>
                      <span className="text-4xl font-semibold text-lightgrey">/mo</span>
                      <div className="text-black/60 group-hover:text-white/60">
                        $0.5/ Subscriber
                        <div className="text-sm">(per subscriber per month)</div>
                      </div>
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