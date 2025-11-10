import { Container } from "@/components/container";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className='h-screen relative items-center [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]'>
      <div className="max-w-7xl mx-auto absolute pointer-events-none inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-200 to bg-neutral-200 pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-200 to bg-neutral-200 pointer-events-none z-0"></div>
      </div>
      <Container className="max-w-7xl mx-auto px-4 md:py-8">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-300 to-transparent pointer-none:">
        <div className="max-w-7xl mx-auto p-8">
           <Image src={"/hero-ui-v5.webp"} height={1000} width={1000} alt={"banner image"} className="rounded-2xl w-full object-cover object-top-left border border-neutral-200 shadow-md mask-b-from-40% to-100%" />
        </div>
        </div>
      </div>
    </div>
  )
}
