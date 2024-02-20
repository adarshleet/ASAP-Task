import React, { useRef, useState } from 'react'
import { SlEye, SlGraduation } from "react-icons/sl";
import { GrUserExpert } from "react-icons/gr";
import { BsCardChecklist } from "react-icons/bs";
import { PiMoney, PiDatabase } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { RiShieldCheckFill } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { FaPlus,FaMinus } from "react-icons/fa6";

import asapLogo from '../../assets/images/logo.png'
import curveLogo from '../../assets/images/curve.jpg'
import IIT from '../../assets/images/IIT.jpg'
import NCET from '../../assets/images/ncet-logo.png'
import LT from '../../assets/images/L&T.webp'
import GirlWithLaptop from '../../assets/images/GirlLaptop.jpg'
import canara from '../../assets/images/canara-logo.png'
import sbi from '../../assets/images/SBI-Logo.png'
import ksfe from '../../assets/images/ksfe-logo.png'




import './MainContent.css'

const MainContent = () => {

    const Overview = useRef(null)
    const syllabus = useRef(null)
    const courseFee = useRef(null)
    const scholarship = useRef(null)
    const skillLoan = useRef(null)
    const Faq = useRef(null)
    const [activeButton, setActiveButton] = useState(1);

    const [syllabusOpen,setSyllabusOpen] = useState(1)

    const scrollToRef = (ref,index) => {
        const section = ref.current;
        const topOffset = section.offsetTop;
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        const targetScroll = topOffset - (windowHeight - sectionHeight) / 2 - 50;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        console.log(index)
        setActiveButton(index)
      };

    return (
        <>
            <div className='flex mx-14'>
                <div className='flex-none hidden lg:block lg:w-56  p-3 text-sm sticky'>
                    <ul>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 1 && 'side-button'}`} onClick={()=>scrollToRef(Overview,1)}>
                            <h2 className='text-2xl text-orange-500'><SlEye /></h2>
                            <h2>Overview</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 2 && 'side-button'}`} onClick={()=>scrollToRef(syllabus,2)}>
                            <h2 className='text-2xl text-orange-500'><BsCardChecklist /></h2>
                            <h2>Syllabus</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 3 && 'side-button'}`} onClick={()=>scrollToRef(Overview,3)}>
                            <h2 className='text-2xl text-orange-500'><GrUserExpert /></h2>
                            <h2>Eligibility</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 4 && 'side-button'}`} onClick={()=>scrollToRef(courseFee,4)}>
                            <h2 className='text-2xl text-orange-500'><PiMoney /></h2>
                            <h2>Course Fee</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 5 && 'side-button'}`} onClick={()=>scrollToRef(scholarship,5)}>
                            <h2 className='text-2xl text-orange-500'><SlGraduation /></h2>
                            <h2>Scholarship</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 6 && 'side-button'}`} onClick={()=>scrollToRef(skillLoan,6)}>
                            <h2 className='text-2xl text-orange-500'><PiDatabase /></h2>
                            <h2>Skill Loan</h2>
                        </li>
                        <li className={`flex items-center gap-2 py-2.5 mb-3 ps-4 pr-5 border border-orange-100 bg-white text-gray-500 rounded-md cursor-pointer ${activeButton == 7 && 'side-button'}`} onClick={()=>scrollToRef(Faq,7)}>
                            <h2 className='text-2xl text-orange-500'><TbMessage2Question /></h2>
                            <h2>FAQ's</h2>
                        </li>
                    </ul>
                </div>
                <div className='p-3 lg:w-1/2'>
                    <p className='text-3xl font-extrabold mb-3'>Overview</p>
                    <div className='bg-white drop-shadow-4xl p-5 rounded-md' ref={Overview}>
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
                    <div className='my-5' ref={syllabus}>
                        <p className='text-3xl font-extrabold mb-3'>Syllabus</p>
                        <div className='space-y-3'>
                            <div className={`${syllabusOpen==1 && 'bg-orange-50'} border rounded-md`}>
                                <div className='flex justify-between items-center px-2 cursor-pointer' onClick={()=>setSyllabusOpen(1)}>
                                    <h1 className='p-2'>FOUNDATION FOR MACHINE LEARNING</h1>
                                    <p>{syllabusOpen == 1 ? <FaMinus/> : <FaPlus/>}</p>
                                </div>
                                {syllabusOpen == 1 && 
                                <div className='border-t p-3 space-y-2'>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Linear algebra, ransom processes and optimisation techniques for machine learning</p>
                                    </div>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Develop programming solution in Python with scientific python libraries</p>
                                    </div>
                                </div>}
                            </div>
                            <div className={`${syllabusOpen==2 && 'bg-orange-50'} border rounded-md`}>
                                <div className='flex justify-between items-center px-2 cursor-pointer' onClick={()=>setSyllabusOpen(2)}>
                                    <h1 className='p-2'>FOUNDATION FOR MACHINE LEARNING</h1>
                                    <p>{syllabusOpen == 2 ? <FaMinus/> : <FaPlus/>}</p>
                                </div>
                                {syllabusOpen == 2 && 
                                <div className='border-t p-3 space-y-2'>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Linear algebra, ransom processes and optimisation techniques for machine learning</p>
                                    </div>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Develop programming solution in Python with scientific python libraries</p>
                                    </div>
                                </div>}
                            </div>
                            <div className={`${syllabusOpen==3 && 'bg-orange-50'} border rounded-md`}>
                                <div className='flex justify-between items-center px-2 cursor-pointer' onClick={()=>setSyllabusOpen(3)}>
                                    <h1 className='p-2'>FOUNDATION FOR MACHINE LEARNING</h1>
                                    <p>{syllabusOpen == 3 ? <FaMinus/> : <FaPlus/>}</p>
                                </div>
                                {syllabusOpen == 3 && 
                                <div className='border-t p-3 space-y-2'>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Linear algebra, ransom processes and optimisation techniques for machine learning</p>
                                    </div>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Develop programming solution in Python with scientific python libraries</p>
                                    </div>
                                </div>}
                            </div>
                            <div className={`${syllabusOpen==4 && 'bg-orange-50'} border rounded-md`}>
                                <div className='flex justify-between items-center px-2 cursor-pointer' onClick={()=>setSyllabusOpen(4)}>
                                    <h1 className='p-2'>FOUNDATION FOR MACHINE LEARNING</h1>
                                    <p>{syllabusOpen == 4 ? <FaMinus/> : <FaPlus/>}</p>
                                </div>
                                {syllabusOpen == 4 && 
                                <div className='border-t p-3 space-y-2'>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Linear algebra, ransom processes and optimisation techniques for machine learning</p>
                                    </div>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>Develop programming solution in Python with scientific python libraries</p>
                                    </div>
                                </div>}
                            </div>
                            {/* <div className='border rounded-md'>
                                <h1 className='p-2'>MACHINE LEARNING TECHIQUES</h1>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>MACHINE LEARNING TECHIQUES</h1>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>MACHINE LEARNING TECHIQUES</h1>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>MACHINE LEARNING TECHIQUES</h1>
                            </div> */}
                        </div>
                    </div>
                    <div className='my-10' ref={courseFee}>
                        <p className='text-3xl font-extrabold mb-3'>Course Fee</p>
                        <div className='px-3 py-3  border border-gray-300 w-72 rounded-md flex items-center gap-2'>
                            <div className='border-r pr-4'>
                                <p className='text-4xl text-orange-600'><LuWallet /></p>
                            </div>
                            <div className='ps-2'>
                                <p className='text-xl text-gray-500'>Total Amount</p>
                                <h1 className='text-3xl font-extrabold'>INR 75,000</h1>
                            </div>
                        </div>
                        <div className='my-5 text-gray-600'>
                            <h4 className='font-extrabold text-lg text-black mb-2'>Installment Plan</h4>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='text-orange-600'><RiShieldCheckFill /></p>
                                <p>First installment - 7500 (At the time of registration)</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='text-orange-600'><RiShieldCheckFill /></p>
                                <p>Second installment - 32500 (Before class commencement)</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='text-orange-600'><RiShieldCheckFill /></p>
                                <p>Third installment - 35000 (On completion of 300 hours of the course)</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 ' ref={scholarship}>
                        <p className='text-3xl font-extrabold mb-3 '>Scholarship</p>
                        <div className='space-y-2 text-gray-600'>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                <p>Candidates from SC/ST community</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                <p>Candidates from the Fisherman community</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                <p>Candidates from Transgender community</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                <p>Women candidates from BPL Families</p>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                <p>Women candidates from single-parent families</p>
                            </div>
                        </div>
                        <p className='py-4 text-lg text-gray-600'>The scholarship support is limited to 70% of the course fees or Rs. 20000 whichever is lesser</p>
                    </div>
                    <div className='my-10' ref={skillLoan }>
                        <p className='text-3xl font-extrabold mb-3 '>Skill Loan</p>
                        <p className='text-lg text-gray-600 mb-3'>Below funding agencies are providing skill loans for this course</p>
                        <div className='flex gap-4 text-center'>
                            <div>
                                <img src={canara} alt="" className='w-48 px-2 border' />
                                <p>Canara Bank</p>
                            </div>
                            <div>
                                <img src={sbi} alt="" className='w-44 px-2 border' />
                                <p>State Bank of India </p>
                            </div>
                            <div>
                                <img src={ksfe} alt="" className='w-48 px-1 border' />
                                <p>KSFE</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5' ref={Faq}>
                        <p className='text-3xl font-extrabold mb-3'>Frequently Asked Questions</p>
                        <div className='space-y-3'>
                            <div className='bg-orange-50 border rounded-md'>
                                <h1 className='p-2'>Who is the certifying body of the course?</h1>
                                <div className='border-t p-3 space-y-2'>
                                    <div className='flex items-center gap-3 text-lg font-light'>
                                        <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                        <p>The course is certified by IIT Palakkad</p>
                                    </div>
                                    {/* <div className='flex items-center gap-3 text-lg font-light'>
                                    <p className='p-0.5 rounded-full bg-orange-100 text-orange-500'><IoMdCheckmark /></p>
                                    <p>Develop programming solution in Python with scientific python libraries</p>
                                </div> */}
                                </div>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>Is placement assistance provided on the successful completion of the course</h1>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>Is placement assistance provided on the successful completion of the course</h1>
                            </div>
                            <div className='border rounded-md'>
                                <h1 className='p-2'>Is placement assistance provided on the successful completion of the course</h1>
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
        </>

    )
}

export default MainContent
