import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import ModalImage from 'react-modal-image';

export default function CaseStudyDetails() {
  return (
    <>
      <Head>
        <title>Case Study Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Outsnapped"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Case Study Details"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Photo Booths For In-Person And Virtual Events"
            subtitle="Web Developmet"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          {/* <ModalImage
          small="/images/projects/outsnapped.webp"
            large="/images/projects/outsnapped.webp"
            medium="/images/projects/outsnapped.webp"
            className="w-100 cs-radius_15"
            alt="Thumb" /> */}
          <img
            src="/images/projects/outsnapped.webp"
            alt="Thumb"
            className="w-100 cs-radius_15"
          />
          
          <Spacing lg="140" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Overview</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium voltire doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit.Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Ipsum quia dolor sit
            amet, consectetur
          </p>
          <Spacing lg="65" md="45" />
          <Div className="row">
            <Div className="col-sm-6">
            <ModalImage
          small="/images/projects/outsnapped.webp"
            large="/images/projects/outsnapped.webp"
            medium="/images/projects/outsnapped.webp"
            className="w-100 cs-radius_5"
            hideZoom={true}
            hideDownload={true}
            alt="Thumb" />
              {/* <img
                src="/images/projects/outsnapped.webp"
                alt="Thumb"
                className="w-100 cs-radius_5"
              /> */}
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-sm-6">
              <img
                src="/images/projects/outsnapped.webp"
                alt="Thumb"
                className="w-100 cs-radius_5"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
          <Spacing lg="125" md="55" />
        </Div>
        <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
          <Div className="cs-shape_2"></Div>
          <Div className="cs-shape_2"></Div>
          <Div className="container">
            <Spacing lg="145" md="80" />
            <h2 className="cs-font_38 text-center">Case Study Research</h2>
            <Spacing lg="90" md="45" />
            <Div className="row align-items-center cs-column_reverse_lg">
              <Div className="col-lg-5">
                <h3 className="cs-font_30 cs-m0">Marketing strategy</h3>
                <Spacing lg="45" md="30" />
                <p className="cs-m0">
                  Our goal perspiciatis unde omnis iste natus error sit
                  voluptatem bolaru accusantium voltire doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem. <br />
                  <br />
                  Most cases aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore.
                </p>
              </Div>
              <Div className="col-lg-6 offset-lg-1 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                  <img
                    src="/images/projects/outsnapped.webp"
                    alt="Case study"
                    className="w-100 squareAR"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
            </Div>
            <Spacing lg="100" md="80" />
            <Div className="row align-items-center">
              <Div className="col-lg-6 text-center">
                <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle ">
                  <img
                    src="/images/projects/outsnapped.webp"
                    alt="Case study"
                    className="squareAR"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
              <Div className="col-lg-5 offset-lg-1">
                <h3 className="cs-font_30 cs-m0">Branding guideline</h3>
                <Spacing lg="45" md="30" />
                <p className="cs-m0">
                  Our goal perspiciatis unde omnis iste natus error sit
                  voluptatem bolaru accusantium voltire doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem. <br />
                  <br />
                  Most cases aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore.
                </p>
              </Div>
            </Div>
            <Spacing lg="150" md="80" />
          </Div>
        </Div>
        <Spacing lg="140" md="80" />
        <Div className="container text-center">
          <Div className="row col-lg-10 offset-lg-1">
            <h2 className="cs-font_38 cs-m0">Result of The Case Study</h2>
            <Spacing lg="60" md="45" />
            <p className="cs-m0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit asperna aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad nima veniam, quis nostrum
              exercitationem ullam corporis suscipit.Nemo enim ipsam voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Ipsum quia dolor sit amet, consectetur
            </p>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
