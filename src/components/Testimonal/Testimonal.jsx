import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonals = [
    {
        id: 1,
        name: "Joesh",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum accusamus aperiam quidem, dignissimos perspiciatis sunt tenetur placeat illo facere soluta hic omnis deleniti. Obcaecati nesciunt fuga impedit! Minima, praesentium.",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Roslin",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum accusamus aperiam quidem, dignissimos perspiciatis sunt tenetur placeat illo facere soluta hic omnis deleniti. Obcaecati nesciunt fuga impedit! Minima, praesentium.",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Zimbek",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum accusamus aperiam quidem, dignissimos perspiciatis sunt tenetur placeat illo facere soluta hic omnis deleniti. Obcaecati nesciunt fuga impedit! Minima, praesentium.",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "Henry",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum accusamus aperiam quidem, dignissimos perspiciatis sunt tenetur placeat illo facere soluta hic omnis deleniti. Obcaecati nesciunt fuga impedit! Minima, praesentium.",
        img: "https://picsum.photos/104/104"
    },
    {
        id: 5,
        name: "Dhans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum accusamus aperiam quidem, dignissimos perspiciatis sunt tenetur placeat illo facere soluta hic omnis deleniti. Obcaecati nesciunt fuga impedit! Minima, praesentium.",
        img: "https://picsum.photos/105/105"
    },
]

const Testimonal = () => {

    var settings = {
        dots: true,
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
        <div className='py-10 dark:bg-gray-950'>
            <div className='container'>
                {/* heading section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-xl text-primary/100 font-bold'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-sm sm:text-xl text-gray-400'>See what our satisfied customers have to say! Read real reviews and experiences from those who love our products.</p>
                </div>
            </div>

            {/* cards */}
            <div className='px-10 '>
                <Slider {...settings}>
                    {
                        testimonals.map((data) => {
                            return (
                                <div key={data.id} data-aos="fade-up"
                                    className="flex ml-[-1px] sm:ml-12 flex-col gap-20 shadow-lg py-8 px-6 mx-4 rounded-xl container mb-4 dark:bg-gray-800 bg-primary/10"
                                >
                                    <div className='space-y-3'>
                                        <img src={data.img} alt=""
                                            className='rounded-full w-20 h-20 mb-2'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <p
                                            className='text-xs text-gray-500'
                                        >{data.text}</p>
                                        <h1 className='text-xl  font-bold text-black/80 dark:text-gray-500'>{data.name}</h1>
                                    </div>
                                    <p className='text-black/20 dark:text-white text-9xl font-serif absolute top-[-10px] right-[2px]'>,,</p>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testimonal
