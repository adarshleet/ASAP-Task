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
                <p className='text-3xl font-extrabold mb-3'>Overview</p>
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
                <div className='my-5 text-lg text-gray-700'>
                    <p>Additional Skill Acquisition Programme (ASAP) Kerala is a Section-8 Company of the Department of Higher Education, Government of Kerala, that focusses on skilling students and the general community to enhance their employability. Instituted in 2012, ASAP Kerala transitioned to a company under the Companies Act, 2013, in 2021. br
                        With nearly a decade of service, we at ASAP Kerala have become a premier government edTech company, building integrated learning and talent management solutions. ASAP Kerala has nearly become synonymous with skilling, upskilling and reskilling in corporate and academic domains, by offering 150+ contemporary courses in 19 domains.</p>
                </div>
                <div>
                    <p className='text-3xl font-extrabold mb-3'>Syllabus</p>
                    <div>
                        
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
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Your Full Name' />
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Mobile Number' />
                            <input type="text" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='Email' />
                            {/* <input type="t" className='w-full p-3 rounded-lg border focus:outline-none' placeholder='District'/> */}
                            <select name="" id="" className='w-full p-3 rounded-lg border focus:outline-none text-gray-500'>
                                <option value="" className='h-10' selected>District</option>
                                <option value="" className='' selected>District</option>
                            </select>
                        </div>
                        <div className='my-6'>
                            <h2 className='text-xl font-bold mb-4'>Select CSP</h2>
                            <div className='space-y-3'>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Vizhinjam" />
                                        <span class="radio"></span>
                                        <h3>CSP Vizhinjam</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Palayad" />
                                        <span class="radio"></span>
                                        <h3>CSP Palayad</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Kazhakkoottam" />
                                        <span class="radio"></span>
                                        <h3>CSP Kazhakkoottam</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Mananthavady" />
                                        <span class="radio"></span>
                                        <h3>CSP Mananthavady</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Vizhinjam" />
                                        <span class="radio"></span>
                                        <h3>CSP Vizhinjam</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                                <label className="radio-button flex items-center justify-between gap-2 border p-3 rounded-md">
                                    <div className='flex gap-2'>
                                        <input type="radio" name="example-radio" value="CSP Palayad" />
                                        <span class="radio"></span>
                                        <h3>CSP Palayad</h3>
                                    </div>
                                    <p className='text-xs font-light'>Next Batch April 2024</p>
                                </label>
                            </div>

                            <button className='p-3 text-center w-full bg-orange-400 mt-10 text-white font-semibold text-lg rounded-md' >Register Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
