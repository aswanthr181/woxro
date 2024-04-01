import React from 'react'

function Footer() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-black text-white  flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Interested in delving deeper into the project?</h2>
      <p className="text-gray-300 mb-6">
        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <a href="mailto:hello@abc.com" className="underline">hello@abc.com</a> or give us a call at <a href="tel:+9148020802730" className="underline">+91 480 20802730</a>.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <a href="skype:your.skype.username?call" className="bg-black text-white border-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
          Ring us on Skype
        </a>
        <a href="#" className="bg-white text-black px-4 py-2 rounded-md  hover:bg-black hover:text-white hover:border-2 transition duration-300">
          Contact Us
        </a>
      </div>
      <p className="text-gray-500 mt-40">
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer