import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Designify',
  description: 'Tu destino para el diseño web perfecto, hosting confiable y dominios personalizados. ¡Crea, aloja y establece tu presencia en línea con nosotros!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
