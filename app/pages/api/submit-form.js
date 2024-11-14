import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, additionalInfo, selectedService, servicePrice } = req.body;

    // Configura el transporter de nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    try {
      // Envía el correo
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
      });

      res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el formulario' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}