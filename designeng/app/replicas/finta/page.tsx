import { Container } from "@/components/finta-components/container";
import Hero from "@/components/finta-components/Hero";
import { Navbar } from "@/components/finta-components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen items-center [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-7xl">
        <div className="to pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-px bg-neutral-200 bg-linear-to-b from-neutral-200"></div>
        <div className="to pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-px bg-neutral-200 bg-linear-to-b from-neutral-200"></div>
      </div>
      <Container className="mx-auto max-w-7xl px-4 md:py-8">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="pointer-none: absolute inset-x-0 h-px w-full bg-gradient-to-r from-neutral-300/50 via-neutral-300 to-transparent">
          <div className="mx-auto max-w-7xl p-8">
            <Image
              src={"/hero-ui-v5.webp"}
              height={1000}
              width={1000}
              alt={"banner image"}
              className="w-full rounded-2xl border border-neutral-200 to-100% mask-b-from-40% object-cover object-top-left shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
