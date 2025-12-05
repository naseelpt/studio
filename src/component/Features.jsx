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
            <Element name="sect3">
                <div className="bg-gray-200 rounded-t-3xl">

                    {/* Hero Section */}
                    <div className="pt-20 md:pt-32 text-center px-5">
                        <div className="flex justify-center">
                            <img src={port} alt="Studio Logo" className="w-32 md:w-36" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mt-6">Join Studio Community</h1>
                        <p className="mt-2 md:mt-3 text-base md:text-lg">Browse thousands of templates and graphics</p>
                        <div className="flex justify-center mt-6 md:mt-8">
                            <button className="w-40 md:w-44 h-10 rounded-2xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition">
                                Browse all templates
                            </button>
                        </div>
                    </div>

                    {/* Marquee Section 1 */}
                    <div className="mt-12 md:mt-16 overflow-x-hidden">
                        <Marquee speed={100}>
                            {[bar, barr, barrr, barrrr, barrrrr, barrrrrr].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt=""
                                    className="w-36 md:w-64 lg:w-80 h-36 md:h-64 mx-2 md:mx-4 rounded-3xl hover:scale-105 transition duration-150 object-cover"
                                />
                            ))}
                        </Marquee>
                    </div>

                    {/* Marquee Section 2 */}
                    <div className="mt-6 md:mt-8 overflow-x-hidden">
                        <Marquee direction="right" speed={60}>
                            {[rig, rigg, riggg, rigggg, riggggg, rigggggg, riggggggg].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt=""
                                    className="w-36 md:w-64 lg:w-80 h-36 md:h-64 mx-2 md:mx-4 rounded-3xl hover:scale-105 transition duration-150 object-cover"
                                />
                            ))}
                        </Marquee>
                    </div>

                    {/* Use Cases Section */}
                    <div className="mt-16 md:mt-24 px-5 md:px-8">
                        <div className="bg-black rounded-4xl py-12 md:py-16 px-4 md:px-16">

                            {/* Icon */}
                            <div className="flex justify-center">
                                <FaStarOfDavid color="yellow" size={40} />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white text-center mt-4 md:mt-5">Studio Use Cases</h1>

                             <div className="mt-16 px-5">
  <div className="bg-black rounded-4xl py-12 px-4">

    {/* Icon */}
    <div className="flex justify-center">
      <FaStarOfDavid color="yellow" size={40} />
    </div>
    <h1 className="text-3xl md:text-5xl font-bold text-white text-center mt-4 md:mt-5">
      Studio Use Cases
    </h1>

    {/* First Row: Card 1 + Card 2 */}
    <div className="flex flex-col md:flex-row gap-6 mt-8">
      {/* Card 1 */}
      <div className="flex-1 relative hover:scale-105 transition duration-150">
        <img
          src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-for-crafters.jpg"
          alt=""
          className="w-full rounded-2xl object-cover"
        />
        <h1 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-lg md:text-4xl text-white font-bold">
          Studio for Crafters
        </h1>
      </div>

      {/* Card 2 */}
      <div className="flex-1 relative hover:scale-105 transition duration-150">
        <div className="bg-rose-100 rounded-2xl grid grid-cols-2 relative overflow-hidden p-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg md:text-3xl font-bold">Studio for Educators</h1>
          </div>
          <div className="relative flex items-center justify-end">
            <img
              src="https://lfs.creativefabrica.com/web/pages/studio/usecases/signature.svg"
              alt=""
              className="absolute top-2 md:top-4 w-40 md:w-80 right-0"
            />
            <img
              src="https://lfs.creativefabrica.com/web/pages/studio/usecases/monitor-XDR.png"
              alt=""
              className="relative z-10 w-28 md:w-auto mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Second Row: Card 3 + Card 4 */}
    <div className="flex flex-col md:flex-row gap-6 mt-8">
      {/* Card 3 */}
      <div className="flex-1 relative hover:scale-105 transition duration-150">
        <div className="bg-[#EDE7D7] rounded-2xl grid grid-cols-2 relative overflow-hidden p-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg md:text-3xl font-bold">Studio for Print on Demand</h1>
          </div>
          <div className="relative flex items-center justify-end">
            <img
              src="https://lfs.creativefabrica.com/web/pages/studio/usecases/flying-birds.svg"
              alt=""
              className="absolute top-2 md:top-4 w-32 md:w-52 right-0"
            />
            <img
              src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-t-shirt.png"
              alt=""
              className="relative z-10 w-28 md:w-[170px] mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex-1 relative hover:scale-105 transition duration-150 xl:-mt-36">
        <img
          src="https://lfs.creativefabrica.com/web/pages/studio/usecases/studio-for-business.jpg"
          alt=""
          className="w-full rounded-2xl object-cover"
        />
        <h1 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-lg md:text-4xl text-white font-bold">
          Studio for Business
        </h1>
      </div>
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


