'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu, close, logo, cart} from "@/assets";



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className=' w-full h-14 py-2  fixed top-0 z-20 bg-white '
    >
      <div className="w-full flex flex-row  mx-auto ">

        <div className="basis-1/3 md:basis-1/4 pl-4 items-start   flex flex-row">
                <Image className="pt-2 "  height={30} width={30} src={logo} alt="logo"/>
                <p className="p-[3px] pl-0 text-fuchsia-800 fontLogo pt-1 hidden mdl:inline font-bold text-2xl"> T. Apparel</p>
        </div>

          
        <div className="basis-1/3 md:basis-1/2  px-1 lg:px-[60px] lgl:px-20   ">
            <div className="hidden  md:flex flex-row justify-between px-1 pt-1 ">
                  <Link href='#men' className=' text-md fontLobster navHover text-gray-900'><h6>Men</h6></Link>
                  <Link href='#women' className=' text-md fontLobster navHover text-gray-900'>Women</Link>
                  <Link href="#kids" className=' text-md fontLobster navHover text-gray-900'>Kids</Link>
                  <Link href="#kids" className='hidden mdl:inline fontLobster  lg:px-auto lgl:px-2 px-0 text-md navHover text-gray-900'>About Us</Link>              
              </div>
            
            <div className='md:hidden flex flex-1 justify-center pt-2'> 
                <div className="flex flex-col justify-center items-center"> 
                   <div>  
                          <Image // if scrolled then change the color of button
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[22px] duration-700 h-[22px] object-contain'
                        onClick={() => setToggle(!toggle)}
                      /> 
                    </div>
                    <div className={` ${toggle? 'flex' : 'hidden'} flex-col w-26 border-2  mt-1 rounded-lg bg-white`}>
                      <Link href='#men' className=' text-md fontLobster navHover text-gray-900'><h6>Men</h6></Link>
                      <Link href='#women' className=' text-md fontLobster navHover text-gray-900'>Women</Link>
                      <Link href="#kids" className=' text-md fontLobster navHover text-gray-900'>Kids</Link>
                      <Link href="#kids" className=' fontLobster   text-md navHover text-gray-900'>About Us</Link>
                  </div>
                </div>
            </div>
              
            
            
        </div>
      

        <div className="basis-1/3 md:basis-1/4 mdl:pl-8 lgl:pl-12 flex flex-row ">
                <div className=" flex flex-row relative ">
                    <div className="w-[30px]  pt-2 ">
                        <Image height={25} width={25} src={cart} alt="cart"/>
                    </div>
                    
                    <div className="w-[60px] hidden pt-2 md:inline">
                      <h1 className={`text-[12px]  pl-1 hidden md:inline text-${scrolled? 'stone-200' : 'black'}`}>Rs. 3560</h1>
                    </div>
                    <span className=" absolute w-4 h-4 top-0 pl-[2px] left-[18px] items-center justify-center rounded-full bg-yellow-500 text-[10px] ">05</span>
                    
                </div>
                <div className="pt-2 pl-3 sm:pl-10 mdl:pl-8 lgl:pl-12 pr-4">
                  <Link href='account'><p>Account</p></Link>
                </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;

