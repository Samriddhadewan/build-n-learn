import About from "@/components/About";
import BannerSection from "@/components/BannerSection";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div className="px-3 lg:px-0 bg-[#171717] py-4 text-white min-h-screen">
      <Navbar />
      <BannerSection />
      <About />
    </div>
  );
};

export default page;
