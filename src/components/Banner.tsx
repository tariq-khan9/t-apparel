'use client'
import React from 'react'
import Image from 'next/image'
import { banner, banner2, banner3, banner4,banner5 } from '@/assets'
import Slider from "react-slick";

function SampleNextArrow(props: any) {
    const {  onClick } = props;
    return (
      <div className=' absolute right-8 bg-black text-white bottom-20 ' onClick={onClick}>
            Next
      </div>
      
    );
  }
  
  function SamplePrevArrow(props: any) {
    const {onClick } = props;
    return (
     <div className='absolute z-10 bottom-20 left-8 bg-black text-white' onClick={onClick}>
          Prev
     </div>
    );
  }

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='flex flex-row bg-white w-full  h-64 mt-12 gap-2 '>
        <div className='w-full md:w-2/3 rounded-lg'>
        <Slider {...settings}>
          <div>
          <Image className='rounded-lg' src={banner} alt='banner'/> 
          </div>
          <div>
          <Image className='rounded-lg' src={banner2} alt='banner'/> 
          </div>
          <div>
          <Image className='rounded-lg' src={banner3} alt='banner'/> 
          </div>
          <div>
          <Image className='rounded-lg' src={banner4} alt='banner'/> 
          </div>
          <div>
          <Image className='rounded-lg' src={banner5} alt='banner'/> 
          </div>
          
        </Slider>
           {/* <Image className='rounded-lg' src={banner} alt='banner'/> */}
        </div>
        <div className='w-1/3 bg-slate-700 h-24 hidden md:inline rounded-lg'>

        </div>
    </div>
  )
}

export default Banner