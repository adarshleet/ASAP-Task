import React from 'react'
import digitalMarketing from '../../assets/images/Digital-Marketing.jpg'
import './SuggestedCourses.css'
import { MdOutlineDateRange } from "react-icons/md";
import { GoClock } from "react-icons/go";


const SuggestedCourses = () => {
    return (
        <div className='mx-14'>
            <h1 className='text-2xl font-extrabold'>Suggested Course in IIT-ITES</h1>
            {/* <div className='px-6 mt-5'>
                <div className='w-80'>
                    <div className='w-72 h-40 course-card relative z-10'>
                        <img src={digitalMarketing} alt="" />
                        <div className='bg-white p-3 w-80 drop-shadow-md rounded-md absolute top-0'>
                            <h4>Digital Marketing workshops</h4>
                        </div>
                    </div>
                </div>
            </div> */}
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
