import React from 'react'
import { SlEye, SlGraduation } from "react-icons/sl";
import { GrUserExpert } from "react-icons/gr";
import { BsCardChecklist } from "react-icons/bs";
import { PiMoney, PiDatabase } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import asapLogo from '../../assets/images/logo.png'
import curveLogo from '../../assets/images/curve.jpg'
import IIT from '../../assets/images/IIT.jpg'
import NCET from '../../assets/images/ncet-logo.png'
import LT from '../../assets/images/L&T.webp'
import GirlWithLaptop from '../../assets/images/GirlLaptop.jpg'

import './MainContent.css'

const MainContent = () => {
    return (
        <div className='flex mx-14'>
            <div className='flex-none hidden lg:block md:w-56 p-3 text-sm'>
                <ul>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border bg-orange-500 text-white rounded-md shadow-md'>
                        <h2 className='text-2xl'><SlEye /></h2>
                        <h2>Overview</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><BsCardChecklist /></h2>
                        <h2>Syllabus</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><GrUserExpert /></h2>
                        <h2>Eligibility</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><PiMoney /></h2>
                        <h2>Course Fee</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><SlGraduation /></h2>
                        <h2>Scholarship</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><PiDatabase /></h2>
                        <h2>Skill Loan</h2>
                    </li>
                    <li className='flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md'>
                        <h2 className='text-2xl text-orange-500'><TbMessage2Question /></h2>
                        <h2>FAQ's</h2>
                    </li>
                </ul>
            </div>
            <div className='p-3 lg:w-1/2'>
                <p className='text-2xl font-extrabold mb-3'>Overview</p>
                <div className='bg-white drop-shadow-4xl p-5 rounded-md'>
                    <div className='flex gap-3 mb-5'>
                        <div className='flex items-center gap-2 flex-1'>
                            <p className='text-2xl text-orange-500'><GoClock /></p>
                            <div>
                                <p className='-mb-1 font-light text-sm'>Duration</p>
                                <p className='text-base font-semibold'>720 Hours</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 flex-1'>
                            <p className='text-3xl text-orange-500'><HiOutlineVideoCamera /></p>
                            <div>
                                <p className='-mb-1 font-light text-sm'>Course Mode</p>
                                <p className='text-base font-semibold'>Offline</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                            <p className='text-2xl text-orange-500'><GrUserExpert /></p>
                            <div>
                                <p className='-mb-1 font-light text-sm'>Eligibility</p>
                                <p className='text-base font-semibold'>Graduate, preferably in Science, CS, IT and EC streams</p>
                            </div>
                        </div>
                    <div className=''>
                        <p className='text-base font-light'>Training Partner</p>
                        <div className='flex gap-2 items-center'>
                            <img src={asapLogo} alt="" className='w-36' />
                            <img src={curveLogo} alt="" className='w-24' />
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-base font-light'>Certification Partner</p>
                        <div className='flex gap-2 items-center'>
                            <img src={IIT} alt="" className='w-24' />
                            <img src={NCET} alt="" className='w-32' />
                            <img src={LT} alt="" className='w-24' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-5'>
                <div className='bg-white p-5 drop-shadow-sm rounded-md'>
                    <div className='mb-5'>
                        <img src={GirlWithLaptop} alt="" className='w-full' />
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-bold mb-5'>Course Registration</h2>
                        <h3 className='font-light'>Enter the basic info and let's begin the journey...</h3>
                        <div className='my-3 space-y-4'>
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Your Full Name'/>
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Mobile Number'/>
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Email'/>
                            {/* <input type="t" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='District'/> */}
                            <select name="" id="" className='w-full p-3 rounded-lg border focus:outline-none text-gray-500'>
                                <option value="" className='h-10' selected>District</option>
                                <option value="" className='' selected>District</option>
                            </select>
                        </div>
                        <div className='my-6'>
                            <h2 className='text-xl font-bold mb-5'>Select CSP</h2>
                            <div>
                                <input type="radio" className='bg-orange-500 text-lg custom-radio'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
