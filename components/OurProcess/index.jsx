import React from 'react'



function OurProcess() {

  const content = [{
    title: "Penta Consulting",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    tags: ["HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Penta Consulting",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Penta Consulting",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Penta Consulting",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },{
    title: "Penta Consulting",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  }
  ]



  return (
    <>
      <section id="cd-timeline" class="cd-container">

        {content.map((content,index)=>{
          return(
            <div class="cd-timeline-block" key={index}>
            <div class="cd-timeline-img cd-picture">
            </div>
  
            <div class="cd-timeline-content">
              <h2>{content.title}</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  {content.subtitleBanner.first}
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  {content.subtitleBanner.second}
                </span>
              </div>
              <p>{content.content}</p>
              <ul class="content-skills">
               {content.tags.map((c,i)=>{
                return(
                  <li key={i}>{c}</li>
                )
               })}
              </ul>
            </div>
          </div>
          )
        })}     
      </section>     </>
  )
}

export default OurProcess
