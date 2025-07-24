'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const About = () => {
  const dataRef = useScrollReveal({ origin: 'left' });
  const imgRef = useScrollReveal({ origin: 'right', interval: 100 });

  return (
    <section id="about" className="section">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div ref={dataRef} className="text-center md:text-left">
          <h2 className="section__title md:mb-6">
            More Information <br /> About The Best Beaches
          </h2>
          <p className="mb-8 md:mb-8">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <a href="#" className="button">
            Reserve a place
          </a>
        </div>

        <div ref={imgRef} className="flex gap-4 items-center justify-center">
          <div className="img-hidden">
            <Image
              src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
              alt="About beach 1"
              width={130}
              height={200}
              className="img-transition hover:img-scale md:w-58"
            />
          </div>

          <div className="img-hidden">
            <Image
              src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
              alt="About beach 2"
              width={180}
              height={250}
              className="img-transition hover:img-scale md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;