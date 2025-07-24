'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const Sponsors = () => {
  const containerRef = useScrollReveal({ origin: 'top', interval: 100 });

  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: 'https://via.placeholder.com/90x40/666/fff?text=SPONSOR1' },
    { id: 2, name: 'Sponsor 2', logo: 'https://via.placeholder.com/90x40/666/fff?text=SPONSOR2' },
    { id: 3, name: 'Sponsor 3', logo: 'https://via.placeholder.com/90x40/666/fff?text=SPONSOR3' },
    { id: 4, name: 'Sponsor 4', logo: 'https://via.placeholder.com/90x40/666/fff?text=SPONSOR4' },
    { id: 5, name: 'Sponsor 5', logo: 'https://via.placeholder.com/90x40/666/fff?text=SPONSOR5' },
  ];

  return (
    <section className="section">
      <div
        ref={containerRef}
        className="container grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] justify-items-center gap-14"
      >
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="group cursor-pointer"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={90}
              height={40}
              className="filter invert-[0.7] img-transition group-hover:invert-50"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;