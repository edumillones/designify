"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "María González",
    role: "Diseñadora UX/UI",
    company: "TechStart",
    image: "/assets/clientes/1.png",
    quote: "El CV que diseñaron capturó perfectamente mi personalidad y experiencia profesional. ¡Conseguí mi trabajo soñado en menos de un mes!"
  },
  {
    name: "Carlos Ruiz",
    role: "Desarrollador Full Stack",
    company: "GlobalTech",
    image: "/assets/clientes/2.png",
    quote: "La calidad y profesionalismo del portafolio superó mis expectativas. El diseño moderno y limpio realmente hace que mi trabajo destaque."
  },
  {
    name: "Ana Martínez",
    role: "Arquitecta de Software",
    company: "InnovaSoft",
    image: "/assets/clientes/3.png",
    quote: "Gracias a mi nuevo CV, he recibido más ofertas de entrevistas que nunca. La inversión valió completamente la pena."
  }
]

const portfolioItems = [
  {
    title: "CV Moderno Bicolor",
    category: "CV Profesional",
    image: "/assets/portfolio/cv/4.jpeg",
    description: "Diseño moderno con acentos de color y organización clara de la información"
  },
  {
    title: "CV Técnico Avanzado",
    category: "CV Especializado",
    image: "/assets/portfolio/cv/2.jpeg",
    description: "Perfecto para profesionales técnicos con visualización de habilidades"
  },
  {
    title: "CV Académico Clásico",
    category: "CV Académico",
    image: "/assets/portfolio/cv/6.jpeg",
    description: "Formato tradicional ideal para entornos académicos y de investigación"
  },
  {
    title: "CV Creativo Visual",
    category: "CV Diseño",
    image: "/assets/portfolio/cv/3.jpeg",
    description: "Diseño creativo con elementos visuales y gráficos informativos"
  },
  {
    title: "CV Ejecutivo Premium",
    category: "CV Ejecutivo",
    image: "/assets/portfolio/cv/1.jpeg",
    description: "Elegante y profesional, perfecto para roles ejecutivos"
  },
  {
    title: "CV Institucional",
    category: "CV Académico",
    image: "/assets/portfolio/cv/10.jpeg",
    description: "Formato institucional con énfasis en logros académicos"
  }
]

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6">Nuestro Portafolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora ejemplos de nuestros trabajos en CVs y portafolios que han ayudado a profesionales a destacar.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Clientes Satisfechos</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Estamos orgullosos de haber trabajado con clientes de diversas industrias que han confiado en nosotros para impulsar su presencia profesional.
          </p>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-primary/5">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-center mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} en {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Ejemplos de Nuestros Diseños</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Aquí encontrarás algunos ejemplos de los CVs y portafolios que hemos diseñado, cada uno personalizado para reflejar las habilidades y experiencia de nuestros clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-primary-foreground text-sm mb-2">{item.category}</p>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{item.description}</p>
                      <Button variant="secondary" size="sm">
                        Ver Detalles
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para destacar con un CV o portafolio personalizado?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/80" >
            Ponte en contacto con nosotros y haz realidad tu visión.
          </p>
          <a href="/empezar">
      <Button size="lg" variant="secondary"> 
        Contáctanos Ahora
      </Button>
    </a>
        </div>
      </section>
    </div>
  )
}