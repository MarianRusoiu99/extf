"use client"

import React from 'react'
import Div from '../Div'
import Card from '../Card'
import Spacing from '../Spacing'
import { motion } from 'framer-motion'


function ServicesDragable(props) {

//   const Services = props.items  // items is an array of objects and objects must have a title, a src for image and an alt tag for image
  const placeholder = [{title:"ssadfsda", src:"../images/cta/a.png", alt:"ceva"},{title:"ssadfsda", src:"../images/cta/a.png", alt:"ceva"},{title:"ssadfsda", src:"../images/cta/a.png", alt:"ceva"},{title:"ssadfsda", src:"../images/cta/a.png", alt:"ceva"}];
  const Services = props.items ? props.items :placeholder
  const constraintsRef = React.useRef(null);
  console.log(constraintsRef);

  const randomLeftMargin = [20,40,30,100,50]
  return (
    
      <Div>
                
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile" ></Div>
                  <div ref={constraintsRef} className="offsetChild">
                  {Services && Services.map((content,index)=>{return(
//style={{marginLeft: `${randomLeftMargin[Math.floor(Math.random() * randomLeftMargin.length)]}`}}

                    <motion.div drag  pan dragConstraints={constraintsRef} className="col-lg-3 col-sm-6" id = {index}  style={{marginLeft: `${randomLeftMargin[Math.floor(Math.random() * randomLeftMargin.length)]}px` , marginTop: `${randomLeftMargin[Math.floor(Math.random() * randomLeftMargin.length)]}px`}} >
                    <Div>
                    <Card
                      title={content.title}
                      // link="/service/service-details"
                      src={content.src}
                      alt={content.alt}
                      variant={"square transparent"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  </motion.div>
                  )})}
                  </div>
{/*                   
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="UI/UX design"
                      // link="/service/service-details"
                      src="/images/services/ux-design.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Web Development"
                      // link="/service/service-details"
                      src="/images/services/webdev.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Mobile Development"
                      // link="/service/service-details"
                      src="/images/services/mobile.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Consultancy"
                      // link="/service/service-details"
                      src="/images/services/consultancy.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div> */}
                </Div>
                
  )
}

export default ServicesDragable
