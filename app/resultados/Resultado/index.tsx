'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from 'lucide-react'

interface DomainResult {
  domain: string
  available: boolean
  error?: string
}

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const resultsParam = searchParams.get('results')
  const results: DomainResult[] = resultsParam ? JSON.parse(decodeURIComponent(resultsParam)) : []

  const sendWhatsApp = (domain: string, withHosting: boolean = false) => {
    const phoneNumber = '942538945'
    const message = withHosting 
      ? `Me interesa el dominio ${domain} con hosting anual (S/100)`
      : `Me interesa el dominio ${domain}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#EBF5FF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-midnightblue mb-8">Resultados de la búsqueda de dominios</h1>
        
        {results.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
              <Card key={index} className="border-2 hover:border-electricblue transition-colors">
                <CardContent className="flex flex-col justify-between p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {result.error ? (
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <X className="h-6 w-6 text-yellow-500" />
                      </div>
                    ) : result.available ? (
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="h-6 w-6 text-red-500" />
                      </div>
                    )}
                    <div>
                      <p className="text-lg font-semibold text-midnightblue">
                        {result.domain}
                      </p>
                      <p className="text-sm text-gray-500">
                        {result.error ? result.error : 
                          result.available ? 'Disponible' : 'No disponible'}
                      </p>
                    </div>
                  </div>
                  {result.available && !result.error && (
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="rounded-full border-2 hover:bg-[#EBF5FF]"
                        onClick={() => sendWhatsApp(result.domain)}
                      >
                        Solo Dominio
                      </Button>
                      <Button
                        className="rounded-full bg-electricblue hover:bg-blue-600"
                        onClick={() => sendWhatsApp(result.domain, true)}
                      >
                        Dominio + Hosting
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No se encontraron resultados. Por favor, intenta buscar nuevamente.</p>
        )}
      </div>
    </div>
  )
}