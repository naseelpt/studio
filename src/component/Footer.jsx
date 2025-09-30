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
        <div className='mt-2 bg-white '>
  
  
          <div className='bg-red-100 h-[250px]'>
  
            <h1 className='text-4xl font-bold text-center pt-16'>Latest Studio Trends And Designs For You</h1>
  
            <div className='flex items-center justify-center pt-8'>
              <div  className='bg-white md:w-[500px] h-14 flex items-center gap-3  '>
                <MdEmail size={20} className='md:ms-5 '/>
                <input type="text" placeholder='Enter your email'  />
                <div className='md:ms-[125px] -ms-10 flex items-center'>
                  <button className='w-32 h-[50px] bg-black text-white font-medium '>SUBSCRIBE</button>
                </div>
              </div>
            </div>
  
  
  
  
          </div>
  
  
          <div className=' md:px-32 pt-16 flex '>
            <FaStarOfDavid color='violet' size={40} className='md:ms-32 mt-1.5' />
            <h1 className='font-bold text-4xl ms-5  '>Studio</h1>
  
            <div className='md:mt-1 mt-16 -ms-40 md:ms-32 flex gap-4 md:gap-10'>
              <h1 className='font-bold text-2xl'>Home</h1>
              <h1 className='font-bold text-2xl'>About</h1>
              <h1 className='font-bold text-2xl'>Features</h1>
              <h1 className='font-bold text-2xl'>Contact</h1>
  
  
            </div>
  
  
          
  
            <div className='hover:transform hover:scale-102 hover:duration-105 hover:text-red-800'>
              <button className='w-32 h-10 outline-1 text-xl md:ms-24 md:mt-0 mt-28 -ms-60'>Watch Now</button>
            </div>
  
  
  
  
  
  
  
  
  
  
  
  
          </div>
  
          <div className='pt-[50px] flex items-center justify-center gap-10'>
  
            <div className='w-[55px] h-[50px] outline rounded-xl bg-white flex items-center justify-center hover:transform hover:scale-102 hover:duration-105'>
              <FaInstagram size={30} color="violet" />
             
            </div>
  
            <div className='w-[55px] h-[50px] outline rounded-xl flex items-center justify-center hover:transform hover:scale-102 hover:duration-105'>
              <FaWhatsapp size={30} color='green' />
             
            </div>
  
            <div className='w-[55px] h-[50px] outline rounded-xl flex items-center justify-center hover:transform hover:scale-102 hover:duration-105'>
              <FaFacebook size={30} color='blue' />
             
            </div>
  
            <div className='w-[55px] h-[50px] outline rounded-xl flex items-center justify-center hover:transform hover:scale-102 hover:duration-105'>
              <FaXTwitter size={30} color='' />
             
            </div>
  
  
  
          </div>
  
  
  
          <div className='bg-gray-900 h-16 mt-16'> 
  
            <div className='flex justify-center pt-5'>
              <img src={c1} alt="no image" className='w-5 h-5 mt-1' />
              <h1 className='text-white'>copyright 2025 powerd by ptnaseel@gmail.com</h1>
  
            </div>
  
          </div>
  
  
  
  
  
  
  
  
          <div className='bg-white h-72 md:p-14 md:mt-0 mt-10 md:flex hidden '>
            <div className='bg-violet-600 md:w-full h-64 rounded-2xl grid grid-cols-5  overflow-hidden '>
  
  
             <Marquee direction='up' className='-rotate-24 w-64 overflow-hidden -ms-[270px] '>
              <div className='space-y-6'>
                  <img src={b} alt="no image" className='w-64 ' />
                  <img src={bo} alt="no image" className='w-64  ' />
                  <img src={boo} alt="no image" className='w-64  ' />
                  <img src={booo} alt="no image" className='w-64  ' />
                </div> 
  
               
             </Marquee>
  
             
             <Marquee direction='down'  className='-rotate-24 w-fit overflow-hidden -ms-60 '>
             <div className='space-y-6'>
              
                  <img src={n} alt="no image" className='w-64 ' />
                  <img src={nn} alt="no image" className='w-64  ' />
                  <img src={nnn} alt="no image" className='w-64  ' />
                  <img src={nnnn} alt="no image" className='w-64  ' />
                </div> 
  
               
             </Marquee>
  
  
  
             <Marquee direction='up' className='-rotate-24 w-fit overflow-hidden -ms-52  '>
              <div className='space-y-6'>
                  <img src={z} alt="no image" className='w-64 ' />
                  <img src={zz} alt="no image" className='w-64  ' />
                  <img src={zzz} alt="no image" className='w-64  ' />
                  <img src={zzzz} alt="no image" className='w-64  ' />
                </div> 
  
               
             </Marquee>
  
  
             <Marquee direction='down' className='-rotate-24 w-fit overflow-hidden -ms-44   '>
              <div className='space-y-6'>
                  <img src={p} alt="no image" className='w-64 ' />
                  <img src={pp} alt="no image" className='w-64  ' />
                  <img src={ppp} alt="no image" className='w-64  ' />
                  <img src={pppp} alt="no image" className='w-64  ' />
                </div> 
  
               
             </Marquee>
  
  
             <Marquee direction='up' className='-rotate-24 w-fit overflow-hidden -ms-36  '>
              <div className='space-y-6'>
                  <img src={l} alt="no image" className='w-64 ' />
                  <img src={ll} alt="no image" className='w-64  ' />
                  <img src={lll} alt="no image" className='w-64  ' />
                  <img src={llll} alt="no image" className='w-64  ' />
                </div> 
  
               
             </Marquee>
  
            </div>
          </div>
  
  
  
  
        </div>
     </Element>






    </>
  )
}

export default Footer
