import React from 'react'
//import skills data
import { skills } from '../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className='grid grid-cols-3 grid-flow-row md:grid-cols-9'>
                {
                    skills.map((skill, index) => (
                        <div key={index} className='flex items-center justify-center'>
                            <img src={skill.image} alt={skill.name} className="w-24 h-24" />
                        </div>
                    ))
                }
            </div>
        </div>
        
    </section>
  )
}

export default Skills