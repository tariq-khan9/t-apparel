'use client'
import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'



const page = () => {
 const [email, setEmail] = useState('')
 const [pass, setPass] = useState('')
 const [error, setError] = useState(false)

 const router = useRouter()

 const handleLogin = (e:any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push('/dashboard')
      console.log(user)
      // ...
    })
    .catch((error) => {
      console.log(error)
      setError(true)
    });
    
    
 }

  return (
    <div className='flex pt-24 md:pt-28 justify-center'>
        <div className='basis-1/2 mdl:basis-1/3  bg-slate-400'>
            <form className='p-2 flex flex-col' onSubmit={handleLogin}>
                <p>Login here</p>
                <input className='my-4' type='email' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' onChange={e=>setPass(e.target.value)}/>
                <button type='submit' className='mt-4'>Login</button>
                {error && <span>Wrong email or password</span>}
                
            </form>

        </div>
    </div>
  )
}

export default page