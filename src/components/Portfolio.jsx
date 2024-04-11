import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h[1400px]'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center mb-6">
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-25 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My Latest Work</h2>
                <p>
                  I have worked on a variety of projects, ranging from simple static websites to complex web applications. I have used a wide range of technologies to build these projects, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.
                  Here is a list of my recent projects. Please click on the project to view more details. 
                </p>
            </div>
            <Projects/>
        </div>
    </section>
  )
}

export default Portfolio