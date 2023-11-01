import React, {useState, useEffect, useRef} from 'react'
import { styles } from '@/styles';
import { addproduct } from '@/assets';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db, storage} from '@/firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from 'next/image';
import { resolve } from 'path';
import { setTimeout } from 'timers';





const AddProduct = () => {
    const imageUploadRef = useRef<HTMLInputElement>()

    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<string>('Men');
    const [brand, setBrand] = useState<string>('');
    const [isNew, setIsNew] =  useState<string>('Yes');
    const [desc, setDesc] = useState<string>('');
    const [image, setImage] = useState<File>();
    const [imageLink, setImageLink] = useState('');
    const [displayImage, setDisplayImage] = useState<string>('')
    const [perc, setPerc] = useState<number>(0);
    const [preview, setPreview] = useState<string>('');
    

    useEffect(()=>{
       

        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
              setPreview(reader.result as string);
            }
            reader.readAsDataURL(image)
          }
          else{
            setPreview(null)
          }

        
        
    //////////////////////////// image upload and saving code here//////////////////////////////
      
    //    const name = new Date().getTime() + 'Product'
    //             const storageRef = ref(storage, name)

    //     const uploadTask =  uploadBytesResumable(storageRef, file);
    //         uploadTask.on('state_changed', 
    //         (snapshot) => {
    //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             console.log('Upload is ' + progress + '% done');
    //             switch (snapshot.state) {
    //             case 'paused':
    //                 console.log('Upload is paused');
    //                 break;
    //             case 'running':
    //                 console.log('Upload is running');
    //                 break;
    //             }
    //             setPerc(progress)
    //         }, 
    //         (error) => {
    //             console.log(error)
    //         }, 
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {
    //              setImageLink(downloadURL) 
    //              console.log(file)             
    //             });
    //         }
    //     );

    },[image])
    
    

   const handleImageUpload = (e:any) => {
       e.preventDefault();
        //////////////////////////// image upload and saving code here//////////////////////////////
      
       const name = new Date().getTime() + 'Product'
                const storageRef = ref(storage, name)

        const uploadTask =  uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
                setPerc(progress)
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {

                    const promise = new Promise(function(resolve) {
                       resolve(setImageLink(downloadURL))
                       }).then(async()=>{
                                try {
                                    const docRef = await addDoc(collection(db, "products"), {
                                    title,
                                    price,
                                    category,
                                    brand,
                                    isNew,
                                    desc,
                                    imageLink,
                                    timeStamp: serverTimestamp()           
                                    });
                                    console.log("Document written with ID: ", docRef.id);
                                } catch (e) {
                                    console.error("Error adding document: ", e);
                                }  
                            
                       });

           });
           }
        );
    }

   

    const handleSubmit = async() => {
       
        
        try {
            const docRef = await addDoc(collection(db, "products"), {
            title,
            price,
            category,
            brand,
            isNew,
            desc,
            imageLink,
            timeStamp: serverTimestamp()           
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }  
    }

 

   

  return (
    <div className='bg-white p-2 rounded-md'>
       
        <div className='flex w-full mt-4 mb-2 justify-center'>
            <p className='text-2xl tracking-[2px] formTitle font-bold fontLobster text-fuchsia-900'>Add  Product</p>
        </div>
        
         <form onSubmit={handleImageUpload}  className='p-2 flex flex-col' >
                <div className='flex flex-col  mdl:flex-row gap-2'>

    {/* /////////////////////      first portion of form from "title" to "New"    /////////////////////////  */}
                    <div className='basis-1/2 flex flex-col'>

                        <div className=''> 
                                <label className="addProductLabel pt-4" > Title </label>
                                <input className="addProductInput " id="title" type="text" placeholder="Title"/>
                        </div> 

                        <div className=''>
                                <label className="addProductLabel" >
                                    Category
                                </label>
                                <div className="relative">
                                    <select className="addProductInput " name='category' onChange={(e)=>setCategory(e.target.value)}>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Kids</option>
                                    </select>
                                </div>
                        </div>

                        <div className=''> 
                            <label className="addProductLabel"> Price </label>
                            <input className="addProductInput" name="price" type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
                        </div> 

                        <div className=''> 
                            <label className="addProductLabel"> Brand </label>
                            <input className="addProductInput" name='brand' type="text" placeholder="Brand" onChange={e=>setBrand(e.target.value)}/>
                        </div> 

                        <div className='' >
                                <label className="addProductLabel" >
                                    New?
                                </label>
                                <div className="relative">
                                    <select className="addProductInput" name='new' onChange={e=>setIsNew(e.target.value)}>
                                    <option>Yes</option>
                                    <option>No</option>
                                    </select>
                                </div>
                        </div>


                    </div> 

    {/* //////////////////     second portion of form where image and descriptionlies    //////////////////////  */}
                    <div className="w-full  mdl:w-1/2 flex flex-col content-between px-3">
                        <div className='flex flex-col   mt-4'>
                            <div className=' mb-3 mt-4    '>
                            {/* <Image  className='object-fill h-40 w-60 rounded-md mb-2' src='' alt='image'/> */}
                            
                            {preview? 
                                
                                    <img className='w-[75%]  aspect-video rounded-lg' src={preview} alt='image'
                                    onClick={()=>{
                                        setImage(null);
                                         }}
                                    />
                                   
                                 :
                                <button className='w-[75%] aspect-video rounded-lg bg-gray-200'
                                 onClick={(e)=>{
                                    e.preventDefault();
                                    imageUploadRef.current?.click();
                                }} >Upload Image</button>}
                            
                            
                            <input className="addProductInputFile hidden" accept='image/*'  ref={imageUploadRef} type="file"
                              onChange={(e)=>{
                               
                                    const file = e.target.files[0]
                                    if (file){
                                      setImage(file)
                                    }
                                    else{
                                      setImage(null)
                                    }
                                  }}
                                
                               />
                            </div>
                        
                            <div className=''> 
                                <label className="hidden w-full md:flex  tracking-wide text-gray-600 text-xs  font-bold   mb-1" > Description </label>
                                <textarea rows={6} className="flex w-full  text-xs pt-3 bg-gray-200 text-gray-700 border-2 border-gray-200 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-fuchsia-900" id="title"  placeholder="description"/>
                            </div>     
                            
                        </div>
                    </div>
                

    {/* ///////////////////////   both portions ends here //////////////////////// */}
                </div>
             <div className='w-full mb-4 mt-2'>                
                <button disabled={perc>0 && perc<100} type='submit' className='mt-4 fontLobster bg-fuchsia-900 w-48 py-2 rounded-full  text-white hover:bg-fuchsia-700 formBoxShadow'>{(perc>0 && perc<100)? `Uploading image...${Math.floor(perc)}%` : 'Add Product'}</button> 
            </div>
         </form>
    </div>
  )
}

export default AddProduct