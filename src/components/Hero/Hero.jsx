import React from 'react'
import image1 from "../../assets/Hero/women.png"
import image2 from "../../assets/Hero/shopping.png"
import image3 from "../../assets/Hero/sale.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    {
        id: 1,
        img: image2,
        title: "Upto 50% off on all Men's Wear",
        description: "Discover unbeatable discounts on our entire collection of men's wear. From casual tees to formal attire, now's the perfect time to refresh your wardrobe with up to 50% off on all men's clothing. Don't miss out on these incredible savings!"
    },
    {
        id: 2,
        img: image1,
        title: "30% off on all Women's Wear",
        description: "Step into style with our latest women's collection, now available at 30% off! From chic dresses to everyday essentials, explore a variety of outfits perfect for any occasion. Elevate your fashion game with these limited-time discounts."
    },
    {
        id: 3,
        img: image3,
        title: "70% off on all Products Sale",
        description: "The ultimate sale is here! Get up to 70% off on a wide range of products. Whether you're shopping for clothing, accessories, or home essentials, this is your chance to grab your favorite items at unbelievable prices. Hurry, while stocks last!"
    },
]

const Hero = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        draggable: true,
        touchMove: true,
    };


    return (
        <div className='relative overflow-hidden min-h-[500px] sm:min-h-[715px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* background pattern */}
            <div className='h-[700px] w-[800px] bg-primary/20 absolute -top-1/2 right-0 rounded-3xl rotate-45'></div>

            {/* hero section */}
            <div className='container px-12 sm:px-10 pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {
                        ImageList.map((data) => (
                            <div
                                className='' key={data.id}>
                                {/* text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 text-center sm:text-left '>
                                    <h1
                                        className='text-3xl sm:text-4xl lg:text-5xl font-bold'>{data.title}</h1>
                                    <p
                                        className='text-[14px] sm:text-xl'>{data.description}</p>
                                    <div>
                                        <button className='bg-gradient-to-r from-primary/100 to-secondary/55 hover:scale-105 duration-200 text-white py-2 px-4 cursor-pointer'>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className=''>
                                    <div className=''>
                                        <img src={data.img} alt={data.title} data-aos="zoom-in-up"
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-90 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Hero;

