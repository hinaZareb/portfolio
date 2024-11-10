import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center' data-aos="zoom-in">
            <div>
                <h2 className='text-4xl md:text-5xl font-bold'>Areas of Proficiency</h2>
                <p className='text-gray-600 pt-4'>
                    "I am skilled in a diverse range of front-end and back-end technologies, allowing me to build robust, responsive, and modern web applications. My expertise includes HTML, CSS, and Tailwind CSS for crafting visually appealing interfaces, as well as TypeScript and JavaScript for dynamic, interactive user experiences. I am also proficient in Next.js and Node.js, which enable me to create efficient, high-performing applications with a focus on scalability. My technical foundation and continuous learning mindset help me to adapt and excel in the ever-evolving world of web development."

</p>
            </div>
            <div>
                <div className='grid grid-cols-3 text-accent text-3xl sm:text-4xl text-yellow-900'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Next.js</h2>
                        <h2 data-aos="zoom-in">React.js</h2>
                        <h2 data-aos="zoom-in">Tailwind CSS</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Typescript</h2>
                        <h2 data-aos="zoom-in">Javascript</h2>
                        <h2 data-aos="zoom-in">Node js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">HTML</h2>
                        <h2 data-aos="zoom-in">CSS</h2>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
