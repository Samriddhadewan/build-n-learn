export const Hero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center text-center">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-7xl leading-snug font-bold tracking-tight text-transparent">
        Unleash the power of <span className="text-primary">intuitive</span>{" "}
        finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-xl text-neutral-300 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the <span className="text-primary">background</span>, can
        now manage their business like a pro. Simple. Intuitive. And never
        boring.
      </p>
      <div className="mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-200 placeholder:text-gray-400 focus:ring-1 focus:outline-none"
          placeholder="Please Enter email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="absolute inset-x-0 -bottom-[1px] h-px w-full bg-linear-to-r from-transparent via-(--color-primary) to-transparent"></div>
          join The waitlist
        </button>
      </div>
    </div>
  );
};
