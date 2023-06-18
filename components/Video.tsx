import React from 'react'
import CardWrapper from './CardWrapper'

type Props = {
    vidSrc:string,
}

function Video({vidSrc}: Props) {
  return (
    <CardWrapper
    initial={{ opacity:0, scale: 0.5 }}
    animate={{opacity:1,  scale: 1 }}
    transition={{ duration: 0.5,delay:0.4 }}
    >
    <div className='white_text text-xl mb-4'>Project Video</div>
      <iframe 
      className='w-full aspect-square'
      src={vidSrc} >

      </iframe>
        </CardWrapper>
  )
}

export default Video