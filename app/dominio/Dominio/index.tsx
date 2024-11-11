'use client'

import { useState } from 'react'
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { CheckCircle, XCircle } from 'lucide-react'

export function BlockPage() {
  const [domain, setDomain] = useState('')
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const checkDomain = async () => {
    setIsChecking(true)
    // Simulamos una comprobación de dominio con un retardo
    await new Promise(resolve => setTimeout(resolve, 1500))
    // Simulamos una disponibilidad aleatoria
    setIsAvailable(Math.random() > 0.5)
    setIsChecking(false)
  }

  const sendWhatsApp = () => {
    const phoneNumber = '942538945'
    const message = `Me interesa el dominio: ${domain}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-midnightblue text-3xl font-semibold text-center mb-8">Comprobador de Dominios</h1>
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="domain" className="text-lg font-medium text-midnightblue">Dominio</Label>
          <Input
            id="domain"
            placeholder="Ingresa un dominio (ej. midominio.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black placeholder-opacity-50 focus:ring-electricblue focus:border-electricblue"
          />
        </div>
        <Button
          onClick={checkDomain}
          disabled={!domain || isChecking}
          className="w-full py-4 px-6 text-xl font-medium text-white bg-electricblue rounded-full transition duration-150 ease-in-out hover:bg-blue disabled:opacity-50"
        >
          {isChecking ? 'Comprobando...' : 'Comprobar disponibilidad'}
        </Button>
        {isAvailable !== null && (
          <Alert variant={isAvailable ? "default" : "destructive"} className="flex items-center space-x-3 bg-gray-50 border p-4 rounded-lg mt-4">
            {isAvailable ? (
              <CheckCircle className="text-green-500 h-6 w-6" />
            ) : (
              <XCircle className="text-red-500 h-6 w-6" />
            )}
            <div>
              <AlertTitle className="text-lg font-semibold text-midnightblue">Estado del dominio</AlertTitle>
              <AlertDescription className="text-gray-700">
                {isAvailable ? 'El dominio está disponible!' : 'El dominio no está disponible.'}
              </AlertDescription>
            </div>
          </Alert>
        )}
        <Button
          onClick={sendWhatsApp}
          disabled={!domain || !isAvailable}
          className="w-full bg-[#25D366] text-white text-xl font-medium py-4 rounded-full hover:bg-[#20c25e] transition mt-4"
          >
          Conseguir dominio por WhatsApp
        </Button>
      </div>
    </div>
  )
}
