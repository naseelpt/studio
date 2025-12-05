import React from 'react'
import { FaFacebook, FaInstagram, FaStarOfDavid, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import c1 from '../assets/c.png'
import Marquee from 'react-fast-marquee'
import b from '../assets/bot.jpg'
import bo from '../assets/bot1.jpg'
import boo from '../assets/bot2.jpg'
import booo from '../assets/bot3.jpg'
import n from '../assets/q.jpg'
import nn from '../assets/qw.jpg'
import nnn from '../assets/qwe.jpg'
import nnnn from '../assets/qwer.jpg'
import z from '../assets/a.jpg'
import zz from '../assets/as.jpg'
import zzz from '../assets/asd.jpg'
import zzzz from '../assets/asdf.jpg'
import p from '../assets/z.jpg'
import pp from '../assets/zx.jpg'
import ppp from '../assets/zxc.jpg'
import pppp from '../assets/zxc.jpg'
import l from '../assets/m.jpg'
import ll from '../assets/mn.jpg'
import lll from '../assets/mnb.jpg'
import llll from '../assets/mnbv.jpg'
import { Element } from 'react-scroll'

function Footer() {
  return (
    <>



    <Element name='sect4'>
  <div className='mt-2 bg-white'>

    {/* Hero / Subscribe Section */}
    <div className='bg-red-100 py-12 px-5 md:px-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
        Latest Studio Trends And Designs For You
      </h1>

      <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
        <div className='flex w-full md:w-[500px] h-14 bg-white rounded-xl items-center px-3 gap-2'>
          <MdEmail size={20} />
          <input 
            type="text" 
            placeholder='Enter your email' 
            className='flex-1 h-full px-2 outline-none'
          />
          <button className='w-32 h-full bg-black text-white font-medium rounded-lg'>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    {/* Navigation & Watch Button */}
    <div className='flex flex-col md:flex-row flex-wrap items-center justify-between px-5 md:px-32 mt-10 gap-4 md:gap-0'>
      <div className='flex items-center gap-3'>
        <FaStarOfDavid color='violet' size={40} />
        <h1 className='font-bold text-3xl md:text-4xl'>Studio</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-4 md:gap-10 mt-4 md:mt-0'>
        <h1 className='font-bold text-2xl cursor-pointer hover:text-violet-600'>Home</h1>
        <h1 className='font-bold text-2xl cursor-pointer hover:text-violet-600'>About</h1>
        <h1 className='font-bold text-2xl cursor-pointer hover:text-violet-600'>Features</h1>
        <h1 className='font-bold text-2xl cursor-pointer hover:text-violet-600'>Contact</h1>
      </div>

      <button className='mt-4 md:mt-0 w-32 h-10 text-xl border rounded-lg hover:text-red-800 transition'>
        Watch Now
      </button>
    </div>

    {/* Social Icons */}
    <div className='flex flex-wrap justify-center gap-6 mt-8'>
      <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition'>
        <FaInstagram size={30} color="violet" />
      </div>
      <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition'>
        <FaWhatsapp size={30} color="green" />
      </div>
      <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition'>
        <FaFacebook size={30} color="blue" />
      </div>
      <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition'>
        <FaXTwitter size={30} />
      </div>
    </div>

    {/* Footer Copyright */}
    <div className='bg-gray-900 h-16 mt-16 flex items-center justify-center'>
      <img src={c1} alt="logo" className='w-5 h-5 mr-2' />
      <h1 className='text-white text-center'>© 2025 Powered by ptnaseel@gmail.com</h1>
    </div>

    {/* Vertical Marquee / Showcase */}
    <div className='bg-violet-600 h-auto md:h-[400px] xl:block hidden mt-10 md:p-10 rounded-2xl overflow-hidden relative'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        {[b, bo, boo, booo].map((img, idx) => (
          <Marquee key={idx} direction={idx % 2 === 0 ? 'up' : 'down'} speed={50} className='w-full'>
            <div className='flex flex-col gap-4'>
              <img src={img} alt='' className='w-full rounded-xl' />
            </div>
          </Marquee>
        ))}
      </div>
    </div>

  </div>
</Element>







    </>
  )
}

export default Footer
