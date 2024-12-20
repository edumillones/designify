'use client'

import { useState } from 'react'
import { Search, Check, X, Loader2, Globe } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface DomainResult {
  domain: string
  available: boolean
  error?: string
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<DomainResult[]>([])
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const checkDomain = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor, ingresa un nombre de dominio para buscar.")
      return
    }

    setError(null)
    setIsChecking(true)
    setResults([])
    
    const cleanDomain = searchTerm.trim()
      .toLowerCase()
      .replace(/\.(com|net|org|pe)$/i, '')
      .replace(/[^a-zA-Z0-9-]/g, '')
    
    try {
      const checkPromises = extensions.map(ext => 
        checkDomainAvailability(`${cleanDomain}${ext}`)
      )
      
      const results = await Promise.all(checkPromises)
      setResults(results)
    } catch (error) {
      setError("Hubo un error al verificar los dominios. Por favor, intenta nuevamente.")
    } finally {
      setIsChecking(false)
    }
  }

  const sendWhatsApp = (domain: string, withHosting: boolean = false) => {
    const phoneNumber = '942538945'
    const message = withHosting 
      ? `Me interesa el dominio ${domain} con hosting anual (S/100)`
      : `Me interesa el dominio ${domain}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cornflowerblue/10 to-translucentwhite">
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a237e] mb-4 sm:mb-6">
              Encuentra tu Dominio Ideal
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
              Asegura tu presencia en línea con el dominio perfecto para tu negocio
            </p>
          </div>

          {error && (
            <div className="max-w-3xl mx-auto mb-4 p-3 sm:p-4 bg-red-100 text-red-700 rounded-lg text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Busca tu dominio ideal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isChecking) {
                      checkDomain()
                    }
                  }}
                  className="w-full h-12 sm:h-14 pl-12 text-base sm:text-lg rounded-full border-2 border-blue-100 focus:border-[#2563EB] focus:ring-0"
                />
                <Globe className="absolute left-4 top-3 sm:top-4 h-6 w-6 text-gray-400" />
              </div>
              <Button
                onClick={checkDomain}
                disabled={isChecking}
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] transition-colors"
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

            {results.length > 0 && (
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {results.map((result, index) => (
                  <Card key={index} className="border-2 hover:border-[#2563EB] transition-colors">
                    <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                        {result.error ? (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <X className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                          </div>
                        ) : result.available ? (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                          </div>
                        )}
                        <div>
                          <p className="text-base sm:text-lg font-semibold text-[#1a237e]">
                            {result.domain}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {result.error ? result.error : 
                              result.available ? 'Disponible' : 'No disponible'}
                          </p>
                        </div>
                      </div>
                      {result.available && !result.error && (
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                          <Button
                            variant="outline"
                            className="rounded-full border-2 hover:bg-[#EBF5FF] text-sm sm:text-base"
                            onClick={() => sendWhatsApp(result.domain)}
                          >
                            Solo Dominio
                          </Button>
                          <Button
                            className="rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-sm sm:text-base"
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}