import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Element } from 'react-scroll'

function About() {
    return (
        <>
          <Element name='sect2'>
                <div className='md:mt-24 grid md:grid-cols-2 grid-cols-1 h-fit mt-16  rounded-t-4xl bg-white'>
    
                    <div className='md:mt-72 mt-5 md:ms-36'>
                        <div className='bg-gray-100 w-40 md:ms-0 ms-2  rounded-4xl h-7 flex'>
                            <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2", }} className='ms-2 mt-1.5' />
                            <h1 className='font-light ms-2'>unlimitted asset</h1>
                        </div>
    
                        <div className='mt-5 ms-2 md:ms-0'>
                            <h1 className='text-4xl font-bold'>Unlock Unlimited Creativity:</h1>
                            <h1 className='text-4xl font-bold'>Studio Brings the World's</h1>
                            <h1 className='text-4xl font-bold'>Finest Assets to Your</h1>
                            <h1 className='text-4xl font-bold'>Fingertips</h1>
                            <p className=' mt-5'>Step into a world of endless creative possibilities with Studio, your gateway to our entire collection of top-notch assets. Embraced by millions of users worldwide, we proudly present a premium asset library, meticulously curated to ensure you have the finest resources right at your fingertips.</p>
                        </div>
                    </div>
    
    
                    <div className='md:mt-72 mt-16 md:w-[600px] md:ms-16'>
    
    
                        <video autoPlay loop playsInline muted>
                            <source src="https://lfs.creativefabrica.com/web/pages/studio/unlimited-creativity.webm" className='w-full  h-full object-cover ' type="video/mp4" />
    
                        </video>
    
                    </div>
    
    
    
    
                   
    
    
                    <div className='md:mt-32 mt-16 md:w-[600px] md:ms-16'>
    
    
                        <video autoPlay loop playsInline muted>
                            <source src="https://lfs.creativefabrica.com/web/pages/studio/revolutionize-your-design.webm" className='w-full  h-full object-cover ' type="video/mp4" />
    
                        </video>
    
                    </div>
    
    
                    <div className='md:mt-40 md:ms-36'>
                        <div className='bg-gray-100 w-28 md:ms-0 ms-2 rounded-4xl h-7 flex'>
                            <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2", }} className='ms-2 mt-1.5' />
                            <h1 className='font-light ms-2'>Spark api</h1>
                        </div>
    
                        <div className='mt-5 md:ms-0 ms-2'>
                            <h1 className='text-4xl font-bold'>Revolutionize Your Design</h1>
                            <h1 className='text-4xl font-bold'>Workflow: Unleash Creativity</h1>
                            <h1 className='text-4xl font-bold'>with Spark AI in Studio</h1>
                            <p className=' mt-5 '>With Spark AI seamlessly integrated into Studio, accelerate your design process, rapidly transforming ideas into reality. Experience enhanced productivity and innovation, as Creative Fabrica leads the charge in generative AI asset creation, empowering you to reach new heights of creative excellence.</p>
                        </div>
                    </div>
    
    
    
    
    
    
    
                    <div className='md:mt-32 md:ms-48 mt-16 '>
                        <div className='bg-gray-100 w-28 md:ms-0 ms-2 rounded-4xl h-7 flex'>
                            <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2", }} className='ms-2 mt-1.5' />
                            <h1 className='font-light ms-2'>Templates</h1>
                        </div>
    
                        <div className='mt-5 md:ms-0 ms-2 '>
                            <h1 className='text-4xl font-bold'>Effortless Creativity for All</h1>
                            <h1 className='text-4xl font-bold'>Skill Levels in Studio</h1>
                            <p className=' mt-5'>Step into a world of endless creative possibilities with Studio, your gateway to our entire collection of top-notch assets. Embraced by millions of users worldwide, we proudly present a premium asset library, meticulously curated to ensure you have the finest resources right at your fingertips.</p>
                        </div>
                    </div>
    
    
                    <div className='md:mt-10 md:w-[600px] md:ms-16'>
    
    
                        <video autoPlay loop playsInline muted>
                            <source src="https://lfs.creativefabrica.com/web/pages/studio/effortless-creativity.webm" className='w-full  h-full object-cover ' type="video/mp4" />
    
                        </video>
    
                    </div>
    
    
    
    
    
    
    
                    
                    <div className='md:mt-32 mt-16 md:w-[600px] md:ms-16'>
    
    
                        <video autoPlay loop playsInline muted>
                            <source src="https://lfs.creativefabrica.com/web/pages/studio/seamless-licensing.webm" className='w-full  h-full object-cover ' type="video/mp4" />
    
                        </video>
    
                    </div>
    
    
                    <div className='md:mt-44 md:ms-36 '>
                        <div className='bg-gray-100 w-24 rounded-4xl md:ms-0 ms-2 h-7 flex'>
                            <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2", }} className='ms-2 mt-1.5' />
                            <h1 className='font-light ms-2'>License</h1>
                        </div>
    
                        <div className='mt-5 md:ms-0 ms-2'>
                            <h1 className='text-4xl font-bold'> Seamless Licensing for</h1>
                            <h1 className='text-4xl font-bold'>Commercial Excellence</h1>
                            <p className=' mt-5 '>Studio offers a flexible commercial license, granting you complete freedom to use our extensive range of assets, templates, and graphics with ease. This versatility is perfect for everyone, from crafters and educators to businesses and Print on Demand sellers, allowing you to focus on boosting your commercial ventures worry-free.</p>
                        </div>
                    </div>
                      
    
    
    
                  
    
                    </div>
    
          </Element>





     












        </>
    )
}

export default About