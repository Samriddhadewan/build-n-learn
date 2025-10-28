import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-[1600px] overflow-x-hidden">
      <p className="text-center text-base md:text-xl">
        Trade the Hottest Meme Coins Effortlessly
      </p>

      {/* card section here */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-[40%_60%] mx-auto gap-10">
        {/* card one */}
        <div className="-rotate-6 bg-[#ADD753] text-black rounded-xl">
          <div className="p-10">
            <h1 className="text-2xl font-semibold">
              What are <br /> Meme Coins?
            </h1>
            <p className="mt-9 text-base">
              Meme coins are like the jokers of the <br /> crypto world! They’re
              fun, quirky, and <br /> inspired by internet memes or jokes. <br /> Take
              Dogecoin, for example—it <br /> started as a joke but became super <br />
              popular thanks to its community and <br /> a little help from influencers
              like Elon <br /> Musk. Meme coins are more about <br /> fun and hype than
              serious business!
            </p>
          </div>
        </div>

        {/* card two */}
        <div className=" flex flex-col md:flex-row justify-between rotate-2 md:ml-8 rounded-xl bg-[#B341FF]">
          <div className=" text-white pl-10 pt-10">
            <h1 className="text-2xl font-semibold">
              So, why are <br /> they so popular?
            </h1>
            <p className="text-base mt-9">
              Meme coins are all about the community <br /> vibe and the buzz they create online. People <br /> love to jump on trends, and these coins ride <br /> the wave of internet culture. Coins like <br /> Shiba Inu and Pepe Coin became hits <br /> because they got everyone talking (and <br /> tweeting!). But remember, they’re mostly for <br /> fun—they don’t usually have fancy tech or <br /> big projects behind them.
            </p>
          </div>
          <Image src="/assets/images/image11.png" height={100} width={400} alt="shibainu" />
        </div>

        {/* card three */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-[60%] bg-[#0FCDC8] text-black rounded-xl p-10 text-right">
            <h2 className="text-2xl font-semibold">Should you <br /> try them out?</h2>
            <p className="mt-6 text-base">
             If you’re curious and want to join the fun, meme coins <br /> can be exciting! But here’s the deal: they can be a bit <br /> of a rollercoaster—prices can shoot up or drop fast. If <br /> you’re just starting, only invest what you can afford to <br /> lose and enjoy the ride. Think of it like a fun <br /> experiment, not a serious plan to get rich!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
