import React from 'react'

function Foot() {
    return (
        <>



            <div className="bg-gray-900 text-white mt-16">

          

  <div className="max-w-6xl mx-auto px-6 md:px-20 py-10
                  flex flex-col md:flex-row justify-between gap-8">

    {/* Brand */}
    <div>
      <h1 className="text-white text-2xl font-bold">Studio</h1>
      <p className="text-sm mt-2 max-w-xs">
        Designing modern studios and digital experiences with passion and
        creativity.
      </p>
    </div>

    {/* Links */}
    <div>
      <h2 className="text-white font-semibold mb-3">Quick Links</h2>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-white font-semibold mb-3">Contact</h2>
      <p className="text-sm">ptnaseel@gmail.com</p>
      <p className="text-sm mt-1">India</p>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 py-4 text-center text-sm">
    © 2025 Studio. All rights reserved.
  </div>




            </div>








        </>
    )
}

export default Foot