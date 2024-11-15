import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";

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

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <Link href="/#" className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-16 w-16 lg:hidden"
                                    src={'/assets/logo/logo.png'}
                                    alt="designify-logo"
                                />
                                <img
                                    className="hidden h-16 w-16 lg:block"
                                    src={'/assets/logo/logo.png'}
                                    alt="designify-logo"
                                />
                            </Link>

                            {/* LINKS */}
                            <div className="hidden lg:block ml-20">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                'px-3 py-4 text-lg font-normal text-black space-links'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}
                        <Signdialog />

                        {/* EMPEZAR BUTTON */}
                        <Link href="/empezar" className="hidden lg:block">
                            <button className="text-dodgerblue text-xl font-medium ml-9 py-6 px-12 transition duration-150 ease-in-out bg-white hover:text-white rounded-full hover:bg-dodgerblue ttty">
                                Empezar
                            </button>
                        </Link>

                        {/* DRAWER FOR MOBILE VIEW */}
                        {/* DRAWER ICON */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;