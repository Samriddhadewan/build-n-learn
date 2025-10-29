import React from 'react'

export default function Hero() {
  return (
    <div className='hero-root'>
      <div className='badge'><span>What are form 1099 filling requirements?</span>
        <svg width="8" height="8" fill="none" viewBox='0 0 16 16'><path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>
      </div>

      <h1 className='hero-title'>Magically simplify accounting and taxes</h1>
      <p className='hero-subTitle'>Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 5:24pm.
      </p>

      <div className='hero-cta'>
        <button className="btn">Start free trial</button>
        <button className='btn btn-secondary'><span>Pricing <svg width="8" height="8" fill="none" viewBox='0 0 16 16'><path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg> </span></button>

      </div>


    </div>
  )
}
