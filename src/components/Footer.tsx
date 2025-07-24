'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const Footer = () => {
  const dataRef = useScrollReveal({ origin: 'top', interval: 100 });
  const rightsRef = useScrollReveal({ origin: 'top', interval: 100 });

  const footerSections = [
    {
      title: 'About',
      links: ['About Us', 'Features', 'New & Blog'],
    },
    {
      title: 'Company',
      links: ['Team', 'Plan y Pricing', 'Become a member'],
    },
    {
      title: 'Support',
      links: ['FAQs', 'Support Center', 'Contact Us'],
    },
  ];

  const socialLinks = [
    { icon: 'ri-facebook-box-fill', href: 'https://www.facebook.com/' },
    { icon: 'ri-twitter-fill', href: 'https://twitter.com/' },
    { icon: 'ri-instagram-fill', href: 'https://www.instagram.com/' },
    { icon: 'ri-youtube-fill', href: 'https://www.youtube.com/' },
  ];

  return (
    <footer className="section">
      <div className="container">
        <div
          ref={dataRef}
          className="grid gap-20 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-8 md:justify-items-center"
        >
          <div>
            <h3 className="text-h3 mb-2">Travel</h3>
            <p className="mb-8">
              Travel you choose the <br /> destination, we offer you the{' '}
              <br /> experience.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-title-DEFAULT dark:text-title-dark hover:text-primary transition-colors duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-h3 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-text-DEFAULT dark:text-text-dark hover:text-title-DEFAULT dark:hover:text-title-dark transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          ref={rightsRef}
          className="flex flex-col gap-6 text-center mt-20 md:flex-row md:justify-between"
        >
          <p className="text-small text-text-light dark:text-text-dark">
            © 2021 Bedimcode. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="text-small text-text-light dark:text-text-dark hover:text-text-DEFAULT dark:hover:text-title-dark transition-colors duration-300"
            >
              Terms & Agreements
            </a>
            <a
              href="#"
              className="text-small text-text-light dark:text-text-dark hover:text-text-DEFAULT dark:hover:text-title-dark transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;