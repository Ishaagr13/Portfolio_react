import React from 'react'
import '../Contact/Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x4cuk84', 'template_j9uxo8c', form.current, 'KYE1VccVpcUQ9isRD')
     
    e.target.reset();
  };
  return (
    <section id='contact' style={{margin:"250px"}}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:abc@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>abc@gmail.com</h5>
            <a href="http://www.facebook.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsGithub className='contact_option-icon'/>
            <h4>Github</h4>
            <h5>Ishaagr13</h5>
            <a href="https://github.com/Ishaagr13" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='your mail'required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send A message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
