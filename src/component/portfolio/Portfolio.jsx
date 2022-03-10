/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import IMG from '../../assets/dash.jpg'
import IMG2 from '../../assets/dash2.jpg'
import IMG3 from '../../assets/dash3.jpg'
import IMG4 from '../../assets/dash4.jpg'
import IMG5 from '../../assets/dash5.jpg'
import IMG6 from '../../assets/dash6.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17393923-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17393917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17317573-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17557610-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17610570-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & financial Visualization',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/17393923-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__items'>
              <div className="portfolio__items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__items-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }        
    </div>
    </section>
  )
}

export default Portfolio




