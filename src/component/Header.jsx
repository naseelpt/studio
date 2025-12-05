import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { Link } from 'react-scroll'

function Header() {
   
  const [open, setopen] = useState(false)

  return (
    <>


   <div className="flex justify-between items-center px-5 py-5">

  {/* Logo */}
  <h1 className="text-violet-700 text-4xl font-medium">Studio</h1>

  {/* Desktop Menu */}
  <div className="hidden md:flex gap-8">
    <Link to="sect1">
      <h1 className="text-xl text-white font-bold">Home</h1>
    </Link>
    <Link to="sect2">
      <h1 className="text-xl text-white font-bold">About</h1>
    </Link>
    <Link to="sect3">
      <h1 className="text-xl text-white font-bold">Features</h1>
    </Link>
    <Link to="sect4">
      <h1 className="text-xl text-white font-bold">Contact</h1>
    </Link>
  </div>

  {/* Mobile Menu Icon */}
  <div className="md:hidden">
    <Menu
      className="text-white"
      onClick={() => setopen(!open)}
    />
  </div>

  {/* Mobile Sidebar */}
  {open && (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed top-0 left-0 h-screen w-48 bg-white shadow-xl px-6 pt-20"
    >
      <div className="flex flex-col gap-6">
        <Link to="sect1">
          <h1 onClick={() => setopen(false)} className="text-xl font-bold">Home</h1>
        </Link>
        <Link to="sect2">
          <h1 onClick={() => setopen(false)} className="text-xl font-bold">About</h1>
        </Link>
        <Link to="sect3">
          <h1 onClick={() => setopen(false)} className="text-xl font-bold">Features</h1>
        </Link>
        <Link to="sect4">
          <h1 onClick={() => setopen(false)} className="text-xl font-bold">Contact</h1>
        </Link>
      </div>
    </motion.div>
  )}

</div>

    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Header
{/* <div className='ms-24 w-52 rounded-3xl shadow h-10 bg-white '>
            <input type="text" placeholder='search' className='ms-5 mt-1.5 outline-hidden'  />
        </div> */}