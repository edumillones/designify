'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface DomainResult {
  domain: string
  available: boolean
  error?: string
}

const Payment = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isChecking, setIsChecking] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const extensions = ['.com', '.net', '.org', '.pe']

    const checkDomainAvailability = async (domain: string): Promise<DomainResult> => {
        try {
            const response = await fetch('/api/check-domain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ domain }),
            })

            if (!response.ok) {
                throw new Error('Error checking domain')
            }

            const data = await response.json()
            return {
                domain,
                available: data.available
            }
        } catch (error) {
            return {
                domain,
                available: false,
                error: 'Error verificando disponibilidad'
            }
        }
    }

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!searchTerm.trim()) {
            setError("Por favor, ingresa un nombre de dominio para buscar.")
            return
        }

        setError(null)
        setIsChecking(true)
        
        const cleanDomain = searchTerm.trim()
            .toLowerCase()
            .replace(/\.(com|net|org|pe)$/i, '')
            .replace(/[^a-zA-Z0-9-]/g, '')
        
        try {
            const checkPromises = extensions.map(ext => 
                checkDomainAvailability(`${cleanDomain}${ext}`)
            )
            
            const results = await Promise.all(checkPromises)
            const encodedResults = encodeURIComponent(JSON.stringify(results))
            router.push(`/resultados?results=${encodedResults}`)
        } catch (error) {
            setError("Hubo un error al verificar los dominios. Por favor, intenta nuevamente.")
            setIsChecking(false)
        }
    }

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0'>
                <div className='col-span-6 flex justify-center'>
                    <Image src="/assets/payment/payment.png" alt="Ilustración de pago" width={600} height={600} />
                </div>
                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143 mb-6'>Compra tu dominio con Designify</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 mb-8'>Descubre si el dominio que tienes en mente está disponible, si es así puedes adquirirlo ahora mismo.</h3>
                    
                    <form onSubmit={handleSearch} className="mb-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Input
                                    type="text"
                                    placeholder="Busca tu dominio ideal..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full h-12 pl-4 pr-12 text-base rounded-full border-2 border-gray-300 focus:border-electricblue focus:ring-1 focus:ring-electricblue"
                                    aria-label="Buscar dominio"
                                />
                            </div>
                            <Button 
                                type="submit"
                                className="h-12 px-6 text-base rounded-full bg-electricblue hover:bg-blue-600 transition-colors"
                                disabled={isChecking}
                            >
                                {isChecking ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Buscando...
                                    </>
                                ) : (
                                    <>
                                        <Search className="mr-2 h-5 w-5" />
                                        Buscar
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Payment