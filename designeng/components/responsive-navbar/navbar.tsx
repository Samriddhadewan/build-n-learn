"use client";

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { id: "home", label: "Home", href: "#" },
        { id: "about", label: "About", href: "#" },
        { id: "services", label: "Services", href: "#" },
        { id: "contact", label: "Contact", href: "#" },
    ];

    return (
        <div className="relative">
            <div className="relative flex rounded-full justify-between items-center max-w-4xl mx-auto border border-neutral-200 px-2 py-2 bg-white shadow-(--shadow-samriddha)">
                <Image src="/aceternity-logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                />
                <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500 mr-10 ">
                    {
                        links.map((items) => <Link className="hover:text-neutral-900 transition duration-150" href={items.href} key={items.id}>{items.label}</Link>)
                    }
                </div>
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    <Image src="/hamburger.png" height={20} width={20} alt="hameburger Icon" />
                </button>
                {
                    open && (
                        <div className="absolute inset-x-0 max-w-[90%] text-center top-15 bg-white rounded-md mx-auto">
                            <div className="md:hidden flex flex-col shadow-samriddha items-center gap-2 text-sm text-neutral-500 mr-10 ">
                                {
                                    links.map((items) => <Link className="hover:text-neutral-900 transition duration-150" href={items.href} key={items.id}>{items.label}</Link>)
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
