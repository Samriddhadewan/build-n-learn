import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="relative min-h-[50vh] sm:min-h-[80vh] flex items-center justify-center">
      <div className="w-7xl z-20">
        <h1 className="text-4xl sm:text-[100px] text-center font-semibold leading-[1.4] sm:leading-[1.1]">
          Ain&apos;t{" "}
          <span className="bg-[#B341FF] px-5 py-1 rounded-full">Nobody</span>{" "}
          <br /> Got time for{" "}
          <span className="bg-[#C2F929] pt-3 px-4 text-black rounded-xl">
            Boring
          </span>{" "}
          <br /> <span className="text-[#FFDD03]">Investments</span>
        </h1>
      </div>

      {/* decorative images  */}
      <div className="absolute top-[20%] z-1 w-[100px] sm:w-[180px] md:w-[400px]">
        <Image
          src="/assets/images/bg1.png"
          alt="bg1"
          width={250}
          height={150}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute hidden sm:block left-0 bottom-8">
        <Image src="/assets/images/image4.png" height={200} width={200} alt="leftCoinImage" />
      </div>


      <div className="absolute hidden sm:block  right-0 top-0">
        <Image src="/assets/images/image5.png" height={200} width={200} alt="RightCoinImage" />
      </div>


      <div className="absolute left-[30%] z-22 top-39">
        <Image src="/assets/images/image1.png" height={100} width={100} alt="RightCoinImage" />
      </div>


      <div className="absolute right-[18%] z-24 bottom-50">
        <Image src="/assets/images/image2.png" height={100} width={200} alt="RightCoinImage" />
      </div>

      <div className="absolute left-[23%] bottom-23">
        <Image src="/assets/images/image3.png" height={100} width={150} alt="RightCoinImage" />
      </div>


      <div className="absolute right-[41%] z-21 top-90">
        <Image src="/assets/images/image7.png" height={100} width={150} alt="RightCoinImage" />
      </div>

      <div className="absolute left-[40%] z-30 top-[38%]">
        <Image src="/assets/images/image6.png" height={100} width={100} alt="RightCoinImage" />
      </div>



    </div>
  );
};

export default BannerSection;
