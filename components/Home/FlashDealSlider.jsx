'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const deals = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max',
    price: '$1149.00',
    imageUrl: '/Assets/slider (4).webp',
  },
  {
    id: '2',
    title: 'Beauty Jelly Lipstick',
    price: '$32.00',
    imageUrl: '/Assets/slider (3).webp',
  },
  {
    id: '3',
    title: 'Leather Ladies Bag',
    price: '$15.00',
    imageUrl: '/Assets/slider (2).webp',
  },
  {
    id: '4',
    title: 'Samsung S24 Ultra',
    price: '$1150.00',
    imageUrl: '/Assets/slider (1).webp',
  },
  {
    id: '5',
    title: 'Smart Watch Bluetooth',
    price: '$150.00',
    imageUrl: '/Assets/slider (5).webp',
  },
];

const FlashDealsSlider = () => (
  <div className="px-0 md:px-12 md:pt-4">
    <div className="relative md:bg-gray-100 md:py-10 md:shadow md:rounded-lg">
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-4 md:px-8">
        {/* Left Section */}
        <div className="bg-blue-600 text-white p-6 rounded-lg h-full hidden md:flex flex-col justify-between">
          <a
            href="#"
            className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition"
          >
            View All
          </a>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 col-span-1">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            speed={2000}
            navigation
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <img
                  src={deal.imageUrl}
                  alt={deal.title}
                  className="md:shadow md:rounded-md w-full"
                />
                <h3 className="text-sm font-medium text-black py-2 px-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 font-semibold px-2">
                  {deal.price}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              width: 30px;
              height: 30px;
              background-color: #f3f4f6;
              border-radius: 9999px;
              padding: 8px;
              color: #1f2937;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: #3b82f6;
              color: white;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 16px;
              font-weight: bold;
            }

            @media (max-width: 768px) {
              .swiper-button-next,
              .swiper-button-prev {
                display: none;
              }
            }

            .swiper-pagination {
              display: none !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  </div>
);

export default FlashDealsSlider;
