import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import PortfolioSlider2 from '../../components/Slider/PortfolioSlider';

export default function projectDetails() {
  const router = useRouter();
  const projectId = router.query.projectId;
  return (
    <>
      <Head>
        <title>Outsnapped</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Outsnapped"
          bgSrc="/images/service_hero_bg.jpeg"
          // pageLinkText={projectId}
          pageLinkText="Case Study Details"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <img
            src="/images/projects/outsnapped.webp"
            alt="Details"
            className="cs-radius_15 w-100"
          />
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading title="Graffiti wall artwork" subtitle="Creative">
                <Spacing lg="40" md="20" />
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium voltire doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
                <Spacing lg="10" md="10" />
                <p>
                  Ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit.
                </p>
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="60" md="40" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0">Artwork</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">United Kindom</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Software:
                  </h3>
                  <p className="cs-m0">Adobe Illustrator</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Dated:
                  </h3>
                  <p className="cs-m0">14-Aug-2022</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Client:
                  </h3>
                  <p className="cs-m0">Andreo Bowla</p>
                  <Spacing lg="30" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
          <Spacing lg="150" md="50" />
       {/* gallery start */}
          <Div className="container">
            <SectionHeading
              title="Gallery"
              subtitle=""
              variant="cs-style1 "
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider2 />
          <Spacing lg="50" md="50" />
          {/* gallery end */}
          <Spacing lg="65" md="10" />
{/* next prev butons */}

          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button
                btnLink="/project/project-details"
                btnText="Prev Project"
                variant="cs-type1"
              />
            </Div>
            <Div>
              <Button
                btnLink="/project/project-details"
                btnText="Next Project"
              />
            </Div>
          </Div>
        </Div>

        {/* end next prev buttns */}
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
