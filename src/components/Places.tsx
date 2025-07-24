'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const Places = () => {
  const containerRef = useScrollReveal({ origin: 'top', interval: 100 });

  const places = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      price: '$2499',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
    },
    {
      id: 2,
      name: 'Bora Bora',
      country: 'Polinesia',
      price: '$1599',
      rating: '5.0',
      image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
    },
    {
      id: 3,
      name: 'Hawaii',
      country: 'EE.UU',
      price: '$3499',
      rating: '4.9',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',
    },
    {
      id: 4,
      name: 'Whitehaven',
      country: 'Australia',
      price: '$2499',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    },
    {
      id: 5,
      name: 'Hvar',
      country: 'Croacia',
      price: '$1999',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    },
  ];

  return (
    <section id="place" className="section">
      <h2 className="section__title">Choose Your Place</h2>

      <div
        ref={containerRef}
        className="container grid grid-cols-2 gap-6 justify-center sm:grid-cols-3 md:pt-8 lg:gap-8"
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="relative img-hidden group h-[230px] lg:h-[263px]"
          >
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover img-transition group-hover:img-scale"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-3 lg:p-4 text-white">
              <span className="self-end flex items-center">
                <i className="ri-star-line text-xs mr-1"></i>
                <span className="text-small">{place.rating}</span>
              </span>

              <div>
                <h3 className="text-h3 mb-1">{place.name}</h3>
                <span className="block text-smaller mb-5">{place.country}</span>
                <span className="block text-smaller">{place.price}</span>
              </div>
            </div>

            <button className="button button--flex absolute right-0 bottom-0 p-3 lg:p-4">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;