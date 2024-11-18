import Image from "next/image";
import Link from 'next/link';
import { Globe, User, FileText } from 'lucide-react'

interface datatype {
  icon: React.ReactNode
  heading: string
  paragraph: string
}

const Aboutdata: datatype[] = [
  {
    icon: <Globe className="w-12 h-12 text-[#4070F4]" />,
    heading: "Página Web",
    paragraph: 'Diseño web profesional y responsive para tu negocio o marca personal.',
  },
  {
    icon: <User className="w-12 h-12 text-[#4070F4]" />,
    heading: "Portfolio",
    paragraph: 'Muestra tu trabajo de forma elegante y profesional con un portfolio.',
  },
  {
    icon: <FileText className="w-12 h-12 text-[#4070F4]" />,
    heading: "CV Personalizado",
    paragraph: 'Destaca en el mercado laboral con un CV profesional y único.',
  }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Nuestros Servicios</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">En Designify, ayudamos a profesionales a destacar con servicios de diseño personalizados <br /> para portafolios, sitios web y currículums.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>
                            <div className="mb-2">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/empezar'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
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