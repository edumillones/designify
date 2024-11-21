"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
    {
        category: 'CV',
        plans: [
            {
                heading: "CV Básico",
                button: "Adquirir ahora",
                features: [
                    "Diseño Personalizado",
                    "2 idiomas (EN/ES)",
                    "1 revisión para ajustes",
                    "Formato PDF",
                    "Editable en LaTeX"
                ],
                imgSrc: '/assets/pricing/starone.svg',
            },
            {
                heading: "CV Profesional",
                button: "Adquirir ahora",
                features: [
                    "Documento + Portfolio web",
                    "2 idiomas (EN/ES)",
                    "5 revisiones para perfección",
                    "Formato PDF",
                    "Editable en LaTeX",
                    "Dominio personalizado"
                ],
                imgSrc: '/assets/pricing/startwo.svg',
            },
            {
                heading: "CV Enterprise",
                button: "Adquirir ahora",
                features: [
                    "Documento + Portfolio web",
                    "5 idiomas",
                    "Revisiones Ilimitadas",
                    "Formato PDF",
                    "Editable en LaTeX",
                    "Dominio (.com)"
                ],
                imgSrc: '/assets/pricing/starthree.svg',
            },
        ],
    },
    {
        category: 'Portfolio',
        plans: [
            {
                heading: "Portfolio Estándar",
                button: "Adquirir ahora",
                features: [
                    "Diseño Moderno",
                    "3 Proyectos",
                    "Diseño Responsive"
                ],
                imgSrc: '/assets/pricing/starone.svg',
            },
            {
                heading: "Portfolio Profesional",
                button: "Adquirir ahora",
                features: [
                    "Diseño Premium",
                    "10 Proyectos",
                    "Diseño Responsive",
                    "Dominio personalizado"
                ],
                imgSrc: '/assets/pricing/startwo.svg',
            },
            {
                heading: "Portfolio Enterprise",
                button: "Contactar",
                features: [
                    "Diseño Profesional",
                    "Proyectos ilimitados",
                    "Diseño Responsive",
                    "Dominio personalizado"
                ],
                imgSrc: '/assets/pricing/starthree.svg',
            },
        ],
    },
    {
        category: 'Página Web',
        plans: [
            {
                heading: "Basic",
                button: "Adquirir ahora",
                features: [
                    "Personalización total",
                    "Hasta 3 revisiones de diseño",
                    "Hosting Web (5GB de Almacenamiento)",
                    "10 Cuentas de correo electrónico",
                    "Dominio de tu negocio (.com)",
                    "Hasta 5 páginas",
                    "Diseño Responsive",
                    "SEO Básico",
                    "Certificado SSL",
                    "Soporte Técnico 24/7"
                ],
                imgSrc: '/assets/pricing/starone.svg',
            },
            {
                heading: "Premium",
                button: "Adquirir ahora",
                features: [
                    "Personalización total avanzada",
                    "Hasta 10 revisiones de diseño",
                    "Hosting Web (Almacenamiento SSD Ilimitado)",
                    "20 Cuentas de correo electrónico",
                    "Dominio de tu negocio (.com)",
                    "Subdominios ilimitados",
                    "Hasta 10 páginas",
                    "Diseño Responsive",
                    "SEO Avanzado",
                    "Certificado SSL",
                    "Soporte Técnico 24/7"
                ],
                imgSrc: '/assets/pricing/startwo.svg',
            },
            {
                heading: "Enterprise",
                button: "Contactar",
                features: [
                    "Personalización total",
                    "Revisiones de diseño ilimitadas",
                    "Hosting Web (Almacenamiento SSD Ilimitado)",
                    "Cuentas de correo electrónico ilimitadas",
                    "Dominio de tu negocio (.com)",
                    "Subdominios ilimitados",
                    "Páginas ilimitadas",
                    "Diseño Responsive",
                    "SEO Premium",
                    "Certificado SSL",
                    "Soporte Técnico 24/7"
                ],
                imgSrc: '/assets/pricing/starthree.svg',
            },
        ],
    },
];

const Pricing = () => {
    const [selectedCategory, setSelectedCategory] = useState('Página Web');

    const handleCategoryChange = (category: SetStateAction<string>) => {
        setSelectedCategory(category);
    };

    const currentPackage = packages.find((pkg) => pkg.category === selectedCategory);

    return (
        <div id="pricing" className='pricing-bg relative py-10'>
            <Image src="/assets/pricing/upperline.png" alt="upperline-image" width={280} height={219} className='absolute top-[160px] left-[90px] hidden sm:block' />
            <Image src="/assets/pricing/lowerline.png" alt="lowerline-image" width={180} height={100} className='absolute bottom-[0px] right-[90px]' />
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-4xl sm:text-5xl font-semibold text-black text-center'>Nuestros Paquetes</h3>

                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>Ofrecemos opciones accesibles para crear tu sitio web, CVs y portafolios <br /> profesionales que te harán destacar.</p>

                <div className='mt-10 relative'>
                    <div className='flex justify-center'>
                        <div className='bg-cornflowerblue flex py-1 px-1 rounded-full '>
                            {packages.map((pkg) => (
                                <h3
                                    key={pkg.category}
                                    className={`text-xl font-medium cursor-pointer ${
                                        selectedCategory === pkg.category
                                            ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                                            : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                    onClick={() => handleCategoryChange(pkg.category)}
                                >
                                    {pkg.category}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
                    {currentPackage?.plans.map((plan, index) => (
                        <div className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-dodgerblue group' key={index}>
                            <Image src={plan.imgSrc} alt="star-image" width={154} height={154} className='absolute bottom-0 right-0' />
                            <h4 className='text-4xl sm:text-5xl font-semibold mb-8 text-midnightblue group-hover:text-white'>{plan.heading}</h4>
                            <Link href="/empezar" className='text-xl font-medium text-white w-full bg-blue hover:text-white group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue rounded-full py-4 px-12 mb-12 text-center block'>
                                {plan.button}
                            </Link>
                            {/* Precio eliminado */}
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{feature}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pricing;

