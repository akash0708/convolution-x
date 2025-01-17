// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import "../app/Galleria.css";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen py-16">
        <div className="absolute top-0 w-full h-full -z-10 bg-darkBlue"></div>
        <h1 className="sm:text-5xl text-3xl  text-white text-center sm:mb-12 mb-8">
          Gallery
        </h1>

      <div
        id="gallery"
        className="outer-container-scroll galleryContainer relative "
        data-direction="right"
        data-speed="fast"
      >
        
        <div className="scroller" data-direction="right" data-speed="fast">
          <div className="scroller__inner">
            <Image
              className="item first big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/1.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/2.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/3.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/4.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/5.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />

            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/6.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/7.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/8.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/9.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/10.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />

            <Image
              className="item first big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/11.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/12.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/13.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/14.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item first big object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/15.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />

            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/16.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/17.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/18.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/19.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/20.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />

            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/21.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/22.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/23.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/24.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
            <Image
              className="item object-cover w-full h-full"
              data-fancybox="gallery"
              src="/Galleria/25.webp"
              width={200}
              height={150}
              alt="gallery"
              draggable={false}
              placeholder="blur"
              blurDataURL="/Galleria/blur.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
