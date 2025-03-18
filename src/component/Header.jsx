import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { Link } from 'react-scroll'

function Header() {
   
  const [open, setopen] = useState(false)

  return (
    <>


    <div className='flex'>

       
         
              <h1 className='text-violet-700  md:ms-72 pt-8 ms-10 text-4xl font-medium '>Studio</h1>
          
              <div>
  
          <div className='md:flex hidden ms-96 mt-12 gap-5'>
            <Link to='sect1'>  <h1 className='text-xl text-white font-bold'>Home</h1></Link>
             <Link to='sect2'> <h1 className='text-xl text-white font-bold'>About</h1></Link>
              <Link to='sect3'><h1 className='text-xl text-white font-bold'>Featurse</h1></Link>
              <Link to='sect4'><h1 className='text-xl text-white font-bold'>Contact</h1></Link>
          </div>
  
  
  
          <div className='flex md:hidden ms-40 mt-10 '>
              <Menu className='bg-amber-50 ' onClick={()=>{setopen(!open); console.log("clicked")
              }}/>
  
            { open && <motion.div
             initial={{x:-100}}
             animate={{x:0}}

             className='fixed top-0 left-0 h-[110vh] w-32 px-4  bg-white backdrop-blur-xl'>
              <div className='flex flex-col mt-16 gap-8 '>
             <Link   to='sect1'> <h1 onClick={()=>{setopen(!open)}} className='text-xl text-black font-bold'>Home</h1></Link>
             <Link to='sect2'> <h1 onClick={()=>{setopen(!open)}} className='text-xl text-black font-bold'>About</h1></Link>
              <Link to='sect3'><h1 onClick={()=>{setopen(!open)}} className='text-xl text-black font-bold'>Featurse</h1></Link>
              <Link to='sect4'><h1 onClick={()=>{setopen(!open)}} className='text-xl text-black font-bold'>Contact</h1></Link>
          </div>
            </motion.div>
  }
  
            
           </div>
  
          
  
       </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Header
{/* <div className='ms-24 w-52 rounded-3xl shadow h-10 bg-white '>
            <input type="text" placeholder='search' className='ms-5 mt-1.5 outline-hidden'  />
        </div> */}