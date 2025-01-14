import Image from 'next/image';
import React from 'react';
import "@/app/sponsors.css";
import exide from '@/assets/images/ConvoSponsors/Exide.png'

const Sponsors: React.FC = () => {
  const sponsors = [
    '/sponsorImages/slider1_1.png',
    '/sponsorImages/slider1_2.png',
    '/sponsorImages/slider1_3.png',
    '/sponsorImages/slider1_4.png',
    '/sponsorImages/slider1_5.png',
    '/sponsorImages/slider1_6.png',
    '/sponsorImages/slider1_7.png',
    '/sponsorImages/slider1_8.png',
    '/sponsorImages/slider1_9.png',
    '/sponsorImages/slider1_10.png',
  ];

  return (
    <div className="bg-darkBlue py-8">
        <h1 className='text-center text-white sm:text-5xl text-3xl mb-12'>Our Sponsors</h1>
      {/* <div
        className="slider "
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
      </div> */}
      <div className="flex justify-center maxWidthForSections">
        <Image src={exide} alt='exide image' className='bg-white/90 p-2 max-w-[150px] object-cover  rounded-md'></Image>
      </div>
    </div>
  );
};

export default Sponsors;
