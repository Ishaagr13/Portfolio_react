import React from 'react'
import '../About/About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaCertificate} from 'react-icons/fa'
// import {RiFoldersLine} from 'react-icons/RiFoldersLine'
import {RiFoldersLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about_card'>
              <FaCertificate className='about_icon'/>
              <h5>Internship</h5>
              <small>Capegemini</small>
            </article>
            <article className='about_card'>
              <RiFoldersLine className='about_icon'/>
              <h5>projects</h5>
              <small>5 Completed </small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus, explicabo alias corrupti repudiandae tempore sequi architecto error rem facere nihil modi commodi quod necessitatibus nam reprehenderit perferendis. Nam, eum?</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
