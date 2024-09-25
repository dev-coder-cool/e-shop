
import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkModeToggle from 'react-dark-mode-toggle';
import { FaCaretDown } from "react-icons/fa";


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#services"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Electronics",
        link: "/#"
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]

const Navbar = () => {

    // Retrieve the dark mode preference from localStorage
    const darkModePreference = localStorage.getItem('darkMode');

    // Check if darkModePreference is 'true' and set the initial state accordingly
    const initialDarkMode = darkModePreference === 'true';

    // Use useState to create isDarkMode state variable
    const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);


    // Update the document class and localStorage whenever isDarkMode changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true'); // Save preference
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false'); // Save preference
        }
    }, [isDarkMode]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
    };

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* upper navbar */}
            <div className='bg-primary/40 py-3'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} alt="Logo" className='w-10' />
                            Shopsy
                        </a>
                    </div>

                    {/* Search bar */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search...' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary  dark:bg-gray-800' />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>

                        {/* Order button */}
                        <button onClick={() => { alert("Ordering not available yet") }} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='hidden group-hover:block transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>

                        {/* Dark Mode Toggle */}
                        {/* npm install react-dark-mode-toggle */}
                        <div className='flex items-center'>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* Lower Navbar */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden  gap-4'>
                    {
                        Menu.map((data) => {
                            return (
                                <li key={data.id}>
                                    <a href={data.link}
                                        className='inline-block px-4 hover:text-primary duration-700 py-2'
                                    >
                                        {data.name}</a>
                                </li>
                            )
                        })
                    }
                    {/* simple dropdown */}

                    <li className='group relative cursor-pointer'>
                        <a href="#" onClick={handleDropdownToggle} className='hover:text-primary duration-700 flex  items-center  gap-[2px] py-2'>
                            Trending Proudcts
                            <span>
                                <FaCaretDown className={`text-xl duration-1000 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </span>
                        </a>
                        {isDropdownOpen ? (
                            <div className='absolute mt-2 left-[-13px] z-[9999]  w-[180px] rounded-md bg-white p-2 text-black border shadow-md'>
                                <ul>
                                    {
                                        DropdownLinks.map((data) => {
                                            return (
                                                <li key={data.id}>
                                                    <a href={data.link}
                                                        className='inline-block w-full rounded-md p-2 0 hover:bg-primary/40'>
                                                        {data.name}</a>
                                                </li>

                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        ) : null}
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;
