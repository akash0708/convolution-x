import React from "react";
import Image from "next/image";
import texture1 from "@/assets/images/Inquizzitive/texture1.png";
import qm from "@/assets/images/Inquizzitive/qm.png";
import pixelBox from "@/assets/images/Inquizzitive/pixelBox.png";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
const QuizMaster = () => {
  return (
    <div id="quizmaster" className=" py-12 relative  flex items-center  ">
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-[#1A0F52]"></div>
      <Image
        src={texture1}
        alt="texture"
        className="absolute left-1/2  -translate-y-1/2  -translate-x-1/2 max-w-[600px] min-w-[300px]   w-[40vw] object-cover -z-20
      "
      ></Image>
      <Image
        src={pixelBox}
        alt="hero"
        className="absolute bottom-[-15%] right-[0%] -z-10 object-cover max-w-[400px] min-w-[200px] w-[35vw]  "
      />
      <div className="h-full w-full  maxWidthForSections ">
        <h2 className="sm:text-5xl text-3xl font-medium text-white  mb-8 text-center ">
          Quiz Master
        </h2>
        {/* <p className="text-center sm:text-2xl text-lg  text-[#FEB50D]">
          Mystery quizmaster alert—guess if you can!
        </p> */}

        <div className="flex flex-col sm:gap-y-2 gap-y-1 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#ffff] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop:blur-sm  rounded-2xl mx-auto sm:max-w-[350px] max-w-[80vw] min-w-[250px]  backdrop-blur-sm">
          <div className="overflow-hidden flex items-start rounded-full size-56 ">
            <Image src={qm} alt="quizmaster"></Image>
          </div>
          <div className="flex items-center gap-2 mt-1">
                    <h2 className="font-semibold sm:text-xl text-base  ">
                    Samanway Banerjee
                    </h2>
                    <Link target="_blank" href="https://drive.google.com/file/d/1ahUqmkCEYIUHHkHqoDIvbD5xlSZgNX4d/view" className="">
                      <FaInfoCircle />
                    </Link>
                  </div>
          
                <p className="text-center sm:text-base text-xs">
                Samanway Banerjee is a quizmaster and media professional, known for hosting engaging quizzes across schools, colleges, and corporates.
                </p>
        </div>
      </div>
    </div>
  );
};

export default QuizMaster;
