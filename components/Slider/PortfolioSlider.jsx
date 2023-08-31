import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Outsnapped',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/projects/outsnapped.webp'
    },
    {
      title:'Deep Future',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/projects/DeepFuture.png'
    },
    {
      title:'Eleven Shares',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/projects/ElevenShares.png'
    },
    {
      title:'College Life',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/projects/collegeLife.png'
    },
    {
      title:'Predium',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/projects/Predium.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
