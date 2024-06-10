import { getAllProjectServices } from '@/service/project.service'
import React from 'react'



const ProjectPage = async () => {

  const projects = await getAllProjectServices()
  console.log(projects)
  return (
    <div className='container bg-gray-400 rounded-3xl h-screen'>ProjectPage</div>
  )
}

export default ProjectPage