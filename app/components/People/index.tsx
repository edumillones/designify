import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div id="product">
            <div className="mx-auto max-w-7xl px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/people/testimony.png" alt="nothing" width={1000} height={805} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>+20 negocios están disfrutando de nuestro servicio</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>Explora nuestras creaciones y descubre cómo podemos mejorar tu experiencia digital</h3>
                        <Link href={'/portfolio'} target="_blank" rel="noopener noreferrer" className="text-electricblue text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0">
                            Ver Clientes <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default People;
