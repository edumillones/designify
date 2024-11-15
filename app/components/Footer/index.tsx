import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Dominio", href: "/dominio" },
  { name: "Servicios", href: "/empezar" },
  { name: "Clientes", href: "/portfolio" },
  { name: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/designify.pe/" },
  { icon: Instagram, href: "https://www.instagram.com/designify.pe/" },
  { icon: Twitter, href: "https://www.twitter.com/designify.pe/" },
];

export default function Footer() {
  return (
    <footer className="bg-midnightblue text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="/#" className="mb-4">
              <Image src="/assets/logo/logo.png" alt="Designify logo" width={150} height={46} className="h-12 w-auto" />
            </Link>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Navegación</h3>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
              Términos y condiciones
            </Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-300 hover:text-white transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Designify. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}