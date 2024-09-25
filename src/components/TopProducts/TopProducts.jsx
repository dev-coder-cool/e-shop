import React from 'react'
import img1 from "../../assets/shirt/shirt.png"
import img2 from "../../assets/shirt/shirt2.png"
import img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa6";

const ProductData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        descritpion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, harum ipsum iure cupiditate odio error veniam consequatur aperiam molestiae qui rerum dicta reiciendis ratione mollitia fuga odit id et sapiente."
    },
    {
        id: 2,
        img: img2,
        title: "Printed Shirt",
        descritpion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, harum ipsum iure cupiditate odio error veniam consequatur aperiam molestiae qui rerum dicta reiciendis ratione mollitia fuga odit id et sapiente."
    },
    {
        id: 3,
        img: img3,
        title: "Women Shirt",
        descritpion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, harum ipsum iure cupiditate odio error veniam consequatur aperiam molestiae qui rerum dicta reiciendis ratione mollitia fuga odit id et sapiente."
    },
]


const TopProducts = () => {
    return (
        <div className='dark:bg-gray-950 dark:text-white '>
            <div className='container pt-10  '>
                {/* Header section */}
                <div className='text-left mb-24 '>
                    <p data-aos="fade-up" className='text-xl text-primary/100 font-bold'>Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Best Products</h1>
                    <p data-aos="fade-up" className='text-sm sm:text-xl text-gray-400'>Explore our top-rated products, loved for quality and satisfaction.</p>
                </div>
                {/* Body section */}
                <div
                    className='flex justify-center gap-24 flex-wrap'
                >
                    {
                        ProductData.map((data) => {
                            return (
                                <div
                                    data-aos="zoom-in"
                                    className='rounded-2xl  bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative  shadow-lg duration-300 group max-w-[300px]'
                                >
                                    {/* images */}
                                    <div className='h-[100px]'>
                                        <img src={data.img} alt=""
                                            className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                        />
                                    </div>
                                    {/* details */}
                                    <div className='p-4 text-center'>
                                        {/* star rating */}
                                        <div className='w-full flex justify-center gap-1'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <h1 className='text-xl font-bold'>{data.title}</h1>
                                        <p className='text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2 font-semibold'>{data.descritpion}</p>
                                        <button
                                            className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                        // onClick={handleOrderPopup}
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts
