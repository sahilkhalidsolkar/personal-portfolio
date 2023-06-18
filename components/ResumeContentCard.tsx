import React from 'react'

type Props = {
    title?:string,
    subtitle?:string,
    duration?:string,
    about?:string,
}

function ResumeContentCard({title,subtitle,duration,about}: Props) {
  return (
    <>
    <h1 className='white_text text-xl md:text-2xl font-bold my-3'>{title}</h1>
            <h2 className='grey_text text-sm md:text-lg mb-2'>{subtitle}</h2>
            <p className='grey_text text-xs md:text-sm mb-2'>{duration}</p>
            <div className='grey_text text-lg'>
            {about}
            </div>
    </>
  )
}

export default ResumeContentCard