'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const Experience = () => {
  const dataRef = useScrollReveal({ origin: 'top', interval: 100 });
  const imgRef = useScrollReveal({ origin: 'top', interval: 100 });

  const stats = [
    { number: '20', description: 'Year\nExperience' },
    { number: '75', description: 'Complete\ntours' },
    { number: '650+', description: 'Tourist\nDestination' },
  ];

  return (
    <section className="section">
      <h2 className="section__title">
        With Our Experience <br /> We Will Serve You
      </h2>

      <div className="container grid gap-10 justify-center justify-items-center">
        <div
          ref={dataRef}
          className="grid grid-cols-3 gap-4 justify-items-center px-8 md:gap-14 md:px-0 md:my-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-h2 font-semibold mb-2">{stat.number}</h2>
              <span className="text-small whitespace-pre-line">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        <div ref={imgRef} className="relative pb-8 grid">
          <div className="img-hidden w-[263px] mr-8 md:w-[463px] md:mr-28">
            <Image
              src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
              alt="Experience 1"
              width={463}
              height={300}
              className="img-transition hover:img-scale"
            />
          </div>

          <div className="img-hidden w-[120px] absolute top-8 right-0 md:w-[220px] md:top-12">
            <Image
              src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
              alt="Experience 2"
              width={220}
              height={150}
              className="img-transition hover:img-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;