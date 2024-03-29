import { Icon } from '@iconify/react';
import Head from 'next/head';
import React from 'react';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import ContactInfoWidget from '../../components/Widget/ContactInfoWidget';
import OurProcess from "../../components/OurProcess"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Our Process</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Our Process"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Our Process"
        />
        <Spacing lg="150" md="80" />
        
        
        <Div className="container">
        <SectionHeading
                  title="HOW WE WORK"
                  subtitle="From the first glimpse of the idea and during a long-lasting partnership, we will try as much as we can to fully understand your vision. That is why we work close with you during the entire product development process."
                  btnText=""
                  btnLink="/service"
                  variant={"cs-style3 text-center"}
                />
                <Spacing lg="50" md="80" />

            <OurProcess/>

            

        </Div>
        
      </Layout>
    </>
  );
}
