import React from 'react'
import timeline from '@/assets/images/SparkHack/timeline.png'
import noTexttimeline from '@/assets/images/SparkHack/pretimeline-notext.png'

import Image from 'next/image'
const Timeline = () => {
  return (
    <div className=' '>
        <div className="2xl:max-w-[1280px] xl:max-w-[1200px] mx-auto px-0">
        <h2 className="text-4xl font-medium text-darkBlue pt-8 text-center sm:mt-12 mt-8">
          Timeline
        </h2>
<div className="relative w-full py-6">
    {/* top right-------------------- */}
    <div className="absolute right-[2%] top-[17%] w-[30%]">
        <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>
{/* ----------------second left--------------- */}
    <div className="absolute left-[2%] top-[27%] w-[23%]">
    <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>

    {/* -----------------third right-------------------- */}
    <div className="absolute right-[3%] top-[35%] w-[30%]">
    <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>
    {/* ------------------------fourth right-------------------- */}
    <div className="absolute right-[33%] top-[50%] w-[35%]">
    <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>

    {/* ------------------------fifth right-------------------- */}
    <div className="absolute right-[33%] top-[65%] w-[35%]">
    <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>
    {/* ------------------------sixth right-------------------- */}
    <div className="absolute right-[13%] top-[88%] w-[35%]">
    <h1 className="text-black text-center sm:text-lg text-xs">6th March</h1>
        <p className='text-[9px] sm:text-base text-center '>Online Pitching
        participants will have to pitch their ideas infront of the panel of judges</p>
    </div>

      <Image src={noTexttimeline} alt='pretimeline' className="min-h-[320px] lg:opacity-100  bg-cover" />
</div>
        </div>
        
      
    </div>
  )
}

export default Timeline
