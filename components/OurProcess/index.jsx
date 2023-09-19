import React from 'react'



function OurProcess() {

  const content = [{
    title: "Analysis & Planning",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Our partnership begins at your first “Hello, I have an idea”. We document your business needs and determine the goals and anticipated outcomes of the product. This is the part where we gather your requirements and find out who will use the software and most importantly how they intend to use it.",
    tags: ["HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Product Prototyping",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Your idea begins to look more clear. After the initial talk, the UI/UX team allocated to your project will analyze the requirements and begin to sketch wireframes. Then we improve them iteratively based on your feedback. Your input is important to us and we do not begin to implement until you are fully satisfied with the product prototype.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Development",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "The product prototype is passed to the development team and we’re ready to turn it into something tangible. Based on the design documents and after we choose the right technologies for the product specifications we start to write code. To make sure we deliver a high-quality product the development phase is split into sprints. Basically we make incremental steps all over the project duration focusing feature by feature.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },
  {
    title: "Testing",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Our QA professionals are taking care of the technical and user flow issues that might become apparent on the way. The team will run performance or automated tests to discover bugs before the deployment. Line by line the code is tested to ensure it works according to the specifications making sure the system works when it is launched.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  },{
    title: "Deployment",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "After the implementation of a sprint is finished and the product fully tested, the deployment phase is ready to begin. Before we release your product we will provide you with demonstration sessions so that you can see and vet what we have built. After the final feedback, we begin to release the code to the production servers and enable you and your team to take operational control of the platform.",
    tags: ["HTML5", "HTML5", "HTML5", "HTML5"]

  }
  ,{
    title: "Maintenance & Support",
    subtitleBanner: { first: "Front End Developer", second: "June 2016 - Present" },
    content: "Our partnership doesn’t end after the deployment phase. We have at your disposal a team of skilled developers ready to help with any technical issue or enhancement that might come out. Moreover, during this phase, we monitor the performance of the system and we’re trying to figure out how we can best improve in the future.",
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
