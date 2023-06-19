"use client"
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";
type Props = {
  children:ReactNode
  className?:string
  initial?:any
    animate?:any
    transition?:any
}

function CardWrapper({
  children,
  className,
  initial,
  animate,
  transition
}: Props) {
  return (
    <motion.div 
    initial={initial }
    animate={animate }
    transition={transition}
    // initial={initial ||{ opacity:0, scale: 0.5 }}
    // animate={animate ||{opacity:1,  scale: 1 }}
    // transition={transition||{ duration: 0.5 }}
    className={`background_secondary rounded-[50px]  md:p-10 p-6  ${className}`}>
        {children}
    </motion.div>
  )
}

export default CardWrapper