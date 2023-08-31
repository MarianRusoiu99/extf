import Link from 'next/link';
import React, { useState } from 'react';
import Div from '../Div';

export default function JobList() {
  const careerData = [
    {
      title: 'Junior FrontEnd Developer',
      details:"On-site | Contract-Based | Part-Time",
      description:
        'Această poziție presupune dezvoltarea și personalizarea de cabine foto virtuale respectând cerințele clienților. De asemenea, poziția presupune dezvoltarea de noi pagini web pentru site-ul de prezentare care este realizat în WordPress.',
      imgUrl: '/images/jobsimages/a.jpg',
      href: '/careers/job-details',
    },
    {
      title: 'Marketing and Sales Position',
      details:"On-site | Contract-Based | Part-Time",
      description:
        'Aceasta pozitie presupune cercetarea si dezvoltarea unei strategii de marketing pentru produse si sevicii. De asemenea, pozitia presupune sprijinirea clientilor cu informatii despre produsele si serviciile companiei.',
      imgUrl: '/images/jobsimages/b.jpg',
      href: '/careers/job-details',
    },
    {
      title: 'Assistant Manager',
      details:"On-site | Contract-Based | Part-Time",
      description:
        'We are a small, but enthusiast IT Startup, searching for a new Assistant Manager to join our team.',
      imgUrl: '/images/jobsimages/c.jpg',
      href: '/careers/job-details',
    },
  ];
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };
  return (
    <Div className="cs-iconbox_3_list">
      {careerData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={item.href} className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.imgUrl}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <span className="cs-iconbox_icon cs-center">
                {/* <h3>Apply</h3> */}
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
