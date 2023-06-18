import Image from 'next/image'
import React from 'react'

type Props = {
    imageSrc:string,
    name:string,
    type:string

}

function TechIcons({imageSrc,name,type}: Props) {
  return (
    <div className='w-full '>
        <Image
        width={60}
        height={60}
        alt={name}
        src={imageSrc}
        className='rounded-xl my-5 object-cover'
        />
        <h2 className='white_text text-lg font-semibold capitalize'>{name}</h2>
        <h4 className='grey_text  capitalize'>{type}</h4>
        </div>
  )
}

export default TechIcons