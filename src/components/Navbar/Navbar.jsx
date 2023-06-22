import React from 'react'
import '../Navbar/Navbar.css'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}><BiBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ' '}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><RiContactsFill/></a>
    </nav>
  )
}

export default Navbar
