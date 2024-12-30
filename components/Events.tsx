"use client"
import "../app/events.css"
import React, { useState, useEffect } from 'react';

interface ContentItem {
  title: string;
  description: string;
}

const contentData: ContentItem[] = [
  {
    title: 'PRODUCT NAME 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
  {
    title: 'PRODUCT NAME 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
  {
    title: 'PRODUCT NAME 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
  {
    title: 'PRODUCT NAME 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
  {
    title: 'PRODUCT NAME 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
  {
    title: 'PRODUCT NAME 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita tenetur consectetur.',
  },
];

const Events: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rotateAdd = 360 / contentData.length;

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= contentData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? contentData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider2">
      <div className="title">Slider Pizza!</div>
      <div className="images" style={{ '--rotate': `${activeIndex * rotateAdd}deg` } as React.CSSProperties}>
        {contentData.map((_, index) => (
          <div
            className="item"
            style={{ '--i': index + 1 } as React.CSSProperties}
            key={index}
          >
            <img src={`/planet_${index + 1}.png`} alt={`Product ${index + 1}`} className="h-[200px] h-auto " />
          </div>
        ))}
      </div>
      <div className="content">
        {contentData.map((item, index) => (
          <div
            className={`item ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <h1>{item.title}</h1>
            <div className="des">{item.description}</div>
            <button>See more</button>
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button id="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Events;

