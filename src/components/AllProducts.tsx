import React, {useState, useEffect, useRef} from 'react'

const AllProducts = () => {
  const fileInputRef = useRef<HTMLInputElement>()
  const [image, setImage] = useState<File>();
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

  },[image])

  return (
    <div>
       <form className='p-10'> 
        
       {preview?
       <div>
        <img className='h-24 w-36' onClick={()=>setPreview('')} src={preview} alt='image'/>
        <button  onClick={(e)=> {
            e.preventDefault();
            fileInputRef.current.click();
          }} >change</button>
        </div>
        
         :
        <button className='w-48 m-8 h-36 bg-slate-200'
          onClick={(e)=> {
            e.preventDefault();
            fileInputRef.current.click();
          }}
        >Upload</button>
          }


        <input type='file' ref={fileInputRef}
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
       </form>
    </div>
  )
}

export default AllProducts