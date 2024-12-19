"use client"
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
        aria-label="Work Experiences">
          {experiences.map(experience=>(
      <SplideSlide
      key={experience._id}
      >
        <ExpCard 
        company_name={experience.company_name}
        company_logo={urlFor( experience.company_logo).url()}
        role={experience.role}
        duration={experience.duration}
        />
      </SplideSlide>

          ))}
          
    </Splide>
  )
}

export default Carousel