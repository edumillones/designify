import { NextResponse } from 'next/server'
import mercadopago from 'mercadopago'

// Configurar MercadoPago con tu token de acceso
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN!
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Crear preferencia con los datos del pedido
    const preference = {
      items: [
        {
          title: body.title,
          unit_price: body.price,
          quantity: 1,
        }
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pending`,
      },
      auto_return: "approved",
    }

    const result = await mercadopago.preferences.create(preference)

    return NextResponse.json({
      id: result.body.id,
      init_point: result.body.init_point
    })
  } catch (error) {
    console.error('Error al crear la preferencia:', error)
    return NextResponse.json({ error: 'Error al crear la preferencia de pago' }, { status: 500 })
  }
}

