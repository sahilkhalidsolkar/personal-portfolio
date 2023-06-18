"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ExpCard from './ExpCard';
import { Experience } from '@typings';
import { urlFor } from '@utility/utility';
type Props = {
  experiences:Experience[]
}

function Carousel({experiences}: Props) {
  return (
    <Splide options={ { 
        perPage:1,
        gap:'-2rem',
        } } 
        aria-label="React Splide Example">
          {experiences.map(experience=>(
      <SplideSlide>
        <ExpCard 
        key={experience._id}
        company_name={experience.company_name}
        company_logo={urlFor( experience.company_logo).url()}
        role={experience.role}
        duration={experience.duration}
        />
      </SplideSlide>

          ))}
          <SplideSlide>
        <ExpCard 
        company_name={'Many more experiences to gain...'}
        company_logo={'https://source.unsplash.com/rx_GNopVlFs/320x320'}
        />
      </SplideSlide>
      {/* <SplideSlide>
        <ExpCard company='Amazon'/>

      </SplideSlide> */}
    </Splide>
  )
}

export default Carousel