import React from 'react'
import digitalMarketing from '../../assets/images/Digital-Marketing.jpg'
import beauty from '../../assets/images/makeUp.webp'
import career from '../../assets/images/rocket.jpg'
import drone from '../../assets/images/drone.jpg'


import './SuggestedCourses.css'
import { MdOutlineDateRange } from "react-icons/md";
import { GoClock } from "react-icons/go";


const SuggestedCourses = () => {
    return (
        <div className='mx-14'>
            <h1 className='text-2xl font-extrabold'>Suggested Course in IIT-ITES</h1>
            <div className='px-6 mt-5 grid md:grid-cols-3 lg:grid-cols-4'>
                <div className='flex flex-col items-center w-72'>
                    <div className='course-card h-40 z-10 -mb-2 '>
                        <img src={digitalMarketing} alt="" />
                    </div>
                    <div className='bg-white w-80 p-3 drop-shadow-sm rounded-md'>
                        <h3 className='font-semibold'>Digital Marketing Workshops</h3>
                        <div className='flex gap-4 text-xs font-light pt-3'>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><MdOutlineDateRange/></p>
                                <p className=''>16 Feb 2024</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><GoClock/></p>
                                <p>2 months</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-72'>
                    <div className='course-card w-72 h-40 z-10 -mb-2 '>
                        <img src={beauty} alt="" />
                    </div>
                    <div className='bg-white w-80 p-3 drop-shadow-sm rounded-md'>
                        <h3 className='font-semibold'>Assistant Beauty Therapists</h3>
                        <div className='flex gap-4 text-xs font-light pt-3'>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><MdOutlineDateRange/></p>
                                <p className=''>20 Feb 2024</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><GoClock/></p>
                                <p>20 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-72'>
                    <div className='course-card w-72 h-40 z-10 -mb-2 '>
                        <img src={career} alt="" />
                    </div>
                    <div className='bg-white w-80 p-3 drop-shadow-sm rounded-md'>
                        <h3 className='font-semibold'>Career Development Workshops</h3>
                        <div className='flex gap-4 text-xs font-light pt-3'>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><MdOutlineDateRange/></p>
                                <p className=''>05 Feb 2024</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><GoClock/></p>
                                <p>2 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-72'>
                    <div className='course-card w-72 h-40 z-10 -mb-2 '>
                        <img src={digitalMarketing} alt="" />
                    </div>
                    <div className='bg-white w-80 p-3 drop-shadow-sm rounded-md'>
                        <h3 className='font-semibold'>Digital Marketing Workshops</h3>
                        <div className='flex gap-4 text-xs font-light pt-3'>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><MdOutlineDateRange/></p>
                                <p className=''>16 Feb 2024</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-orange-500 text-lg'><GoClock/></p>
                                <p>2 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedCourses
