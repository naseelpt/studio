import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import left from '../assets/left-frame.png'
import right from '../assets/right-frame.png'
import { Element } from 'react-scroll'


function Home() {
    return (
        <>
        <Element name='sect1'>
            
    
    
                <div className='md:mt-20 mt-10'>
    
                    <div className='flex items-center justify-center'>
                        <div className='bg-violet-800 w-[60px] rounded-xl h-[60px] flex items-center justify-center'>
                            <div className='bg-black w-[58px] rounded-xl h-[59px] flex items-center justify-center  '>
                                <div className='bg-violet-800 w-[50px] rounded-xl h-[50px] flex items-center justify-center  '>
                                    <div className='bg-black w-[48px] rounded-xl h-[48px] flex items-center justify-center  '>
    
                                        <div className='bg-violet-700 rounded-xl w-[40px] h-[40px]  flex items-center justify-center'>
                                            <div>
                                                <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#f7f9fc", }} className='text-3xl' />
                                            </div>
                                        </div>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
    
                    <div className='mt-10 '>
                        <h1 className='text-7xl text-center text-white font-bold'>Go Beyond Ordinary</h1>
                        <p className='text-xl md:px-[420px] ms-5 mt-8 text-white'>Transform your creative visions into tangible designs with Creative Fabrica's Studio — a space crafted specifically for innovators like you. Dive into the boundless possibilities with Studio, offering you unrestricted access to our extensive collection of millions of assets, ready to bring your ideas to life</p>
    
    
                    </div>
    
                    <div className='mt-10 flex justify-center'>
    
                        <div className='bg-violet-600 w-36 h-10 rounded-2xl text-center '>
                            <button className=' text-white mt-1 font-bold'>Start designing</button>
                        </div>
    
    
                    </div>
    
    
    
    
                    <div className='md:mt-24 '>
                        <div className='flex '>
                            <div className='mt-32'>
                                <img src={left} alt="no image" />
                            </div>
    
    
                            <div className=" w-[900px] md:mt-1 mt-24  h-full outline rounded-lg">
    
                                <video  autoPlay loop playsInline muted>
                                    <source src="https://lfs.creativefabrica.com/web/pages/studio/hero.webm" className='md:w-full h-full object-cover ' type="video/mp4" />
    
                                </video>
    
                            </div>
    
                            <div className='mt-32'>
                                <img src={right} alt="" />
                            </div>
                        </div>
                    </div>
    
    
    
    
    
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </Element>

        </>
    )
}

export default Home

