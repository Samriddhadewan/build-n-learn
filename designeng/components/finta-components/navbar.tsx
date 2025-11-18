import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          draggable="false"
          height={50}
          width={90}
          loading="lazy"
          alt="logo"
        />
      </Link>

      <div className="flex items-center justify-between gap-8">
        {links.map((link) => (
          <a
            className="font-medium text-neutral-800 transition duration-200 hover:text-neutral-600"
            href={link.title}
            key={link.title}
          >
            {link.title}
          </a>
        ))}
        <button className="rounded-lg bg-[#2579f4] px-4 py-2 font-bold tracking-wide text-white shadow-lg text-shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};
