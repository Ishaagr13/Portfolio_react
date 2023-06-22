import React from 'react'
import '../Service/Service.css'
import {BsCheck} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offers</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className='service'>
          <div className="service_head">
            <h1>UI/UX Design</h1>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h1>Creations</h1>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h1>Web Development</h1>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
