import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                <div className='col-span-6 flex justify-center'>
                    <Image src="/assets/payment/payment.png" alt="Ilustración de pago" width={600} height={600} />
                </div>
                <div className='col-span-6 flex flex-col justify-center mb-32'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Compra tu *dominio* (.com) con Designify.</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Descubre si el dominio que tienes en mente está disponible, si es así puedes adquirirlo ahora mismo.</h3>
                    <Link href='/dominio' className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Descubre cómo <Image src="/assets/people/arrow-right.svg" alt="flecha derecha" width={24} height={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payment;