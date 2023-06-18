"use client"
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import WorkCard from './WorkCard'
import Link from 'next/link'
import { Projects } from '@typings'
import { urlFor } from '@utility/utility'
import { motion } from "framer-motion";
type Props = {
    title:string,
    showAll:boolean
    projects:Projects[]
}

function WorkList({title,showAll,projects}: Props) {
  if(showAll===true){
    projects=projects.slice(0,4)
    //show limited projects
  }
  return (
    <>
    <motion.div
    initial={{ opacity:0, scale: 0.5 }}
    animate={{opacity:1,  scale: 1 }}
    transition={{ duration: 0.2 }}
     className='flex justify-between'>
        <h2 className='white_text text-2xl tracking-wide font-semibold md:text-4xl'>{title}</h2>
        {showAll && (<Link href='/works' className='flex gap-5 items-center'>
         <p className='text-xs grey_text md:text-sm'>See all works </p> 
         <AiOutlineArrowRight className='white_text text-xl'/>
        </Link>)}
        
      </motion.div>
      <motion.div
      initial={{ opacity:0, scale: 0.5 }}
      animate={{opacity:1,  scale: 1 }}
      transition={{ duration: 0.5 }}
       className="grid md:grid-cols-2 grid-cols-1 gap-4">

        {projects.map(project=>(
        <WorkCard
        key={project._id}
        id={project._id}
        project_name={project.project_name}
        project_image={urlFor(project.project_image).url() }
        />))}
       
        </motion.div>

    </>
  )
}

export default WorkList