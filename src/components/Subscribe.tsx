'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const descRef = useScrollReveal({ origin: 'left' });
  const formRef = useScrollReveal({ origin: 'right', interval: 100 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="section">
      <div className="bg-primary-second py-10 md:bg-transparent md:py-0">
        <div className="container md:bg-primary-second md:py-14">
          <h2 className="section__title text-white">
            Subscribe Our <br /> Newsletter
          </h2>
          <p
            ref={descRef}
            className="text-white text-center mb-10"
          >
            Subscribe to our newsletter and get a special 30% discount.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-input-DEFAULT dark:bg-input-dark p-2 flex justify-between w-full max-w-[470px] mx-auto md:p-2"
          >
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[70%] pr-2 bg-transparent text-text-DEFAULT dark:text-text-dark outline-none placeholder:text-text-DEFAULT dark:placeholder:text-text-dark md:px-2"
              required
            />
            <button type="submit" className="button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;