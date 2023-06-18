"use client"
import React, { ReactNode } from 'react'
import CardWrapper from './CardWrapper'
import {motion} from 'framer-motion'
type Props = {
    title:string,
    children:ReactNode
}

const ResumeCardWrapper = ({title,children}: Props) => {
  return (
    <CardWrapper 
    initial={{ opacity:0,  y:-200 ,scale:0.5 }}
    animate={{opacity:1, y:0 ,scale:1}}
    transition={{ duration: 0.5 }}
    >
        <h2 className=' text-indigo-400 md:text-xs text-[10px] uppercase tracking-[.2rem] '>{title}</h2>
        {children}
    </CardWrapper>
  )
}

export default ResumeCardWrapper