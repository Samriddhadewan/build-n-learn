export const Hero = () => {
  return (
    <div className="my-40 w-full flex flex-col items-center text-center">
      <h1 className="text-7xl leading-snug max-w-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-500">Unleash the power of <span className="text-primary">intuitive</span> finance
      </h1>
      <p className="max-w-3xl mx-auto text-xl mt-10 text-neutral-300 selection:bg-white">Say goodbye to the outdated financial tools. Every small business owner, regardless of the <span className="text-primary">background</span>, can now manage their business like a pro. Simple. Intuitive. And never boring.
      </p>
      <div className="flex justify-center mt-8 w-full max-w-lg">
        <input type="text"
          className="border border-neutral-600 mr-4 flex-1 rounded-xl placeholder:text-gray-400 px-4 text-white focus:ring-1 focus:ring-primary focus:outline-none transition duration-200"
          placeholder="Please Enter email"
        />
        <button className="relative rounded-xl px-4 py-2 border border-neutral-700 text-white cursor-pointer">
          <div className="absolute w-full h-px inset-x-0 -bottom-[1px] bg-linear-to-r from-transparent via-(--color-primary)  to-transparent"></div>
          join The waitlist
        </button>
      </div>
    </div>
  )
}
