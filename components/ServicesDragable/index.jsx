"use client"

import React from 'react'
import Div from '../Div'
import Card from '../Card'
import Spacing from '../Spacing'
import { motion } from 'framer-motion'
import WindowSize from '../WindowSize'


function ServicesDragable(props) {

  //   const Services = props.items  // items is an array of objects and objects must have a title, a src for image and an alt tag for image
  const placeholder = [{ title: "UI/UX", src: "../images/jobsImages/a.jpg", alt: "ceva" }, { title: "Figma", src: "../images/cta/a.png", alt: "ceva" }, { title: "Oxygen", src:"../images/jobsImages/b.jpg", alt: "ceva" }, { title: "Javascript", src: "../images/jobsImages/c.jpg", alt: "ceva" }, { title: "Javascript", src: "../images/jobsImages/a.jpg", alt: "ceva" }, { title: "Wordpress", src: "../images/cta/a.png", alt: "ceva" }, { title: "PHP", src: "../images/cta/a.png", alt: "ceva" }];
  const Services = props.items ? props.items : placeholder
  const constraintsRef = React.useRef(null);

  console.log(WindowSize().width)


  const randomLeftMargin = [20, 40, 30, 100, 50]
  return (

    <Div>

      <Div className="col-lg-3 col-sm-6 cs-hidden_mobile" ></Div>
      <div ref={constraintsRef} className="offsetChild">
        {
          (WindowSize().width > 600) ?


            Services && Services.map((content, index) => {
              return (
                //style={{marginLeft: `${randomLeftMargin[Math.floor(Math.random() * randomLeftMargin.length)]}`}}

                <motion.div drag pan="true" dragConstraints={constraintsRef} className="col-lg-2 col-sm-5" id={index} style={{ marginLeft: `${randomLeftMargin[Math.floor(Math.random() * randomLeftMargin.length)]}px`, marginTop: "20px" }} >
                  <Div>
                    <Card
                      title={content.title}
                      // link="/service/service-details"
                      src={content.src}
                      alt={content.alt}
                      // variant={"square transparent"}
                      variant={"square"}
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </motion.div>
              )
            }) : Services && Services.map((content, index) => {
              return (<div className="col-lg-2 col-sm-5" id={index} style={{ marginTop: "20px" }} >
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
              </div>)
            })}
      </div>

    </Div>

  )
}

export default ServicesDragable
