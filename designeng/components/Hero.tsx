export default function Hero() {
    return (
        <div className="flex px-4 py-2 items-center flex-col w-full my-20 ">
            <button className="border rounded-full px-4 py-1 border-gray-200 font-semibold hover:bg-gray-200 transition cursor-pointer duration-200 bg-gray-100 text-gray-600">
                We are hiring Founding Ruby Engineers &#8594;
            </button>

            <h1 className="text-6xl font-medium mt-8 text-center text-neutral-900 tracking-tighter ">Magically simplify <br />
                accounting and taxes</h1>
            <p className="text-neutral-600 mt-8 text-center text-xl">Automated bookkeeping, effortless tax filing, real‑time insights. <br /> Set up in 10 mins. Back to building by 4:02pm.
            </p>

            <div className="flex mt-8 gap-2">
                <button className='bg-[#2579f4] text-white px-4 py-2 font-bold rounded-lg shadow-lg text-shadow-md tracking-wide cursor-pointer'>Get Started</button>
                <button className=' text-neutral-800 px-4 py-2 font-semibold rounded-lg hover:bg-gray-300 transition cursor-pointer duration-300 tracking-wide '>Pricing &#8594;</button>
            </div>
        </div>
    )
}
