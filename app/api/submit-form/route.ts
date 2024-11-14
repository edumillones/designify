import { NextResponse } from 'next/server'
import type { Transporter } from 'nodemailer'
import nodemailer from 'nodemailer'

// Define the email data interface
interface EmailData {
  fullName: string
  email: string
  phone: string
  additionalInfo: string
  selectedService: string
  servicePrice: number | string
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as EmailData
    const { fullName, email, phone, additionalInfo, selectedService, servicePrice } = body

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Credenciales de email no configuradas')
    }

    // Configure nodemailer transporter
    const transporter: Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    // Send email
    await transporter.sendMail({
      from: `"Formulario Designify" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
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
      { message: error instanceof Error ? error.message : 'Error al enviar el formulario' },
      { status: 500 }
    )
  }
}