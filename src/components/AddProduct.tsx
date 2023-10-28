import React, {useState, useEffect} from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db, storage} from '@/firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const AddProduct = () => {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [file, setFile] = useState<File>();
    const [imageLink, setImageLink] = useState('');
    const [perc, setPerc] = useState<number>(0);
    

    useEffect(()=>{
        const name:string = new Date().getTime() + 'Product'
        const storageRef = ref(storage, name)

        const uploadTask =  uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                 setImageLink(downloadURL)              
                });
            }
        );

    },[file])
    

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        try {
                    
            console.log(imageLink)
            const docRef = await addDoc(collection(db, "products"), {
            title: title,
            price: price,
            imageLink: imageLink,
            timeStamp: serverTimestamp()
            
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        ////////////////// image upload code ends//////////////////////////////////////////
   
    }

   

  return (
    <div>
         <form onSubmit={handleSubmit}  className='p-2 flex flex-col' >
                <p>Add Product</p>
                <input className='my-1' type='text' onChange={e=>setTitle(e.target.value)} placeholder='title' />
                <input className='my-1' type='text' placeholder='oldPrice' />
                <input className='my-1' type='number' onChange={e=>setPrice(e.target.value)} placeholder='price' />
                <input className='my-1' type='text' placeholder='brand' />
                <input className='my-1' type='text' placeholder='isNew' />
                <input className='my-1' type='text' placeholder='category' />
                <input className='my-1' type='text' placeholder='description' />
                <input type='file' onChange={(e)=>setFile(e.target.files[0])}   />
              
                <button disabled={perc>0 && perc<100} type='submit' className='mt-4 bg-white'>{(perc>0 && perc<100)? `Uploading image...${Math.floor(perc)}%` : 'Add Product'}</button>   
            </form>
    </div>
  )
}

export default AddProduct