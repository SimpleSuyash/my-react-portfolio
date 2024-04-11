import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className='flex flex-col items-center text-center'>
      <div className='mb-2'>
        <img src={project.image} alt={project.name} className='rounded-2xl' />
      </div>
      <p className='text-accent text-sm mb-3'>{project.category}</p>
      <h3 className='text-xl font-semibold mb-3'>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard