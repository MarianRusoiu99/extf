import React from 'react';
import Div from '../Div';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partner_1.svg',
      alt: 'Partner',
    },
    {
      src: '/images/partner_2.svg',
      alt: 'Partner',
    },
    {
      src: '/images/partner_3.svg',
      alt: 'Partner',
    },
    {
      src: '/images/partner_4.svg',
      alt: 'Partner',
    },
    {
      src: '/images/partner_5.svg',
      alt: 'Partner',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap" >

      <Splide
        options={{
          type: 'loop',
          // rewind: true,
          arrows: false,
          pagination: false,
          perPage: "noSlides",
          perMove: 1,
          drag: "free",
          snap: true,
          clones: 17,

          autoScroll: {
            // pauseOnHover: false,
            pauseOnFocus: false,
            // rewind: false,
            speed: 1
          }

        }}
        aria-label="Tehnologies"
        extensions={{ AutoScroll }}
      >
        {partnerLogos.map((partnerLogo, index) => (
          <SplideSlide>     
               <div className="cs-partner_logo" key={index}>
            <img src={partnerLogo.src} alt={partnerLogo.alt} />
          </div>
          </SplideSlide>

        ))}
      </Splide>

    </Div>
  );
}
