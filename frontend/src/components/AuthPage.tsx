import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { AuthformData} from '../tyes/types'


function AuthPage() {
    const [login, setLogin] = useState(true)
    const [showPassword,setShowpassword]=useState(false)
    const [showcPassword,setcShowpassword]=useState(false)
    const [formData,setFormdata] = useState<AuthformData>({
        email:"",
        password:"",
        confirmPassword:""
    })
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{

      setFormdata({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e:React.ClickEvent<HTMLFormElement>)=>{

    }
    return (
    <div className='min-h-screen flex  items-center justify-center '>
         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 ">
          {login? "Login" : "Register"}
        </h2> 
        <form className='space-y-4'>
        <input type="email" name="email" value={formData.email} onChange ={handleChange}
        placeholder='Email' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
         <div className="relative">
        <input type={showPassword ? 'text': 'password'} name="password" value={formData.password} onChange ={handleChange}
        placeholder='Password' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
        
        <button type="button" onClick={()=>setShowpassword(!showPassword)} className='absolute right-3 top-3 text-gray-500'>
          {showPassword ? <EyeSlashIcon className='h-5 w-5' /> : <EyeIcon className='h-5 w-5' />}
        </button>
        </div>
        
  <div className="relative">
       {!login &&   <input type={showcPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange ={handleChange}
        placeholder='Confirm Password' className='w-full px-4 py-3 outline-none border border-blue-500 rounded-md '/>
        }
         <button type="button" onClick={()=>setcShowpassword(!showcPassword)} className='absolute right-3 top-3 text-gray-500'>
          {showcPassword ? <EyeSlashIcon className='h-5 w-5' /> : <EyeIcon className='h-5 w-5' />}
        </button>
       </div>
        <button type="submit" onSubmit={handleSubmit} className='w-full px-4 py-3 bg-blue-600 text-white rounded-md' >Submit</button>
      
        </form>
        <button onClick={()=>setLogin(!login)} className='text-center text-blue-500 hover:underline mt-5'> {login ?"Don't have an account? " : "Already have an account?"}</button>

        </div> 
    
    </div>

  )
}

export default AuthPage