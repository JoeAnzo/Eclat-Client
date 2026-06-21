"use client";
import Image from 'next/image';
import {Quote} from 'lucide-react'
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
        userPicture:"/images/Testimonials/pic1.jpg",
        review:"Iam absolutely in love! The scent is captivating, unique, and lasts all day without being overpowering.",
        rating:5
    },
    {
        id:2,
        userName:"Jovia K",
        userPicture:"/images/Testimonials/pic2.jpg",
        review:"A masterpiece in a bottle. I was hesitant to buy fragrance online, but the detailed scent notes helped me find exactly what I was looking for.",
        rating:5
    },
    {
        id:3,
        userName:"Aisha M",
        userPicture:"/images/Testimonials/pic3.jpg",
        review:"Top-tier customer service and fast delivery! This perfume is magical - it settles into warm, inviting aroma that evolves beautifully on the skin.",
        rating:5
    },
    {
        id:4,
        userName:"Martha K",
        userPicture:"/images/Testimonials/pic4.jpg",
        review:"Iam absolutely in love! The scent is captivating, unique, and lasts all day without being overpowering",
        rating:5
    },
    {
        id:5,
        userName:"Sarah M",
        userPicture:"/images/Testimonials/pic5.jpg",
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
        className="relative pb-12 !className"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#F5F5F5] relative p-6 rounded-2xl border border-(--secondary-color) shadow-sm flex flex-col justify-between h-full min-h-55">
                <div className='absolute left-8 top-8'>
                  <Quote className="text-(--primary-color)"/>
                </div>
                <div className="relative w-16 h-16 over-flow-hidden rounded-full shrink-0 ">
                    <Image
                    src={item.userPicture}
                    alt={item.userName}
                    fill
                    sizes="64px"
                    className="object-cover rounded-full"
                    />
                </div>
                <p className="text-(--text) italic text-md leading-relaxed my-6">
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
          background: var(--primary-color);
        }
      `}</style>
    </section> 
  )
}

