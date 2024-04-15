import React from 'react'
import Skills from './Skills'

const Resume = () => {
  const clickHandler = () => {
    window.open(
      "http://docs.google.com/gview?url=https://simplesuyash.github.io/my-portfolio/assets/docs/Suyash-Resume-2021.docx&embedded=true"
    );
  };
  return (
    <section className='bg-secondary section py-12' id='resume'>
        <div className="container mx-auto">
          <p className='text-lg text-justify'>  
                I am a full-stack developer with a strong foundation in frontend technologies. I have a good understanding of modern frontend framework like React. I have learnt about backend technologies like NodeJS and Express. I am familiar with version control systems like Git and have experience working with databases like MySQL and MongoDB.
          </p>
          <Skills stack={"frontend"}/>
          <Skills stack={"backend"}/>
          <Skills stack={"neither"}/>
          <div className="flex justify-center my-5">
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all min-w-fit" onClick = {clickHandler}>
                Download My Resume
            </button>
          </div>
        </div>
        
        
    </section>
  )
}

export default Resume