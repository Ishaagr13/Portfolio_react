import React from 'react'
import '../Portfolio/Portfolio.css'



const data = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Desktop Notifier',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3614082/pexels-photo-3614082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Landing Page',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'E-Commerce Website',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/5858740/pexels-photo-5858740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Temperature Converter',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hotel management System',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Web-Scrapping',
    github: "http://github.com" ,
    demo: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id , image , title , github , demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
