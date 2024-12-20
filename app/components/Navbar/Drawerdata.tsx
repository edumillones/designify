import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Inicio', href: '/#', current: false },
  { name: 'Dominio', href: '/dominio', current: false },
  { name: 'Servicios', href: '/empezar', current: false },
  { name: 'Clientes', href: '/portfolio', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md w-full mx-auto">
      <div className="flex-1 space-y-6 py-2">
        <div className="sm:block">
          <div className="space-y-4 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'px-2 py-2 text-xl font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6"></div>
            <button className="bg-white w-full text-midnightblue border border-midnightblue font-medium py-3 px-4 rounded text-lg">
              Iniciar Sesión
            </button>
            <Link href="/empezar" className="w-full">
              <button className="bg-midnightblue w-full hover:bg-blue hover:text-white text-white font-medium my-3 py-3 px-4 rounded text-lg">
                Empezar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;

