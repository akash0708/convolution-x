import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface MyComponentProps {
    planet: string; // Custom text style
    about: string; // Custom text style
    buttonDesign: string; // Custom text style
    logo: string; // Custom text style
  }
const EventHero : React.FC<MyComponentProps> = ({ planet,about,buttonDesign,logo }) => {
  return (
    <div>
      <div className=" grid grid-cols-1 gap-y-2 md:grid-cols-2 ">
          <div className="flex justify-center items-center ">
            <Image width={400} height={400}
              className="sm:w-full h-auto sm:max-w-[400px] w-[70vw] animate-float-slow"
              src={planet}
              alt="sparkhack planet"
            ></Image> 
          </div>

          <div className="flex flex-col justify-center items-center gap-y-6">
            <Image width={400} height={400} src={logo} alt="logo" className="sm:w-[35vw] object-cover w-[70vw]"></Image>
            <p className="text-white text-center sm:text-xl text-base text-shadow-dark">
            {about}
            </p>
            <Link href="/event/register?eventName=sparkhack" className={`
            shadow-lg py-2 sm:px-8 px-6 text-base sm:text-xl rounded-full  transition-all duration-300 ${buttonDesign}`}>
                <p className="    ">
                  Register Now
                </p>
            </Link>
           
          </div>
        </div>
    </div>
  )
}

export default EventHero
