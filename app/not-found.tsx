import Image from 'next/image'
import Link from 'next/link'
import pinkStar from "@/assets/images/HeroSectionImages/star bg.png";
import pinkStarMobile from "@/assets/images/HeroSectionImages/starbg-mobile.png";
 import error404 from '@/assets/images/404.webp'
export default function NotFound() {
  return (
    <div className=' h-[100svh] overflow-hidden relative w-full flex justify-center flex-col items-center px-4'>
        <div className="absolute bg-darkBlue top-0 left-0 w-full h-full  -z-10">
        <Image
          src={pinkStar}
          alt="Picture pink stars"
          className="md:block hidden absolute animate-twinkle  object-cover w-full h-full top-0 left-1/2 -translate-x-1/2 "
        />
        <Image
        src={pinkStarMobile}
        className=" md:hidden block h-full  object-cover absolute opacity-60   top-1/2 -translate-y-1/2 right-0 z-10"
        alt="trees"
      />
      </div>

      <Image src={error404} alt='error img' className='object-cover w-[80vw] max-w-[500px]'></Image>
      <p className='text-xl text-white font-semibold my-4'>You are lost in Space!</p>
      <Link href="/" className='bg-[#FB23D5] rounded-full py-2 px-8   font-semibold  hover:bg-white hover:text-[#FB23D5] hover:shadow-white/80 transition-all duration-300 text-white hover:border-white'>Return Home</Link>
    </div>
  )
}