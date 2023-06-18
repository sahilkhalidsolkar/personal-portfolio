import React from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'

type Props = {
    company_name?:string,
    company_logo?:string,
    duration?:string,
    role?:string,
}

function ExpCard({company_name,role,company_logo,duration}: Props) {
  return (
    <CardWrapper 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    
    className='w-[90%] h-full'
    >
        <p className='text-sm grey_text'>{duration}</p>
     {company_logo &&   <Image 
        src={company_logo}
        width={80}
        height={80}
        alt='company_logo'
        className='rounded-full mt-6 object-cover'
        />}
        <div className='mt-5'>
            <p className='white_text text-xl font-semibold'>{company_name}</p>
            <p className='grey_text text-lg'>{role}</p>
        </div>

    </CardWrapper>
  )
}

export default ExpCard