import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg"


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
}

const Subscribe = () => {
  return (
    <div
      className=' dark:bg-gray-800 text-white'
      style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 mx-auto max-w-[800px]'>
          <h1 data-aos="fade-right"
            className='text-2xl text-center sm:text-left sm:text-3xl font-semibold'
          >Get Notified About New Products</h1>

          <div className='flex gap-2'>
            <input type="email" data-aos="fade-up" placeholder='Enter Your email' required
              className='w-full p-3 focus:outline-none text-black'
            />
            <button data-aos="fade-left" onClick={() => { alert("Thanks for your interest offer is on the way..") }}
              className='bg-white text-primary p-2 rounded hover:scale-105 w-[200px] '
            >Get Offer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
