import React from "react";
import "@/app/sponsor2.css";
import Image from "next/image";

const sponsors = [
  "slider1_1.webp",
  "slider1_2.webp",
  "slider1_3.webp",
  "slider1_4.webp",
  "slider1_5.webp",
  "slider1_6.webp",
  "slider1_7.webp",
  "slider1_8.webp",
  "slider1_9.webp",
  "slider1_10.webp",
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
