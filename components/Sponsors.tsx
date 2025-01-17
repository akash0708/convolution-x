import Image from 'next/image';
import React from 'react';
import "@/app/sponsors.css";
import techEle from '@/assets/images/ConvoSponsors/techno ele.webp'
import exide from '@/assets/images/ConvoSponsors/Exide.webp'

const Sponsors: React.FC = () => {
  const sponsors = [
    '/sponsorImages/slider1_1.webp',
    '/sponsorImages/slider1_2.webp',
    '/sponsorImages/slider1_3.webp',
    '/sponsorImages/slider1_4.webp',
    '/sponsorImages/slider1_5.webp',
    '/sponsorImages/slider1_6.webp',
    '/sponsorImages/slider1_7.webp',
    '/sponsorImages/slider1_8.webp',
    '/sponsorImages/slider1_9.webp',
    '/sponsorImages/slider1_10.webp',
  ];

  return (
    <div className="bg-darkBlue py-8">
        <h1 className='text-center text-white sm:text-5xl text-3xl mb-12'>Our Sponsors</h1>
        <>
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
        </>
      <div className=" maxWidthForSections">
        <p className='text-white text-center text-xl mb-4'>Associate Sponsors</p>
        <div className="flex gap-4 justify-center">

<a href="https://www.exideindustries.com/" target='_blank' className='bg-white/90 p-2 rounded-md'>
        <Image src={exide} alt='exide image' className=' max-w-[150px] object-cover  '></Image>
</a>
<a href="https://www.techno.co.in/" target='_blank' className='bg-white/90 p-2 rounded-md'>
        <Image src={techEle} alt='exide image' className=' max-w-[150px] object-cover '></Image>
</a>
        </div>
      <p className='text-white text-center sm:text-base text-sm mt-8'>Want to be part of Convolution X? Want to be a part of Convolution-X ? Join us as a sponsor of Convolution! Reach out to our team for all the details and queries.</p>
      </div>
    </div>
  );
};

export default Sponsors;
