import React from 'react'
import port from '../assets/profiles.png'
import { FaStarOfDavid } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'
import bar from '../assets/bar1.jpg'
import barr from '../assets/bar2.jpg'
import barrr from '../assets/bar3.jpg'
import barrrr from '../assets/bar4.jpg'
import barrrrr from '../assets/bar5.jpg'
import barrrrrr from '../assets/bar6.jpg'
import rig from '../assets/rig1.jpg'
import rigg from '../assets/rig2.jpg'
import riggg from '../assets/rig3.jpg'
import rigggg from '../assets/rig4.jpg'
import riggggg from '../assets/rig5.jpg'
import rigggggg from '../assets/rig6.jpg'
import riggggggg from '../assets/rig7.jpg'
import { Element } from 'react-scroll'

function Features() {
    return (
        <>
          <Element name='sect3'>
                <div className='bg-gray-200 h-[3000px] rounded-t-3xl -mt-5  '>
    
    
    
                    <div className='pt-32'>
    
                        <div className='flex justify-center'>
    
                            <img src={port} alt="no image" className='w-36 ' />
    
                        </div>
    
                        <h1 className='text-5xl font-bold text-center mt-6 '>Join Studio Community</h1>
                        <p className='mt-3 text-center'>Browse thousands of templates and graphics</p>
    
    
                        <div className='flex items-center mt-8 justify-center '>
                            <button className='w-44 h-10 rounded-2xl bg-violet-600 text-white font-medium' >Browse all templates</button>
                        </div>
    
    
    
    
    
                    </div>
    
    
    
    
    
    
                    <div className='mt-16  '>
                        <Marquee speed={100}  >
    
                            <div>
                                <img src={bar} alt="" className='md:w-[470px] w-64   mx-4 rounded-3xl hover:transform hover:scale-102 duration-75  ' />
                            </div>
    
                            <div>
                                <img src={barr} alt="" className='md:w-[470px] w-64 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75  ' />
                            </div>
    
                            <div>
                                <img src={barrr} alt="" className='md:w-[470px] w-64 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75 ' />
                            </div>
    
                            <div>
                                <img src={barrrr} alt="" className='md:w-[280px] md:h-[318px] w-44 h-44 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75' />
                            </div>
    
                            <div>
                                <img src={barrrrr} alt="" className='md:w-[470px] w-64 rounded-3xl mx-4  hover:transform hover:scale-102 duration-75' />
                            </div>
    
                            <div>
                                <img src={barrrrrr} alt="" className='md:w-[280px] md:h-[318px] w-44 h-44 rounded-3xl mx-4  hover:transform hover:scale-102 duration-75' />
                            </div>
    
    
                        </Marquee>
                    </div>
    
    
    
    
    
    
    
    
    
                    <div className='mt-8  '>
                        <Marquee direction='right' speed={60} >
    
                            <div>
                                <img src={rig} alt="" className='md:w-[280px] md:h-[318px] w-44 h-44 mx-4 rounded-3xl hover:transform hover:scale-102 duration-75  ' />
                            </div>
    
                            <div>
                                <img src={rigg} alt="" className='md:w-[470px] w-64 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75  ' />
                            </div>
    
                            <div>
                                <img src={riggg} alt="" className='md:w-[300px] md:h-[318px] w-44 h-44 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75 ' />
                            </div>
    
                            <div>
                                <img src={rigggg} alt="" className='md:w-[470px] w-64 mx-4 rounded-3xl  hover:transform hover:scale-102 duration-75' />
                            </div>
    
                            <div>
                                <img src={riggggg} alt="" className='md:w-[280px] md:h-[318px] w-44 h-44 rounded-3xl mx-4  hover:transform hover:scale-102 duration-75' />
                            </div>
    
                            <div>
                                <img src={rigggggg} alt="" className='md:w-[470px] w-64 rounded-3xl mx-4  hover:transform hover:scale-102 duration-75' />
                            </div>
    
                            <div>
                                <img src={riggggggg} alt="" className='md:w-[280px] md:h-[318px] w-44 h-44 rounded-3xl mx-4  hover:transform hover:scale-102 duration-75' />
                            </div>
    
    
                        </Marquee>
                    </div>
    
    
    
    
    
    
    
    
    
                    <div className=' h-[1300px] mt-24 md:px-4  '>
                        <div className=' bg-black   h-full rounded-4xl  '>
    
    
                            <div className=' flex justify-center pt-24 '>
                                {/* <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2", }} size={40} className='w-24' /> */}
                                <FaStarOfDavid color='yellow' size={40} />
                            </div>
    
                            <h1 className='text-5xl mt-5 font-bold text-white text-center'>Studio use cases</h1>
    
    
    
                            <div className=' md:grid-cols-2 grid-cols-1 md:p-32 md:flex gap-5'>
    
                                <div className='relative px-5 md:px-0 md:mt-0 mt-10 hover:transform hover:scale-102 hover:duration-105'>
                                    <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-for-crafters.jpg" alt="no image" className='md:w-[600px]  rounded-2xl ' />
                                    <h1 className='text-white md:text-4xl text-xl font-bold absolute bottom-12 left-1/12 '>Studio for crafters</h1>
                                </div>
    
                                <div className='  md:mt-0 mt-10 md:px-0 px-4'>
                                    <div className='bg-rose-100 md:w-[600px] w-[340px] h-48 grid grid-cols-2  md:h-64 rounded-2xl hover:transform hover:scale-102 hover:duration-105 '>
    
    
                                        <div className='md:text-3xl text-xl mt-24 ms-5 md:mt-32 md:ms-10  font-bold '>
                                            <h1>  Studio for <br /> educaters</h1>
                                        </div>
    
    
                                        <div >
    
                                            <div className=' md:mt-0 mt-1  md:-ms-16 -ms-12 absolute '>
                                                <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/signature.svg" alt="" className='md:w-80 w-52 mt-5' />
                                            </div>
    
                                            <div className='  relative '>
                                                <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/monitor-XDR.png" alt="no image" />
                                            </div>
    
    
    
                                        </div>
    
    
    
    
                                    </div>
    
                                </div>
    
    
    
                            </div>
    
    
    
    
                            <div className='grid md:grid-cols-2 grid-cols-1 pt-4 md:-mt-52  '>
                                <div className=' hover:transform hover:scale-102 hover:duration-105 p-4 md:p-0'>
                                    <div className='bg-[#EDE7D7] md:w-[600px] w-[340px]  md:h-64 md:ms-32 h-48 grid grid-cols-2 md:mt-16 rounded-2xl  '>
    
                                        <div className='md:text-3xl text-xl mt-16 ms-5 md:mt-16 md:ms-10  font-bold '>
                                            <h1>Studio for <br /> print on <br /> Demand</h1>
                                        </div>
    
    
                                        <div className='md:ms-32 ms-10'>
    
                                            <div className=' md:mt-0 mt-1  md:-ms-16 -ms-12 absolute '>
                                                <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/flying-birds.svg" alt="" className='md:w-52 w-32 mt-5' />
                                            </div>
    
                                            <div className='  relative  '>
                                                <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-t-shirt.png" alt="no image" className='md:w-[170px] w-32' />
                                            </div>
    
    
    
                                        </div>
    
    
    
    
    
    
    
    
    
                                    </div>
    
                                </div>
    
    
                                <div className='md:-mt-24 p-4 md:p-0 mt-2 ms-2 hover:transform hover:scale-102 hover:duration-105'>
                                    <div className='relative'>
                                        <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-for-business.jpg" alt="no image" className='w-[600px] rounded-2xl ' />
                                        <h1 className='text-white md:text-4xl text-xl font-bold absolute bottom-12 left-1/12 '>Studio for crafters</h1>
                                    </div>
    
    
                                </div>
    
    
    
    
    
    
                            </div>
    
    
    
    
                            <div className='md:px-[130px]  '>
    
                                <div className='grid md:grid-cols-1 p-2 md:p-0 pt-10 md:pt-0 '>
    
    
    
    
    
                                    <div className=' py-5 md:py-0 md:bg-[url("https://lfs.creativefabrica.com/web/pages/studio/usecases/bottom-background.png")] bg-violet-500 md:w-[1225px] mt-28 md:h-[500px] w-[360px] rounded-2xl '>
                                        <img src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-3d-logo.png" alt="no image" className=' md:ms-[550px] ms-28 -mt-10 md:-mt-16 md:w-28 w-20 ' />
                                        <h1 className='text-center text-5xl font-bold mt-5 text-white'>Go beyond ordinary</h1>
                                        <p className='font- text-white text-center mt-5 text-xl'>Start your design journey today and try it out for free.</p>
    
                                        <button className='bg-white w-32 h-10 md:ms-[550px] ms-32 mt-6 rounded-2xl hover:text-blue-600'>create for free</button>
    
    
                                    </div>
    
                                </div>
    
    
                            </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                        </div>
                    </div>
    
    
                </div>
          </Element>












        </>
    )
}

export default Features


