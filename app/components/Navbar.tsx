'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import data from '@/app/constants/data';

const { navLinks } = data;

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={'/'}
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                    NK
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <ul className="hidden md:flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
            {navbarOpen ? (
                <MenuOverlay
                    links={navLinks}
                    handleOnClick={() => setNavbarOpen(false)}
                />
            ) : null}
        </nav>
    );
};

export default Navbar;
