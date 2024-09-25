import React from 'react'
import img1 from "../../assets/women/women 1.png"
import img2 from "../../assets/women/women2.jpg"
import img3 from "../../assets/women/women3.jpg"
import img4 from "../../assets/women/women4.jpg"
import { FaStar } from "react-icons/fa6";
import AOS from "aos"

const ProductData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: img2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: img4,
        title: "Printed T-Shirt",
        rating: 4.5,
        color: "yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: img1,
        title: "Fashion T-shirt",
        rating: 4.3,
        color: "Pink",
        aosDelay: "800"
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "1000"
    },
]

const Products = () => {
    return (
        <div className='dark:bg-gray-950 pt-10 relative'>

            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-xl text-primary/100 font-bold'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Products</h1>
                    <p data-aos="fade-up" className='text-sm sm:text-xl text-gray-400'>Discover our best-selling products, Shop now before they’re gone!</p>
                </div>
                {/* body section */}
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-6'>
                        {/* Card section */}
                        {
                            ProductData.map((data) => {
                                return (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        key={data.id} className='space-y-3'>
                                        <img src={data.img} alt=""
                                            className='h-[220px] w-[150px] object-cover rounded-md' />
                                        <div>
                                            <h3 data-aos="fade-up" className='font-semibold dark:text-white'>{data.title}</h3>
                                            <p data-aos="fade-up" className='text-sm dark:text-white'>{data.color}</p>
                                            <div className='flex gap-2 items-center'>
                                                <FaStar className='text-yellow-400' />
                                                <span className='text-gray-700 dark:text-white'>{data.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* view all btn */}
                    <div className=' flex justify-center'>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products
