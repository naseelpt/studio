import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Element } from 'react-scroll'

function About() {
    return (
        <>
         <Element name="sect2">
  <div className="mt-16 md:mt-24 grid grid-cols-1 xl:grid-cols-2 gap-20 bg-white rounded-t-4xl px-5 xl:px-20">

    {/* SECTION 1 TEXT */}
    <div className="flex flex-col justify-center">
      <div className="bg-gray-100 w-fit px-3 rounded-4xl h-7 flex items-center gap-2">
        <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2" }} />
        <h1 className="font-light">Unlimited Asset</h1>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold leading-tight">Unlock Unlimited Creativity:</h1>
        <h1 className="text-4xl font-bold leading-tight">Studio Brings the World's</h1>
        <h1 className="text-4xl font-bold leading-tight">Finest Assets to Your</h1>
        <h1 className="text-4xl font-bold leading-tight">Fingertips</h1>

        <p className="mt-5">
          Step into a world of endless creative possibilities with Studio, your
          gateway to our entire collection of top-notch assets. Embraced by millions
          worldwide, we present a premium asset library curated for excellence.
        </p>
      </div>
    </div>

    {/* SECTION 1 VIDEO */}
    <div className="w-full flex justify-center">
      <video autoPlay loop muted playsInline className="w-full rounded-xl">
        <source
          src="https://lfs.creativefabrica.com/web/pages/studio/unlimited-creativity.webm"
          type="video/mp4"
        />
      </video>
    </div>

    {/* SECTION 2 VIDEO */}
    <div className="w-full flex justify-center">
      <video autoPlay loop muted playsInline className="w-full rounded-xl">
        <source
          src="https://lfs.creativefabrica.com/web/pages/studio/revolutionize-your-design.webm"
          type="video/mp4"
        />
      </video>
    </div>

    {/* SECTION 2 TEXT */}
    <div className="flex flex-col justify-center">
      <div className="bg-gray-100 w-fit px-3 rounded-4xl h-7 flex items-center gap-2">
        <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2" }} />
        <h1 className="font-light">Spark AI</h1>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold leading-tight">Revolutionize Your Design</h1>
        <h1 className="text-4xl font-bold leading-tight">Workflow: Unleash Creativity</h1>
        <h1 className="text-4xl font-bold leading-tight">with Spark AI</h1>

        <p className="mt-5">
          With Spark AI integrated into Studio, accelerate your design process,
          transforming ideas rapidly. Experience innovation as Creative Fabrica leads
          AI asset creation.
        </p>
      </div>
    </div>

    {/* SECTION 3 TEXT */}
    <div className="flex flex-col justify-center">
      <div className="bg-gray-100 w-fit px-3 rounded-4xl h-7 flex items-center gap-2">
        <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2" }} />
        <h1 className="font-light">Templates</h1>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold leading-tight">Effortless Creativity for All</h1>
        <h1 className="text-4xl font-bold leading-tight">Skill Levels in Studio</h1>
        <p className="mt-5">
          Step into a world of endless creative possibilities with Studio, featuring top
          templates and user-friendly tools.
        </p>
      </div>
    </div>

    {/* SECTION 3 VIDEO */}
    <div className="w-full flex justify-center">
      <video autoPlay loop muted playsInline className="w-full rounded-xl">
        <source
          src="https://lfs.creativefabrica.com/web/pages/studio/effortless-creativity.webm"
          type="video/mp4"
        />
      </video>
    </div>

    {/* SECTION 4 VIDEO */}
    <div className="w-full flex justify-center">
      <video autoPlay loop muted playsInline className="w-full rounded-xl">
        <source
          src="https://lfs.creativefabrica.com/web/pages/studio/seamless-licensing.webm"
          type="video/mp4"
        />
      </video>
    </div>

    {/* SECTION 4 TEXT */}
    <div className="flex flex-col justify-center">
      <div className="bg-gray-100 w-fit px-3 rounded-4xl h-7 flex items-center gap-2">
        <FontAwesomeIcon icon={faStarOfDavid} style={{ color: "#0b07f2" }} />
        <h1 className="font-light">License</h1>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold leading-tight">Seamless Licensing for</h1>
        <h1 className="text-4xl font-bold leading-tight">Commercial Excellence</h1>
        <p className="mt-5">
          Studio offers a flexible commercial license that grants full freedom with
          assets, perfect for creators, educators, and businesses.
        </p>
      </div>
    </div>

  </div>
</Element>






     












        </>
    )
}

export default About