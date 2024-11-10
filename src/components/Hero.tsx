import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
   
     <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile-picture.jpeg)] bg-left lg:bg-[100%]   '
    style={{backgroundSize: "55%"}}
    > 
    
      <Navbar/>
      
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:black'></div>
   


        <div className='text-[50px] sm:text-[80px] font-bold leading-tight flex justify-center items-center mt-[-45px]  '>
          <div>
            <p className='font-light text-[30px] sm:text-[40px] ' data-aos="zoom-in">I am</p>
            <p data-aos="zoom-in">Hina Zareb</p>
            <p className='font-light text-[30px] sm:text-[40px] text-yellow-800 '>web Developer</p>
            
          </div>
        </div>
      </div>
    </div>


    

  )
}

export default Hero
