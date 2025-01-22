import Image from 'next/image'
import React from 'react'
import line2 from '@/assets/images/Algomaniac/line2.png'
import mountain from '@/assets/images/Algomaniac/timelimeMountain.png'
import stone1 from "@/assets/images/Algomaniac/stone1.png";
import stone2 from "@/assets/images/Algomaniac/stone2.png";
import stone3 from "@/assets/images/Algomaniac/stone3.png";
import decisiaBgMobile from "@/assets/images/Algomaniac/starbgMobile.png";
import decisiaBg from "@/assets/images/Algomaniac/star bg.png";

const timelineDetails: { date: string; task: string,head:string }[] = [
  {
    date: "16th Feb",
    head: "Registration Deadline",
    task: "Registration for Algomaniac will end on 16th February at 11:59 PM .",
  },
  {
    date: "17th Feb",
    head: "Preliminary Round",
    task: "The prelims will be held on  17th February 8pm-10pm.",
  },
  {
    date: "22nd Feb",
    head: "Final Round",
    task: "The finals will be held offline on 22nd February.",
  },
  
];
const stones = [stone1, stone2, stone3];


const TimelineAlgo = () => {
  return (
    <div id='timeline' className='min-h-screen py-12 relative'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2C1071] via-[#4137C6] to-[#C156CE] -z-30"
      >
        <Image
            src={decisiaBg}
            className=" hidden md:block w-full object-cover animate-twinkle  absolute   top-[0]  right-0 "
            alt="trees"
          />
          <Image
            src={decisiaBgMobile}
            className=" md:hidden block w-full  object-cover absolute opacity-80   left-1/2 -translate-x-1/2 bottom-0 "
            alt="trees"
          />

      <Image src={mountain} alt='Mountain Image'  className='absolute -bottom-1 left-0 '/>
      <Image src={line2} alt='Mountain Image'  className='absolute object-cover w-full top-[10%] left-0 '/>
      </div>
      <div className="maxWidthForSections ">
        <h2 className="sm:text-5xl text-3xl font-medium text-white text-shadow-dark text-center ">
          Timeline
        </h2>
        {/* --------------------------for desktop-------------------------- */}

        <div className="hidden md:grid mt-12 grid-cols-3   lg:gap-6 md:gap-4 ">
          {timelineDetails.map((day, index) => {
            return (
              <div
                key={index}
                className="text-center shadow-lg shadow-white/50 backdrop-blur-sm bg-white/10 px-4 py-6 rounded-xl max-w-[350px]"
              >
                <h3 className="text-white text-xl ">{day.date}</h3>
                
                <div className="h-1 bg-white rounded-full w-[30%] mx-auto mt-2 mb-4"></div>
                <p className='sm:text-lg text-sm text-[#E485D7]'>{day.head}</p>
                <p className="text-white/90 lg:text-lg md:text-sm">{day.task}</p>
              </div>
            );
          })}
        </div>
        <div className=" hidden md:grid w-full mt-12 grid-cols-3  gap-6">
          <div className="group flex justify-center mt-28 relative  items-end ">
            <div className="w-[80%] min-w-[150px] relative animate-float-slow">
              <Image
                src={stone1}
                alt="floating stone"
                className="w-full object-cover"
              ></Image>
              
            </div>
          </div>
          <div className="group flex justify-center  items-start">
            <div className="w-[75%] min-w-[130px]  mt-24 relative animate-float-slow flex justify-center">
              <Image
                src={stone2}
                alt="floating stone"
                className=" object-cover"
              ></Image>
              
            </div>
          </div>
          {/* <div className="group flex justify-center mt-28  items-end">
            <div className="w-[65%] min-w-[100px] animate-float">
              
              <Image
                src={stone3}
                alt="floating stone"
                className=" object-cover"
              ></Image>
            </div>
          </div> */}
          <div className="group flex justify-center  items-start">
            <div className="w-[80%] min-w-[150px] animate-float-medium delay-500">
              
              <Image
                src={stone3}
                alt="floating stone"
                className=" object-cover"
              ></Image>
            </div>
          </div>
        </div>
         {/* -----------------for mobile and tabs----------------- */}
         <div className="md:hidden flex flex-col gap-6 mt-12">
          {timelineDetails.map((day, index) => {
            return (
              <div key={index} className={`flex items-center justify-between ${index % 2==0 ? 'flex-row-reverse' :''}`}>
                <div className="animate-float-slow sm:w-[37vw] w-[45vw] flex items-center"
                style={{ animationDelay: `${(10 * Math.random()).toFixed(3) }s` }} >
                  <Image
                    src={stones[index]}
                    alt="floating stone"
                    className="w-full object-cover"
                  ></Image>
                  
                </div>

                <div className="text-center shadow-lg h-auto w-[45vw] shadow-white/50 bg-white/10 px-4 py-6 rounded-xl">
                  <h3 className="text-white">{day.date}</h3>
                  <div className="h-1 bg-[#FC9D1D] rounded-full w-[30%] mx-auto mt-2 mb-4"></div>
                  <p className="text-white sm:text-base text-sm">{day.task}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>




    </div>
  )
}

export default TimelineAlgo
