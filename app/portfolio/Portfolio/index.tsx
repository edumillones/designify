"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "María González",
    role: "Diseñadora UX/UI",
    company: "TechStart",
    image: "/assets/clientes/1.png",
    quote:
      "El CV que diseñaron capturó perfectamente mi personalidad y experiencia profesional. ¡Conseguí mi trabajo soñado en menos de un mes!",
  },
  {
    name: "Carlos Ruiz",
    role: "Desarrollador Full Stack",
    company: "GlobalTech",
    image: "/assets/clientes/2.png",
    quote:
      "La calidad y profesionalismo del portafolio superó mis expectativas. El diseño moderno y limpio realmente hace que mi trabajo destaque.",
  },
  {
    name: "Ana Martínez",
    role: "Arquitecta de Software",
    company: "InnovaSoft",
    image: "/assets/clientes/3.png",
    quote:
      "Gracias a mi nuevo CV, he recibido más ofertas de entrevistas que nunca. La inversión valió completamente la pena.",
  },
]
const portfolioItems = [
  {
    title: "CV Moderno Bicolor",
    category: "CV Profesional",
    image: "/assets/portfolio/cv/4.jpeg",
    description: "Diseño moderno con acentos de color y organización clara de la información",
  },
  {
    title: "CV Técnico Avanzado",
    category: "CV Especializado",
    image: "/assets/portfolio/cv/2.jpeg",
    description: "Perfecto para profesionales técnicos con visualización de habilidades",
  },
  {
    title: "CV Académico Clásico",
    category: "CV Académico",
    image: "/assets/portfolio/cv/6.jpeg",
    description: "Formato tradicional ideal para entornos académicos y de investigación",
  },
  {
    title: "CV Creativo Visual",
    category: "CV Diseño",
    image: "/assets/portfolio/cv/3.jpeg",
    description: "Diseño creativo con elementos visuales y gráficos informativos",
  },
  {
    title: "CV Ejecutivo Premium",
    category: "CV Ejecutivo",
    image: "/assets/portfolio/cv/1.jpeg",
    description: "Elegante y profesional, perfecto para roles ejecutivos",
  },
  {
    title: "CV Institucional",
    category: "CV Académico",
    image: "/assets/portfolio/cv/10.jpeg",
    description: "Formato institucional con énfasis en logros académicos",
  },
]

const projects = [
  {
    category: "E-Commerce",
    items: [
      {
        url: "/assets/Projects/SHOP.png",
        title: "JEWELRY SHOP",
        description: "Plataforma eCommerce para joyerías con panel de administración e integración con Stripe.",
        tools: "Next.js &nbsp;&nbsp; Express &nbsp;&nbsp; MongoDB &nbsp;&nbsp; Stripe",
        link: "https://designify-pro-e-commerce-next-js.vercel.app/",
        id: 1,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/SEA.png",
        title: "CLOTHING SHOP",
        description: "Tienda de ropa online con gestión de carrito e integración con Stripe.",
        tools: "React &nbsp;&nbsp; Next.js &nbsp;&nbsp; Sanity &nbsp;&nbsp; Stripe",
        link: "https://clothing-shop-react.vercel.app/",
        id: 2,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/FASHION.png",
        title: "FASHION WEBSITE",
        description: "Sitio web para una marca de moda con diseño elegante y animaciones fluidas.",
        tools: "Next.js &nbsp;&nbsp; Lenis &nbsp;&nbsp; Framer Motion &nbsp;&nbsp; GSAP &nbsp;&nbsp; Tailwind CSS",
        link: "https://designify-fashion-website.vercel.app/",
        id: 11,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/TOKYO.png",
        title: "CLOTHING STORE E-COMMERCE",
        description: "Tienda de ropa online con frontend de alto rendimiento y backend eficiente.",
        tools: "Next.js &nbsp;&nbsp; Shopify",
        link: "https://clothing-store.rashidshamloo.com/",
        id: 3,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "./assets/Projects/HARU.png",
        title: "FASHION WEBSITE STORE",
        description: "Aplicación web eCommerce con interfaz atractiva y API REST personalizada.",
        tools: "Next.js &nbsp;&nbsp; React &nbsp;&nbsp; Tailwind CSS &nbsp;&nbsp; Context API",
        link: "https://haru-fashion.vercel.app/",
        id: 4,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/NEXT.png",
        title: "BASIC STORE ONLINE",
        description:
          "Plataforma de comercio electrónico con Stripe para pagos, gestión de productos, manejo de variantes y cálculos de impuestos.",
        tools: "Next.js &nbsp;&nbsp; Stripe",
        link: "https://designify-basic-e-commerce.vercel.app/",
        id: 5,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/FOOD.png",
        title: "FOOD PAGE ONLINE",
        description: "Plantilla para restaurantes con diseño moderno y experiencia de usuario fluida.",
        tools: "Next.js",
        link: "https://designify-basic-shop-restaurant-next-js.vercel.app/",
        id: 6,
        color: "text-white",
        shadow: "yes",
      }
    ],
  },
  {
    category: "Portfolios",
    items: [
      {
        url: "/assets/Projects/PROFESIONAL.png",
        title: "PROFESIONAL PORTFOLIO",
        description:
          "Portafolio que destaca el dominio en desarrollo frontend con interfaces interactivas y diseño responsive.",
        tools: "JavaScript &nbsp;&nbsp; CSS &nbsp;&nbsp; HTML",
        link: "https://designify-profesional-portfolio.vercel.app/",
        id: 7,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/PHOTO.png",
        title: "PHOTOGRAPHY BOOK PORTFOLIO",
        description: "Portafolio de fotografía construido con Jekyll, usando plantillas Liquid y SCSS.",
        tools: "Jekyll &nbsp;&nbsp; Liquid &nbsp;&nbsp; SCSS &nbsp;&nbsp; JavaScript",
        link: "https://kiara-fenco-photography.vercel.app/",
        id: 8,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/PORTFOLIO.png",
        title: "BASIC PORTFOLIO",
        description: "Estructura fundamental de un portafolio web con interacciones básicas.",
        tools: "HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; JavaScript",
        link: "https://designify-basic-portfolio.vercel.app/",
        id: 9,
        color: "text-white",
        shadow: "yes",
      },
      {
        url: "/assets/Projects/DEV.png",
        title: "SIMPLE PORTFOLIO",
        description: "Portafolio construido con Next.js para la interfaz y Sanity como CMS headless.",
        tools: "Next.js &nbsp;&nbsp; React &nbsp;&nbsp; Sanity",
        link: "https://designify-basic-porfolio-next-js.vercel.app/",
        id: 10,
        color: "text-white",
        shadow: "yes",
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        url: "/assets/Projects/FASHION.png",
        title: "FASHION WEBSITE",
        description: "Sitio web para una marca de moda con diseño elegante y animaciones fluidas.",
        tools: "Next.js &nbsp;&nbsp; Lenis &nbsp;&nbsp; Framer Motion &nbsp;&nbsp; GSAP &nbsp;&nbsp; Tailwind CSS",
        link: "https://designify-fashion-website.vercel.app/",
        id: 11,
        color: "text-white",
        shadow: "yes",
      },
    ],
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-babyblue">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cornflowerblue/10 to-translucentwhite">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-midnightblue">Haz realidad tu visión</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Explora y visita nuestras páginas que han ayudado a profesionales a destacar.
          </p>
        </div>
      </section>

      {/* Portfolio Slider Section */}
      <PortfolioSlider />

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-babyblue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-midnightblue">Clientes Satisfechos</h2>
          <p className="text-lg text-black/60 text-center mb-12 max-w-3xl mx-auto">
            Estamos orgullosos de haber trabajado con clientes de diversas industrias que han confiado en nosotros para
            impulsar su presencia profesional.
          </p>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-grey500">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-blue text-blue" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-center mb-6 text-midnightblue">
                        {testimonial.quote}
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold text-midnightblue">{testimonial.name}</p>
                        <p className="text-sm text-black/60">
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

      {/* CV and Portfolio Examples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-midnightblue">Ejemplos de Nuestros Diseños</h2>
          <p className="text-lg text-black/60 text-center mb-12 max-w-3xl mx-auto">
            Aquí encontrarás algunos ejemplos de los CVs y portafolios que hemos diseñado, cada uno personalizado para
            reflejar las habilidades y experiencia de nuestros clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden bg-grey500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-white text-sm mb-2">{item.category}</p>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{item.description}</p>
                      <Button variant="secondary" size="sm" className="bg-blue text-white hover:bg-blue/90">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnightblue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para destacar con un CV o portafolio personalizado?</h2>
          <p className="text-lg mb-8 text-white/80">Ponte en contacto con nosotros y haz realidad tu visión.</p>
          <a href="/contacto">
            <Button size="lg" variant="secondary" className="bg-white text-midnightblue hover:bg-white/90">
              Contáctanos Ahora
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

const PortfolioSlider = () => {
  const scrollRef = useRef(null)
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(false)
  const [isRightButtonActive, setIsRightButtonActive] = useState(true)
  const [activeCategory, setActiveCategory] = useState("E-Commerce")

  useEffect(() => {
    const handleWheel = (event) => {
      const element = scrollRef.current
      const isScrollingHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY)

      if (isScrollingHorizontal) {
        element.scrollLeft += event.deltaX
        event.preventDefault()
      }
    }

    const element = scrollRef.current
    element.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      element.removeEventListener("wheel", handleWheel)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current
      const maxScrollLeft = element.scrollWidth - element.clientWidth
      setIsLeftButtonActive(element.scrollLeft > 0)
      setIsRightButtonActive(element.scrollLeft < maxScrollLeft)
    }

    const element = scrollRef.current
    element.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      element.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction) => {
    const element = scrollRef.current
    const scrollAmount = direction === "left" ? -331 : 331
    element.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-midnightblue">Nuestros Proyectos</h2>
        <p className="text-lg text-black/60 text-center mb-12 max-w-3xl mx-auto">
          Explora nuestra colección de proyectos en diferentes categorías, desde e-commerce hasta portafolios
          profesionales.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {projects.map((category) => (
            <Button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              variant={activeCategory === category.category ? "default" : "outline"}
              className="bg-blue text-white hover:bg-blue/90"
            >
              {category.category}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-[1.68rem] z-10 text-start text-midnightblue">{activeCategory}</p>
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => scroll("left")}
              className={`transition-all ${isLeftButtonActive ? "text-midnightblue" : "opacity-30"}`}
              disabled={!isLeftButtonActive}
              whileTap={isLeftButtonActive ? { scale: 0.5 } : {}}
            >
              <IoIosArrowBack size={20} />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              className={`transition-all pl-3 ${isRightButtonActive ? "text-midnightblue" : "opacity-30"}`}
              disabled={!isRightButtonActive}
              whileTap={isRightButtonActive ? { scale: 0.5 } : {}}
            >
              <IoIosArrowForward size={20} />
            </motion.button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex h-full overflow-x-auto overflow-y-hidden no-scrollbar"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
        >
          {projects
            .find((category) => category.category === activeCategory)
            .items.map((project, index) => (
              <a href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className={`group relative flex-shrink-0 w-[331px] h-[277px] rounded-md ${index !== 0 ? "ml-[0.9rem]" : ""}`}
                  style={{
                    backgroundImage: `url(${project.url})`,
                    backgroundSize: "100% auto",
                    backgroundPosition: "center",
                  }}
                  whileHover={{ backgroundSize: "103% auto" }}
                >
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                    <div>
                      <p className={`text-sm ${project.color}`}>{project.title}</p>
                    </div>
                    <div className="absolute bottom-5 left-5 text-left">
                      <p
                        className={`text-[.8rem] xs:text-[.99rem] ${project.color} ${project.shadow === "yes" ? "[text-shadow:_0_0_23px_rgb(0_0_0_/_100%)]" : ""} mr-2`}
                      >
                        {project.description}
                      </p>
                      <p
                        className={`text-[.65rem] xs:text-[.85rem] opacity-75 ${project.color} ${project.shadow === "yes" ? "[text-shadow:_0_0_16px_rgb(0_0_0_/_100%)]" : ""} mt-2`}
                        dangerouslySetInnerHTML={{ __html: project.tools.replace(/\s/g, "&nbsp;") }}
                      ></p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </a>
            ))}
        </div>
      </div>
    </section>
  )
}

