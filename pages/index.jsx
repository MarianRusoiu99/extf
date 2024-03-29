import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';
import Hero5 from '../components/Hero/Hero5';
import Button from '../components/Button';
import ServicesDragable from '../components/ServicesDragable';
import ServiceList from '../components/ServiceList';
import MovingText2 from '../components/MovingText/MovingText2';


export default function Home() {
  // Hero Social Linksasd asd asdsdsad as das
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '40K',
    },
    {
      title: 'Project Completed',
      factNumber: '50K',
    },
    {
      title: 'Team Members',
      factNumber: '245',
    },
    {
      title: 'Digital products',
      factNumber: '550',
    },
  ];
//C#, PHP, Python, SQL, Javascript, HTML & CSS

  const serviceData1 = [
    {
      title: 'HTML & CSS',
      
    },
    {
      title: 'PHP',
      
    },
    {
      title: 'Python',
      
    },
    {
      title: 'SQL',
      
    },
    {
      title: 'Javascript',
      
    },
    {
      title: 'C#',
      
    },
  ];

  //ASP.NET, .NET Framework, .NET Core, Xamarin, jQuery, AngularJS, Angular X, React & Redux, VueJS & Vuex
  const serviceData2 = [
    {
      title: 'VueJS & Vuex',
      
    },
    {
      title: 'ASP.NET',
      
    },
    {
      title: '.NET Framework',
      
    },
    {
      title: '.NET Core',
      
    },
    {
      title: 'Xamarin',
      
    },
    {
      title: 'jQuery',
      
    },
    {
      title: 'AngularJS',
      
    },{
      title: 'Angular X',
      
    },{
      title: 'React & Redux',
      
    },
    {
      title: 'VueJS & Vuex',
      
    }
  ];

  //Wordpress, WooCommerce, Webflow, Elementor, Divi, Oxygen, Beaver, Guttenberg
  const serviceData3 = [
    {
      title: 'Wordpress',
      
    },
    {
      title: 'WooCommerce',
      
    },
    {
      title: 'Webflow',
      
    },
    {
      title: 'Elementor',
      
    },
    {
      title: 'Divi',
      
    },
    {
      title: 'Oxygen',
      
    },
    {
      title: 'Beaver',
      
    },{
      title: 'Guttenberg',
      
    }
  ];

  return (
    <>
      <Head>
        <title>PeerConcept - Have an idea? Let’s build it together</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        {/* <Hero
          title="We are full stack development and consulting services"
          subtitle="Have an idea? Let’s build it together"
          btnText="Get a Quote"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpeg"
        /> */}
        <Hero5
          title="We are full stack development and consulting services"
          subtitle="Have an idea? Let’s build it together"
          btnLink="estimate"
          btnText="Get a Quote"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Our fun fact"
            subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                  btnText=""
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              {/* <ServiceList/> */}
              {/* <ServicesDragable/> */}
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="UI/UX design"
                     
                      src="/images/services/ux-design.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Web Development"
                    
                      src="/images/services/webdev.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Mobile Development"
                   
                      src="/images/services/mobile.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Consultancy"
                    
                      src="/images/services/consultancy.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>

            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Portfolio to explore"
              subtitle="Latest Projects"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
          <Spacing lg="50" md="50" />
          <div className='widthCenter'>

            <Button btnLink="/projects" btnText={"See all projects"} />
            <Spacing lg="150" md="50" />
          </div>

        </Div>
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="We get multiple awards"
                  subtitle="Our Awards"
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        {/* <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Our agile process is ability to adapt and respond to change. Agile
            organizations view change as an opportunity, not a threat.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg.jpeg"
          />
        </Div> */}
        {/* End Video Block Section */}

        {/* Start Team Section */}
        {/* <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" /> */}
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        {/* <Spacing lg="125" md="70" />
        <MovingText text="C# - PHP - Python - SQL - Javascript - HTML & CSS - ASP.NET - .NET Framework - .NET Core - Xamarin - jQuery - AngularJS - Angular X - React & Redux - VueJS & Vuex" />
        <Spacing lg="105" md="70" /> */}
        {/* End MovingText Section */}

{/*  */}
        {/* <Spacing lg="100" md="80" />
        <Div className="container">
          <SectionHeading
            title="What we provide"
            subtitle=""
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
        </Div> */}
        {/* End Services Section */}

        {/* Start Moving Text Section */}
        {/* <div style={{transform:"rotate(-3deg);"}}>
        <MovingText2 data={serviceData1} />
        <Spacing lg="20" md="10" />
        <MovingText2 reverseDirection data={serviceData2} />
        <Spacing lg="20" md="10" />
        <MovingText2 data={serviceData3} />
        </div> */}
        {/* End Moving Text Section */}
        <Spacing lg="150" md="10" />

        {/* Start LogoList Section */}
        <Div style={{maxWidth:"100%"}}>
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            // bgSrc="/images/cta/a.png"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
