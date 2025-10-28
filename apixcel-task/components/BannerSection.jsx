import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="relative overflow-x-hidden min-h-[50vh] sm:min-h-[80vh] flex items-center justify-center">
      <div className="w-2xl md:w-5xl z-20">
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
      <div className="absolute md:top-[20%] z-1 w-[200px] sm:w-[180px] md:w-[400px]">
        <Image
          src="/assets/images/bg1.png"
          alt="bg1"
          width={250}
          height={150}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute hidden sm:block left-0 bottom-8">
        <Image
          src="/assets/images/image4.png"
          height={200}
          width={200}
          alt="leftCoinImage"
        />
      </div>

      <div className="absolute hidden sm:block  right-0 top-0">
        <Image
          src="/assets/images/image5.png"
          height={200}
          width={200}
          alt="RightCoinImage"
        />
      </div>

      <div className="absolute  top-[12%] left-[20%] w-[30px] md:w-[100px]  md:left-[30%] z-22 md:top-39">
        <Image
          src="/assets/images/image1.png"
          height={100}
          width={100}
          alt="MiddleCoin"
        />
      </div>

      <div className="absolute w-[90px] bottom-20 right-[-40] md:w-[130px] md:right-[18%] z-24 md:bottom-50 rotate-7">
        {" "}
        <Image
          src="/assets/images/image2.png"
          height={100}
          width={200}
          alt="Bag"
        />{" "}
      </div>

      <div className="absolute bottom-35 left-[-50] rotate-8 md:rotate-0 md:left-[23%] md:bottom-23 w-[90px] md:w-[130px]">
        <Image
          src="/assets/images/image3.png"
          height={100}
          width={150}
          alt="book"
        />
      </div>

      <div className="absolute right-[41%] z-21 top-90 hidden sm:block">
        <Image
          src="/assets/images/image7.png"
          height={100}
          width={150}
          alt="bulb"
        />
      </div>

      <div className="absolute top-[35%] right-[30%] w-[40px] md:w-[100px] md:left-[40%] md:z-30 md:top-[38%]">
        <Image
          src="/assets/images/image6.png"
          height={100}
          width={100}
          alt="clock"
        />
      </div>

      <div className="absolute z-27 w-[30px] h-[30px] top-[10%] right-[10%] md:right-[25%] md:top-[20%]">
        <div className="flex items-center">
          <Image
            src="/assets/images/image9.png"
            height={20}
            width={30}
            alt="thunderImageSmall"
            className="h-[50px]"
          />
          <Image
            src="/assets/images/image8.png"
            height={100}
            width={100}
            alt="thunderImageSmall"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
