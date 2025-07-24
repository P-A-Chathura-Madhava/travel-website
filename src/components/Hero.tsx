'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const Hero = () => {
  const dataRef = useScrollReveal({ origin: 'top', interval: 100 });
  const socialRef = useScrollReveal({ origin: 'top', interval: 100 });
  const infoRef = useScrollReveal({ origin: 'top', interval: 100 });

  return (
    <section id="home" className="relative">
      <Image
        src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
        alt="Beautiful beach"
        fill
        className="object-cover object-[83%]"
        priority
      />
      
      <div className="container relative h-[calc(100vh-3rem)] grid content-center gap-12 md:h-screen md:grid-rows-[1.8fr_0.5fr]">
        <div ref={dataRef} className="md:self-end">
          <span className="block font-semibold text-white mb-3">
            Discover your place
          </span>
          <h1 className="text-biggest md:text-[4rem] font-medium text-white mb-10 leading-tight">
            Explore The <br /> Best <b>Beautiful <br /> Beaches</b>
          </h1>
          <a href="#" className="button">
            Explore
          </a>
        </div>

        <div
          ref={socialRef}
          className="flex flex-col gap-6 md:flex-row md:self-end md:mb-12 md:gap-10"
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl w-max"
          >
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl w-max"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl w-max"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </div>

        <div
          ref={infoRef}
          className="bg-primary flex p-6 items-center gap-2 absolute right-0 bottom-4 w-57 md:bottom-12 md:w-82 md:grid md:grid-cols-[1fr_2fr] md:gap-8"
        >
          <div>
            <span className="block text-small font-semibold text-white mb-3 md:text-normal">
              5 best places to visit
            </span>
            <a href="#" className="button--flex button--link text-smaller text-white">
              More <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="img-hidden">
            <Image
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
              alt="Beach info"
              width={145}
              height={100}
              className="img-transition hover:img-scale md:w-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;