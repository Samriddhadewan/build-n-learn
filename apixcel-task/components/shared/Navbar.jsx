import Image from "next/image";
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#232327]  justify-between container mx-auto py-3 px-4 rounded-2xl'>
        {/* logo here */}
        <div className='flex items-center gap-1'>
            <h1 className='text-[#FFDD03] text-5xl font-bold'>OK</h1>
            <div className='flex flex-col tracking-normal justify-between text-base font-medium'>
            <p className=''>Meme</p>
            <p className=''>Coin</p>
            </div>
        </div>

        {/* wallet details here  */}
        <div className='bg-[#FFDD03] py-3 px-4 rounded-xl'>
            <div className='flex items-center gap-4 text-black'>
                <Image src="/assets/icons/wallet.png" width={25} height={25} alt="" />   
                <p className='font-semibold'>0xDe1...6F33</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar