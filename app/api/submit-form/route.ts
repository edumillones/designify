import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, additionalInfo, selectedService, servicePrice } = body

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    })

    // Send email
    await transporter.sendMail({
      from: '"Formulario Designify" <designify.pe@gmail.com>',
      to: "designify.pe@gmail.com",
      subject: `Nueva solicitud de ${selectedService}`,
      text: `
        Nombre: ${fullName}
        Email: ${email}
        Teléfono: ${phone}
        Servicio: ${selectedService}
        Precio: ${servicePrice}
        Información adicional: ${additionalInfo}
      `,
    })

    return NextResponse.json(
      { message: 'Formulario enviado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return NextResponse.json(
      { message: 'Error al enviar el formulario' },
      { status: 500 }
    )
  }
}