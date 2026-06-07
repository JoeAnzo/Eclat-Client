"use client";

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageItems = [
  {
    id: 1,
    src: '/images/bg-1.jpg',
    alt: 'Image 1',
    title: 'Bright Landscape'
  },
  {
    id: 2,
    src: '/images/bg-2.jpg',
    alt: 'Image 2',
    title: 'Serene Adventure'
  },
  {
    id: 4,
    src: '/images/bg-4.jpg',
    alt: 'Image 4',
    title: 'Summer Vibes'
  },
  {
    id: 5,
    src: '/images/bg-5.jpg',
    alt: 'Image 5',
    title: 'Coastal Escape'
  },
  {
    id: 6,
    src: '/images/bg-6.jpg',
    alt: 'Image 6',
    title: 'Urban View'
  }
];

const Couresel = () => {

  useEffect(() => {
    // ensure refs exist for navigation — no runtime work needed here,
    // Swiper will read refs via onBeforeInit below.
  }, []);

  return (
    <section className="w-full mx-auto relative h-[60vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={18}
        slidesPerView={1}
        loop={true}
        // navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        grabCursor={true}
        watchOverflow={true}
        touchRatio={1}
        simulateTouch={true}
        threshold={5}
        allowTouchMove={true}
        onBeforeInit={(swiper) => {
          // attach custom navigation elements as Swiper expects DOM nodes
          // assign only if refs are available
          // @ts-ignore
          // if (typeof swiper.params !== 'undefined' && prevRef.current && nextRef.current) {
          //   // @ts-ignore
          //   swiper.params.navigation.prevEl = prevRef.current;
          //   // @ts-ignore
          //   swiper.params.navigation.nextEl = nextRef.current;
          // }
        }}
        className="relative overflow-hidden"
      >
        {imageItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full z-10 h-[60vh] bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="100vw 30vh"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav buttons for better mobile touch targets */}
  
      <style jsx global>{`
        /* larger hit area for touch devices */
        // .touch-manipulation {
        //   touch-action: manipulation;
        // }
        .swiper-pagination {
          bottom: 0.75rem;
          z-index: 30;
        }
        .swiper-pagination-bullet {
          background: rgba(148,163,184,0.55);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #4A266D;
        }
      `}</style>
    </section>
  );
};

export default Couresel;
