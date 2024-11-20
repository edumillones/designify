import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Make impactful career moves with Designify</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Da el siguiente paso en tu carrera con un CV y portafolio que destaquen tus habilidades y experiencia.</h3>
                    <Link href={'/contacto'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                    Contáctanos ahora<Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/business/business.png" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>

    )
}

export default Business;
