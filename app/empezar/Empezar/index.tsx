"use client"

import { useState } from "react"
import { ArrowLeft, Check, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ServiceOption {
  id: string
  title: string
  description: string
  features: string[]
  price: number | string
  category: "web" | "portfolio" | "cv" | "app" | "custom"
}

export default function Component() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInfo: ""
  })

  const services: ServiceOption[] = [
    {
      id: "web-basic",
      title: "Web Básica",
      description: "Página web básica para empezar",
      price: 349,
      category: "web",
      features: [
        "Personalización total",
        "Hasta 3 revisiones de diseño",
        "Hosting Web (5GB de Almacenamiento)",
        "10 Cuentas de correo electrónico",
        "Dominio de tu negocio (.com)",
        "Hasta 5 páginas",
        "Diseño Responsive",
        "Panel de control (Plesk/cPanel)",
        "SEO Básico",
        "Certificado SSL",
        "Backup",
        "Soporte Técnico 24/7"
      ]
    },
    {
      id: "web-premium",
      title: "Web Premium",
      description: "Solución web avanzada",
      price: 599,
      category: "web",
      features: [
        "Personalización total avanzada",
        "Hasta 10 revisiones de diseño",
        "Hosting Web (Almacenamiento SSD Ilimitado)",
        "20 Cuentas de correo electrónico",
        "Dominio de tu negocio (.com)",
        "Subdominios ilimitados",
        "Hasta 10 páginas",
        "Diseño Responsive",
        "Panel de control (Plesk/cPanel)",
        "SEO Avanzado",
        "Certificado SSL",
        "Backup",
        "Soporte Técnico 24/7"
      ]
    },
    {
      id: "web-enterprise",
      title: "Web Enterprise",
      description: "Solución web personalizada",
      price: "Personalizado",
      category: "web",
      features: [
        "Personalización total",
        "Revisiones de diseño ilimitadas",
        "Hosting Web (Almacenamiento SSD Ilimitado)",
        "Cuentas de correo electrónico ilimitadas",
        "Dominio de tu negocio (.com)",
        "Subdominios ilimitados",
        "Páginas ilimitadas",
        "Diseño Responsive",
        "Panel de control (Plesk/cPanel)",
        "SEO Premium",
        "Certificado SSL",
        "Backup",
        "Soporte Técnico 24/7"
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
        "Diseño Responsive",
        "Dominio personalizado"
      ]
    },
    {
      id: "portfolio-enterprise",
      title: "Portfolio Enterprise",
      description: "Portfolio exclusivo sin límites",
      price: "Personalizado",
      category: "portfolio",
      features: [
        "Diseño Profesional",
        "Proyectos ilimitados",
        "Diseño Responsive",
        "Dominio personalizado"
      ]
    },
    {
      id: "portfolio-cv",
      title: "CV + Portfolio",
      description: "Portfolio exclusivo sin límites",
      price: 199,
      category: "portfolio",
      features: [
        "Documento + Portfolio web",
        "2 idiomas (EN/ES)",
        "5 revisiones para perfección",
        "Formato PDF",
        "Editable en LaTeX",
        "Dominio personalizado"
      ]
    },
    {
      id: "cv-basic",
      title: "CV Básico",
      description: "Diseño profesional para tu CV",
      price: 59,
      category: "cv",
      features: [
        "Diseño Personalizado",
        "2 idiomas (EN/ES)",
        "1 revisión para ajustes",
        "Formato PDF",
        "Editable en LaTeX"
      ]
    },
    {
      id: "cv-professional",
      title: "CV Profesional",
      description: "CV y Portfolio profesional",
      price: 199,
      category: "cv",
      features: [
        "Documento + Portfolio web",
        "2 idiomas (EN/ES)",
        "5 revisiones para perfección",
        "Formato PDF",
        "Editable en LaTeX",
        "Dominio personalizado"
      ]
    },
    {
      id: "cv-enterprise",
      title: "CV Enterprise",
      description: "Solución exclusiva para tu CV",
      price: 399,
      category: "cv",
      features: [
        "Documento + Portfolio web",
        "5 idiomas",
        "Revisiones Ilimitadas",
        "Formato PDF",
        "Editable en LaTeX",
        "Dominio (.com)"
      ]
    },
    {
      id: "app-basic",
      title: "App Básica",
      description: "Aplicación móvil básica",
      price: 999,
      category: "app",
      features: [
        "Diseño UI/UX",
        "Disponible para Android o iOS",
        "3 pantallas principales",
        "Soporte básico"
      ]
    },
    {
      id: "app-professional",
      title: "App Profesional",
      description: "Aplicación móvil completa",
      price: 2999,
      category: "app",
      features: [
        "Diseño UI/UX Premium",
        "Disponible para Android y iOS",
        "10 pantallas",
        "Backend incluido",
        "Soporte 24/7"
      ]
    },
    {
      id: "app-custom",
      title: "App Personalizada",
      description: "Solución a medida para tus necesidades",
      price: "Personalizado",
      category: "app",
      features: [
        "Aplicaciones Nativas",
        "Multiplataforma",
        "Mantenimiento",
        "Desarrollo a medida"
      ]
    },
    {
      id: "custom-service",
      title: "Servicio Personalizado",
      description: "Solución a medida",
      price: "Personalizado",
      category: "custom",
      features: [
        "Consultoría personalizada",
        "Desarrollo a medida",
        "Soporte dedicado",
        "Solución escalable"
      ]
    }
  ]

  const serviceOptions = [
    { 
      value: "cv", 
      title: "CV",
      description: "Crea un curriculum profesional que destaque"
    },
    { 
      value: "web", 
      title: "Página Web",
      description: "Establece tu presencia en línea"
    },
    { 
      value: "portfolio", 
      title: "Portfolio",
      description: "Muestra tu trabajo de manera profesional"
    },
    { 
      value: "app", 
      title: "Desarrollo de Aplicaciones",
      description: "Crea aplicaciones personalizadas"
    },
    { 
      value: "custom", 
      title: "Personalizado",
      description: "Solución adaptada a tus necesidades específicas"
    }
  ]

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const selectedServiceObj = services.find(service => service.id === selectedPackage)
      
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedService: selectedServiceObj?.title,
          servicePrice: selectedServiceObj?.price,
        }),
      })

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor')
      }

      const data = await response.json()
      setStep(4)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Error al enviar el formulario. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black">Selecciona tu Servicio</h2>
              <p className="text-lg text-black/60 mt-4">
                Elige el tipo de servicio que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <RadioGroup
                value={selectedService}
                onValueChange={setSelectedService}
                className="space-y-4"
              >
                {serviceOptions.map((service) => (
                  <Label
                    key={service.value}
                    htmlFor={service.value}
                    className="flex items-center space-x-4 rounded-2xl border p-6 cursor-pointer hover:bg-gray-50 transition-colors [&:has(:checked)]:border-blue [&:has(:checked)]:ring-1 [&:has(:checked)]:ring-blue"
                  >
                    <RadioGroupItem value={service.value} id={service.value} className="text-blue border-blue" />
                    <div className="space-y-1">
                      <p className="text-xl font-semibold text-midnightblue">{service.title}</p>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full hover:bg-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-8 flex items-center gap-2"
              onClick={handleBack}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black">Selecciona tu Paquete</h2>
              <p className="text-lg text-black/60 mt-4">
                Elige el paquete que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === selectedService)
                .map((service, index, array) => (
                  <div 
                    key={service.id} 
                    className={`
                      relative bg-grey500 rounded-3xl p-10 group hover:bg-dodgerblue transition-all duration-300 transform hover:-translate-y-1
                      ${array.length === 4 && index === array.length - 1 ? 
                        'md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1' : ''}
                    `}
                  >
                    <h3 className="text-4xl font-semibold text-midnightblue group-hover:text-white mb-8">
                      {service.title}
                    </h3>
                    <Button 
                      className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full border-2 border-blue group-hover:bg-cornflowerblue group-hover:border-cornflowerblue mb-8 transition-colors"
                      onClick={() => {
                        setSelectedPackage(service.id)
                        setStep(3)
                      }}
                    >
                      Seleccionar
                    </Button>
                    <div className="mb-8">
                      <span className="text-4xl font-semibold text-midnightblue group-hover:text-white">
                        {typeof service.price === 'number' ? `S/${service.price}` : service.price}
                      </span>
                    </div>
                    <div className="space-y-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#E8F2FF] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10">
                            <Check className="w-5 h-5 text-blue group-hover:text-white" />
                          </div>
                          <p className="text-lg font-medium text-black/60 group-hover:text-white/60">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="mx-auto max-w-2xl px-4">
            <Button
              variant="ghost"
              className="mb-8 flex items-center gap-2"
              onClick={handleBack}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-midnightblue mb-8 text-center">Información Personal</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-midnightblue mb-2">Nombre completo</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-midnightblue mb-2">Correo electrónico</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-midnightblue mb-2">Teléfono (opcional)</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="additionalInfo" className="block text-lg font-medium text-midnightblue mb-2">Información adicional</label>
                  <textarea
                    id="additionalInfo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue min-h-[120px]"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-4 px-8 text-xl font-medium text-white bg-blue rounded-full hover:bg-blue/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </Button>
              </form>
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
              <Button
                onClick={() => setStep(1)}
                className="py-4 px-8 text-xl font-medium text-white bg-blue rounded-full hover:bg-blue/90 transition-colors"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="bg-gradient-to-b from-cornflowerblue/10 to-translucentwhite min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step >= stepNumber ? 'bg-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        {renderStep()}
      </div>
    </div>
  )
}