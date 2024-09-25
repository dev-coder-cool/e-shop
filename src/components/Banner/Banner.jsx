import React from 'react'
import Bannerimg from "../../assets/women/women2.jpg"
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-gray-950 dark:text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* image section */}
                    <div data-aos="zoom-in">
                        <img src={Bannerimg} alt=""
                            className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>
                    {/* text section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1
                            className='text-2xl sm:text-4xl font-bold'
                        >Winter Sale upto 50% off</h1>
                        <p
                            className='text-sm text-gray-600 '
                        >
                            Don't miss our Winter Sale with up to 50% off on a wide range of products! Shop now and enjoy great discounts for a limited time.
                        </p>
                        <div>
                            <div
                                data-aos="fade-left"
                                className='flex gap-4 items-center'
                            >
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Quality Products</p>
                            </div>

                            <div data-aos="fade-left" className='flex items-center gap-4 mt-2'>
                                <TbTruckDelivery className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Fast Delivery</p>
                            </div>


                            <div data-aos="fade-left" className='flex items-center gap-4 mt-2'>
                                <MdOutlinePayment className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                                <p>Easy Payment method</p>
                            </div>


                            <div data-aos="fade-left" className='flex items-center gap-4 mt-2'>
                                <BiSolidOffer className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
