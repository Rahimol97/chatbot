import React, { useState } from 'react'

function AuthPage() {
    const [login, setLogin] = useState(true)
  return (
    <div className='min-h-screen flex  items-center justify-center '>
         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          {login? "Login" : "Register"}
        </h2> 
        <form className='space-y-4'>
        <input type="email" name="email"
        placeholder='Email' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
        <input type="password" name="password"
        placeholder='Password' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
       {!login &&   <input type="password" name="password"
        placeholder='Password' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
        }
       
        <button type="submit" className='w-full px-4 py-3 bg-blue-600 text-white rounded-md' >Submit</button>
      
        <button onClick={()=>setLogin(!login)} className='text-center text-blue-500 hover:underline'> {login ?"Don't have an account? " : "Already have an account?"}</button>
        </form>
        </div> 
    
    </div>

  )
}

export default AuthPage