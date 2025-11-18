export default function Hero() {
  return (
    <div className="my-20 flex w-full flex-col items-center px-4 py-2">
      <button className="cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-4 py-1 font-semibold text-gray-600 transition duration-200 hover:bg-gray-200">
        We are hiring Founding Ruby Engineers &#8594;
      </button>

      <h1 className="mt-8 text-center text-6xl font-medium tracking-tighter text-neutral-900">
        Magically simplify <br />
        accounting and taxes
      </h1>
      <p className="mt-8 text-center text-xl text-neutral-600">
        Automated bookkeeping, effortless tax filing, real‑time insights. <br />{" "}
        Set up in 10 mins. Back to building by 4:02pm.
      </p>

      <div className="mt-8 flex gap-2">
        <button className="cursor-pointer rounded-lg bg-[#2579f4] px-4 py-2 font-bold tracking-wide text-white shadow-lg text-shadow-md">
          Get Started
        </button>
        <button className="cursor-pointer rounded-lg px-4 py-2 font-semibold tracking-wide text-neutral-800 transition duration-300 hover:bg-gray-300">
          Pricing &#8594;
        </button>
      </div>
    </div>
  );
}
