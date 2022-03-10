/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './testimonials.css'
import PER from '../../assets/per.jpg'
import PER2 from '../../assets/per2.jpg'
import PER3 from '../../assets/per3.jpg'
import PER4 from '../../assets/per4.jpg'
import PER5 from '../../assets/per5.jpg'


import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: PER,
    name: 'Harald John',
    review: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque velit eos aut laborum, illum odit, pariatur nostrum animi itaque id? Soluta incidunt voluptas repellendus excepturi culpa nam, accusantium id?'
  },
  {
    avatar: PER2,
    name: 'Sam Robert',
    review: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque velit eos aut laborum, illum odit, pariatur nostrum animi itaque id? Soluta incidunt voluptas repellendus excepturi culpa nam, accusantium id?'
  },
  {
    avatar: PER3,
    name: 'Tina Wilson',
    review: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque velit eos aut laborum, illum odit, pariatur nostrum animi itaque id? Soluta incidunt voluptas repellendus excepturi culpa nam, accusantium id?'
  },
  {
    avatar: PER4,
    name: 'Alice White',
    review: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque velit eos aut laborum, illum odit, pariatur nostrum animi itaque id? Soluta incidunt voluptas repellendus excepturi culpa nam, accusantium id?'
  },
  {
    avatar: PER5,
    name: 'Peter Parker',
    review: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque velit eos aut laborum, illum odit, pariatur nostrum animi itaque id? Soluta incidunt voluptas repellendus excepturi culpa nam, accusantium id?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    
    <Swiper className="container testimonials__container"
    
     // install Swiper modules
     modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
    >
      {
        data.map(({avatar, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide> 
        )
        })
      }

    </Swiper>
    </section>
  )
}

export default Testimonials