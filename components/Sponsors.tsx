import Image from 'next/image';
import React from 'react';
import "@/app/sponsors.css";


const Sponsors: React.FC = () => {
  const sponsors = [
    '/images/slider1_1.png',
    '/images/slider1_2.png',
    '/images/slider1_3.png',
    '/images/slider1_4.png',
    '/images/slider1_5.png',
    '/images/slider1_6.png',
    '/images/slider1_7.png',
    '/images/slider1_8.png',
    '/images/slider1_9.png',
    '/images/slider1_10.png',
  ];

  return (
    <div className="bg-darkBlue py-8">
        <h1 className='text-center text-white font-bold text-3xl mb-8'>Our Sponsors</h1>
      <div
        className="slider"
        style={{
          '--width': '150px',
          '--height': '80px',
          '--quantity': sponsors.length,
        } as React.CSSProperties}
      >
        <div className="list">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className="item flex items-center bg-white/80 backdrop-blur-sm  rounded-md p-1"
              style={{ '--position': index + 1 } as React.CSSProperties}
            >
              <Image
                height={50}
                width={100}
                className="w-full"
                src={src}
                alt={`Sponsor ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div data-reverse="true"
        className="slider mt-6"
        style={{
          '--width': '150px',
          '--height': '80px',
          '--quantity': sponsors.length,
        } as React.CSSProperties}
      >
        <div className="list">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className="item flex items-center bg-white/80 backdrop-blur-sm  rounded-md p-1"
              style={{ '--position': index + 1 } as React.CSSProperties}
            >
              <Image
                height={50}
                width={100}
                className="w-full"
                src={src}
                alt={`Sponsor ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
