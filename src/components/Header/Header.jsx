import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'


const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <nav class=" border-gray-200">
            <nav class={`flex flex-wrap justify-between items-center px-14 pb-1 fixed top-0 left-0 right-0 z-50  ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-28" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
                    <ul class="font-semibold flex flex-col p-4 md:p-0 mt-4 border text-base border-gray-100 rounded-lg md:flex-row md:items-center md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 " aria-current="page">Courses</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0  md:-blue-500 md:ransparent">Events</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0  md:-blue-500 md:ransparent">Skill Parks</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0  md:-blue-500 md:ransparent">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0  md:-blue-500 md:ransparent">Contact</a>
                        </li>
                        <li>
                            <button className='border border-gray-900 py-2 px-5 rounded-md'>Login</button>
                        </li>
                        <li>
                            <button className='bg-orange-400 py-2 px-5 rounded-md text-white'>Get Started</button>
                        </li>
                    </ul>
                </div>
            </nav>
        // </nav>

    )
}

export default Header
