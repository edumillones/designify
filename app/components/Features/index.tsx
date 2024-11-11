import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Professional Portfolios",
        paragraph: 'Crea un portafolio profesional que destaque tus habilidades y proyectos. Diseños modernos, personalizados y enfocados en atraer oportunidades',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Standout CVs",
        paragraph: 'Transforma tu CV con un diseño profesional que captará la atención de empleadores y te ayudará a destacar en el mercado laboral',

    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Networking Boost",
        paragraph: 'Amplía tu red de contactos con herramientas visuales impactantes que faciliten la conexión con otros profesionales en tu campo',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">What We Offer</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">En *Designify*, ayudamos a profesionales a destacar con servicios de diseño personalizados <br /> para portafolios, sitios web y currículums.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                            Ver más detalles <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
