
import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Portfolio from '../../components/Portfolio';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'CollegeLife',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/collegeLife.png',
      category: 'ui_ux_design',
    },
    {
      title: 'Deep Future',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/DeepFuture.png',
      category: 'logo_design',
    },
    {
      title: 'ElevenShares',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/ElevenShares.png',
      category: 'web_design',
    },
    {
      title: 'Outsnapped',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/outsnapped.webp',
      category: 'mobile_apps',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/collegeLife.png',
      category: 'ui_ux_design',
    },
    {
      title: 'Predium',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/projects/Predium.png',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/projects/project-details',
      src: '/images/portfolio_10.jpeg',
      category: 'logo_design',
    },
  ];
  const categoryMenu = [
    {
      title: 'Web Design',
      category: 'web_design',
    },
    {
      title: 'UI/UX Design',
      category: 'ui_ux_design',
    },
    {
      title: 'Mobile Apps',
      category: 'mobile_apps',
    },
    {
      title: 'Logo Design',
      category: 'logo_design',
    },
  ];
  return (
    <>
      <Head>
        <title>Home - Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Projects"
          bgSrc="images/portfolio_hero_bg.jpeg"
          pageLinkText="Portfolio"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
            <Div className="cs-filter_menu cs-style1">
              <ul className="cs-mp0 cs-center">
                <li className={active === 'all' ? 'active' : ''}>
                  <span onClick={() => setActive('all')}>All</span>
                </li>
                {categoryMenu.map((item, index) => (
                  <li
                    className={active === item.category ? 'active' : ''}
                    key={index}
                  >
                    <span onClick={() => setActive(item.category)}>
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Div>
          </Div>
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioData.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${
                  active === 'all'
                    ? ''
                    : !(active === item.category)
                    ? 'd-none'
                    : ''
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title="agency@arino.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
