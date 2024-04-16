// import React from 'react'
//import skills data
import { skills } from '../data'

const Skills = ({stack}) => {
    let category;
    switch(stack){
        case 'frontend':
            category = 'Frontend Skills';
            break;
        case 'backend':
            category = 'Backend Skills';
            break;  
        default:
            category = 'Other Skills';
            break;  
    }
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-5 md:grid md:grid-cols-6">
        <h1 className='title max-w-fit md:col-span-1 mb-4 md:mb-0'>{category}</h1>
        <div className='flex flex-wrap justify-center items-center gap-4 md:col-span-5 '>
            {
                skills.map((skill, index) => (
                    (skill.tech === stack ) && 
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <img src={skill.image} alt={skill.name} className="size-12 md:size-24" />
                        <h2 className='text-paragraph text-sm'>{skill.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills