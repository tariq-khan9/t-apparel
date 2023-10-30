'use client'
import AddProduct from '@/components/AddProduct'
import AllProducts from '@/components/AllProducts'
import React, {useState} from 'react'




const page = () => {

 const [component, setComponent] = useState('AllProducts')
 

 
  return (
    <div className='flex w-[95%]  md:w-[90%] mdl:[80%]  mx-auto flex-row px-2 mdl:px-4 mt-16 p-2 justify-center gap-2 mdl:gap-4'>
      <div className='basis-1/4  rounded-lg bg-white' >
        <div className='flex flex-col items-start p-4'>
          <p>Products</p>
          <button onClick={()=>setComponent('AllProducts')} className=''>All Products</button>
          <button onClick={()=>setComponent('AddProduct')} className=''>Add Product</button>
          <button className=''>Orders</button>
        </div>
        

      </div>
       <div className='basis-3/4 rounded-lg h-[410px]  bg-white'>
         {component==='AllProducts' && <AllProducts/>}
         {component==='AddProduct' && <AddProduct/>}
        
       </div>
    </div>
  )
}

export default page