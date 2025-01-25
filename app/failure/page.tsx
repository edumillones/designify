import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function FailurePage() {
  return (
    <div className="container mx-auto p-6 flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Card className="max-w-md w-full shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-blue-700 text-xl font-bold">Error en el Pago</CardTitle>
          <CardDescription className="text-gray-600">
            Hubo un problema al procesar tu pago. Por favor, intenta nuevamente o contáctanos si el problema persiste.
          </CardDescription>
        </CardHeader>
        <div className="p-6 space-y-4">
          <Link
            href="/"
            className="block text-center bg-[#1443ED] text-white px-4 py-2 rounded-md hover:bg-[#123bce] transition"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="block text-center bg-white border-2 border-[#1443ED] text-[#1443ED] px-4 py-2 rounded-md hover:bg-blue-50 transition"
          >
            Contáctanos
          </Link>
        </div>
      </Card>
    </div>
  );
}
