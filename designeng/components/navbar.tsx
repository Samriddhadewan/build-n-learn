import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    const links = [
        {
            href: "/guide",
            title: "Guide"
        },
        {
            href: "/pricing",
            title: "Pricing"
        },
        {
            href: "/login",
            title: "Login"
        },

    ]

    return (
        <div className='flex items-center justify-between py-4 px-2'>
            <Link href="/">
                <Image src="/logo.svg" draggable="false" height={50} width={90} loading='lazy' alt='logo' />
            </Link>

            <div className='flex justify-between items-center gap-8'>
                {
                    links.map((link) => (
                        <a className='text-neutral-800 font-medium hover:text-neutral-600 transition duration-200' href={link.title} key={link.title}>{link.title}</a>
                    ))
                }
                <button className='bg-[#2579f4] text-white px-4 py-2 font-bold rounded-lg shadow-lg text-shadow-md tracking-wide'>Get Started</button>
            </div>
        </div>
    )
}
