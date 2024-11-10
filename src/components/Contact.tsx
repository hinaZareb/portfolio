import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y8'>
            <h2 className='text-5xl font-bold' data-aos="zoom-in">Feel Free to Contact Me</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in">
            "I'm always open to discussing new opportunities and collaborations—drop me a message!"
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-up">
            <MdOutlineMailOutline  size={30}/> xii.af1pm86@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-up">
            <BsTelephone   size={30}/> 0342-8234559
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>

            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'
                id='email'/>
            </div>

            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="messege">Messege</label>
                <textarea  className=' bg-transparent border border-accent'
                id='messege' rows={8}/>
            </div>
            <button className='bg-white p-2 px-6 text-black' data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
