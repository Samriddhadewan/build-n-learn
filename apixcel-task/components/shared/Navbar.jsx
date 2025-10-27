import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#0F0F11]  justify-between container mx-auto p-3 rounded-2xl'>
        {/* logo here */}
        <div className='flex items-center gap-1'>
            <h1 className='text-[#FFDD03] text-5xl font-bold'>OK</h1>
            <div className='flex flex-col tracking-normal leading-snug justify-between text-base font-medium'>
            <p className=''>Meme</p>
            <p className=''>Coin</p>
            </div>
        </div>

        {/* wallet details here  */}
        <div className='bg-[#FFDD03] py-3 px-4 rounded-2xl'>
            <div className='flex items-center gap-4 text-black'>
                <img src="assets/icons/wallet.png" alt="" />   
                <p className='font-semibold'>0xDe1...6F33</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar