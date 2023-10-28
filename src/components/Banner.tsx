'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { banner, banner2, banner3, banner4,banner5, arrowright, arrowleft, sale } from '@/assets'
import Slider from "react-slick";
import Button from './Button'


  
const Banner = () => {
    const [hoverBanner, setHoverBanner] = useState(false)

    function SampleNextArrow(props: any) {
      const {  onClick } = props;
      return (
        <div className={` absolute right-8 w-6 md:w-8  text-white bottom-20 ${hoverBanner? 'visible' : 'invisible'} `}  onClick={onClick}>
              <Image src={arrowright} alt='arrow'/>
        </div>
      );
    }

    function SamplePrevArrow(props: any) {
      const {onClick } = props;
      return (
       <div className={` absolute z-10 left-8 w-6 md:w-8  text-white bottom-20 ${hoverBanner? 'visible' : 'invisible'} `}  onClick={onClick}>
           <Image src={arrowleft} alt='arrow'/>
       </div>
      );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow /> ,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='flex flex-row bg-gray-200 w-full   mt-12 gap-2 '>
        <div className={`w-full h-40 object-cover  md:w-2/3 rounded-lg `} onMouseEnter={()=>setHoverBanner(true)} onMouseLeave={()=>setHoverBanner(false)}>
        <Slider {...settings}>
          <div>
          <Image  className='rounded-lg lg:h-80' src={banner} alt='banner'/> 
          </div>
          <div>
          <Image  className='rounded-lg lg:h-80' src={banner2} alt='banner'/> 
          </div>
          <div>
          <Image  className='rounded-lg lg:h-80 ' src={banner3} alt='banner'/> 
          </div>
          <div>
          <Image  className='rounded-lg lg:h-80' src={banner4} alt='banner'/> 
          </div>
          <div>
          <Image  className='rounded-lg lg:h-80' src={banner5} alt='banner'/> 
          </div>
          
        </Slider>
           {/* <Image className='rounded-lg' src={banner} alt='banner'/> */}
        </div>

        <div className='w-1/3 bg-white  hidden md:inline rounded-lg'>
            <div className='flex flex-row p-2 justify-between'>
                <div className='text-md'>Flash sale of the day</div>
                <p  className='text-[10px] pt-[6px] hidden mdl:inline'>From Rs.1500</p>
            </div>
            <div className='p-2'>
              <Image src={sale} alt='sale'/>
            </div>
            <div className='pl-2 pb-2 '>
              <Button btnText='View All'/>
              <p className='text-[10px] pt-1    hidden mdl:flex'>Ladies Cotton Suits Wholesaler from Peshawar</p>
            </div>
        </div>
    </div>
  )
}

export default Banner