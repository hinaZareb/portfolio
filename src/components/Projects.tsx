import React from 'react'
// import Heading from './Heading';
import Card from './Card';

const data=[
    {
        id:0,
        title:"Todo App",
        desc: "A simple and interactive to-do list application built with React.js and typescript for managing tasks efficiently.",
        img: "/project-1.png",
        tags: ["React","Typescript","Node","CSS"],

    },

    {
      id: "1",
      title: "Countdown Timer",
      desc: "A dynamic countdown timer built with Next.js to track time remaining for events in real-time.",
      img: "/project-2.png",
      tags: ["Next.js", "Node", "Typescript", "CSS"],
    },

    {
      id: "2",
      title: " Static Resume",
      desc: "A responsive, user-customizable static resume created with HTML, CSS, and TypeScript for a modern and professional presentation.",
      img: "/project-3.png",
      tags: ["HTML", "Node", "Typescript", "CSS"],
    },

    {
      id: "3",
      title: "Simple Calculator",
      desc: "A basic calculator application that performs arithmetic operations, built for quick calculations and easy use.",
      img: "/project-4.png",
      tags: ["HTML", "Node", "Typescript", "CSS"],
    }
];

const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
      {/* <Heading  title="My Projects" /> */}
      <h2 className='text-4xl font-bold text-center my-8'>My projects</h2>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el)=> (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

