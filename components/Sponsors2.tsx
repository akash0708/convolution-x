import React from "react";
import "@/app/sponsor2.css";
import Image from "next/image";

const sponsors = [
  "slider1_1.png",
  "slider1_2.png",
  "slider1_3.png",
  "slider1_4.png",
  "slider1_5.png",
  "slider1_6.png",
  "slider1_7.png",
  "slider1_8.png",
  "slider1_9.png",
  "slider1_10.png",
];

const Sponsors2 = () => {
  const len = sponsors.length;

  return (
    <div className="bg-darkBlue">
      <h1 className='text-center text-white font-bold text-3xl mb-8'>Our Sponsors</h1>
      <div className="wrapper">
        {sponsors.map((src, index) => (
          <div
            key={`sponsor-${index}`}
            className="bg-white/80 flex items-center px-2 absolute item overflow-hidden"
            style={{
              animationDelay: `${(30 / len) * (len - index) * -1}s`,
              '--quantity': sponsors.length,
            } as React.CSSProperties}
          >
            <Image
              src={`/sponsorImages/` + src}
              alt={`sponsor image ${index + 1}`}
              height={80}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors2;
