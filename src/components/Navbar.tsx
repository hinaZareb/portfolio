import React from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ( ) => {
    setIsMenuOpen (!isMenuOpen)
  }
  return (
    <div className='container pt-6'>
      <div className='flex justify-between items-center'>
        <div><img src="Hina-04.png" alt="Logo" className="w-28 h-auto mr-4 hover:opacity-40 transition-opacity duration-300" />
        </div>
     
        <ul className='gap-12 lg:gap-10 hidden md:flex justify-center items-center w-full'>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> :
          <AiOutlineMenu size={30} />
          }
        </div>
        
      </div>

      {
        isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
            
            
            
          </ul>
        )
      }
    </div>
  )
}

export default Navbar
