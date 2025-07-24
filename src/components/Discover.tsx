'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Discover = () => {
  const containerRef = useScrollReveal();

  const destinations = [
    {
      id: 1,
      name: 'Bali',
      tours: '24 tours available',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
    },
    {
      id: 2,
      name: 'Hawaii',
      tours: '15 tours available',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    },
    {
      id: 3,
      name: 'Hvar',
      tours: '18 tours available',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    },
    {
      id: 4,
      name: 'Whitehaven',
      tours: '32 tours available',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    },
  ];

  return (
    <section id="discover" className="section">
      <h2 className="section__title">
        Discover the most <br /> attractive places
      </h2>

      <div ref={containerRef} className="pt-8 md:pt-8">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={32}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-[610px] max-w-full mx-auto md:w-[700px]"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id} className="w-[200px] md:w-[237px]">
              <div className="relative img-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={237}
                  height={300}
                  className="img-transition hover:img-scale w-full h-auto"
                />
                <div className="absolute bottom-6 left-4 md:left-6 md:bottom-8">
                  <h2 className="text-white text-h3 mb-1 md:text-h2">
                    {destination.name}
                  </h2>
                  <span className="block text-white text-smaller">
                    {destination.tours}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Discover;