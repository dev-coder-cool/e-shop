import React from 'react'
import banner from "../../assets/website/footer-pattern.jpg"
import logo from "../../assets/logo.png"
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const BannerImg = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
}

const FooterLinks = [
  {
    title: "Home",
    link: "#"
  },
  {
    title: "About",
    link: "#"
  },
  {
    title: "Contact",
    link: "#"
  },
  {
    title: "Blog",
    link: "#"
  },
]

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-black dark:text-white p-5 relative' >
      {/* background pattern */}
      <div className='h-[200px] w-[200px] bg-primary/20 absolute -top-[1%] right-[-10] rounded-3xl rotate-45'></div>

      <div className='container ' data-aos="zoom-in">
        <div className='flex items-center'>
          <img src={logo} alt="" className='w-20 h-20' />
          <h1 className='text-5xl font-bold'>Shopsy</h1>
        </div>
        <p className='font-medium'>Shop the latest trends and top-quality products at unbeatable prices.
          Experience seamless shopping with fast delivery and excellent customer service.
          Discover a wide range of items tailored for your needs and preferences.
          Your satisfaction is our priority—shop with confidence today!</p>
        {/* links */}
        <h1 className='text-xl mt-4 font-medium'>Quick Links</h1>
        <div className='flex gap-5'>
          {
            FooterLinks.map((link) => {
              return (
                <a className='hover:text-primary cursor-pointer'>{link.title}</a>
              )
            })
          }
        </div>

        <div className='flex mt-2 gap-5 text-5xl '>
          <FaSquareWhatsapp />
          <FaSquareInstagram />
          <FaSquareFacebook />
        </div>

        <div className=''>
          <h1 className='text-3xl mt-4 font-bold'>Shopsy</h1>
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
