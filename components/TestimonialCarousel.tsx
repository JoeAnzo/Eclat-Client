"use client";
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
const reviews = [
    {
        id:1,
        userName:"Elena R",
        userPicture:"/images/Testimonials/bg-1.jpg",
        review:"Lam absolutely in love! The scent is captivating, unique, and lasts all day without being overpowering.",
        rating:5
    },
    {
        id:2,
        userName:"Jovia K",
        userPicture:"/images/Testimonials/bg-2.jpg",
        review:"A masterpiece in a bottle. I was hesitant to buy fragrance online, but the detailed scent notes helped me find exactly what I was looking for.",
        rating:5
    },
    {
        id:3,
        userName:"Aisha M",
        userPicture:"/images/Testimonials/bg-4.jpg",
        review:"Top-tier customer service and fast delivery! This perfume is magical - it settles into warm, inviting aroma that evolves beautifully on the skin.",
        rating:5
    },
    {
        id:4,
        userName:"Elena R",
        userPicture:"/images/Testimonials/bg-5.jpg",
        review:"Lam absolutely in love! The scent is captivating, unique, and lasts all day without being overpowering",
        rating:5
    },
    {
        id:5,
        userName:"Sarah M",
        userPicture:"/images/Testimonials/bg-6.jpg",
        review:"Beautiful presentation and an even more beautiful fragrance! The bottlle looks gorgeous on my vanity, and the scent lasts from morning well into the evening",
        rating:5
    }
]
export default function TestimonialCarousel() {
  return (
    <section className="w-full mx-auto max-w-4xl py-auto py-12 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        effect='coverflow'
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        // navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView:2},
        }}
        }}
        className="relative pb-12 !className"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full min-h-[220px]">
                <div className="relative w-16 h-16 over-flow-hidden rounded-full flex-shrink-0 bg-gray-100 ">
                    <Image
                    src={item.Picture}
                    alt={item.userName}
                    fill
                    sizes="64px"
                    className="object-cover"
                    />
                </div>
                <p className="text-(--text) italic text-sm leading-relaxed mb-6">
                    {
                        item.review
                    }
                </p>
                <h4 className="font-semibold text-(--text) text-sm">
                    {
                        item.userName
                    }
                </h4>
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
  )
}

