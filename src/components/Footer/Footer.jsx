import React from 'react'
import asapLogo from '../../assets/images/logo.png'
import KeralGovLogo from '../../assets/images/GovKerala.png'
import { HiMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='text-gray-700'>
            <div className='flex justify-around px-14'>
                <div>
                    <h3 className='text-lg font-semibold text-black'>Our Solutions</h3>
                    <ul className='ps-1 text-lg font-light'>
                        <li>Full time jobs</li>
                        <li>Part time jobs</li>
                        <li>Paid time jobs</li>
                        <li>Free time jobs</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-black'>Our Locations</h3>
                    <ul className='ps-1 text-lg font-light'>
                        <li>CSP Chathannur</li>
                        <li>CSP Cheriya Kaapor</li>
                        <li>CSP Kalamassery</li>
                        <li>CSP Kasaragod</li>
                    </ul>
                </div>
                <ul className='ps-1 text-lg font-light'>
                    <li>CSP Chathannur</li>
                    <li>CSP Cheriya Kaapor</li>
                    <li>CSP Kalamassery</li>
                    <li>CSP Kasaragod</li>
                </ul>
                <ul className='ps-1 text-lg font-light'>
                    <li>CSP Chathannur</li>
                    <li>CSP Cheriya Kaapor</li>
                    <li>CSP Kalamassery</li>
                    <li>CSP Kasaragod</li>
                </ul>
                <ul className='ps-1 text-lg font-light'>
                    <li>CSP Chathannur</li>
                    <li>CSP Cheriya Kaapor</li>
                    <li>CSP Kalamassery</li>
                    <li>CSP Kasaragod</li>
                </ul>
            </div>
            <div className='my-14 pb-7 grid grid-cols-3 border-b-2 border-b-orange-200 px-28'>
                <div>
                    <div className='flex items-center'>
                        <img src={asapLogo} alt="" className='w-56' />
                        <img src={KeralGovLogo} alt="" className='w-40' />
                    </div>
                    <div className='bg-red-100 p-1 w-96 text-center text-xs'>
                        <p>A GOVERNMENT OF KERALA COMPANY</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold mb-2'>Customer Support</h3>
                    <ul className='grid grid-cols-2 gap-2'>
                        <li className='flex items-center gap-1'>
                            <HiMail className='text-2xl text-orange-600'/>
                            <p>Info@asapkerala.gov.in</p>
                        </li>
                        <li className='flex items-center gap-1'>
                            <FaPhoneVolume className='text-xl text-orange-600'/>
                            <p>0471 27772500</p>
                        </li>
                        <li className='flex items-center gap-1'>
                            <TbDeviceMobileFilled className='text-2xl text-orange-600'/>
                            <p>+919495999623</p>
                        </li>
                        <li className='flex items-center gap-1`'>
                            <TbDeviceMobileFilled className='text-2xl text-orange-600'/>
                            <p>+919495999709</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold mb-2'>Stay Updated</h2>
                    <p>We will sent you updates on the latest happenings at ASAP. Subscribe and stay connected with us.</p>
                    <div className='my-6 border flex rounded-md justify-between px-1'>
                        <input type="text" placeholder='Enter your email id' className='p-3 outline-none bg-transparent w-full' />
                        <button className='p-3 bg-orange-400 my-1 rounded-md text-white'><FaChevronRight/></button>
                    </div>
                </div>
            </div>
                <div className='flex justify-around px-14 border-b-2 border-b-orange-200 pb-12'>
                    <ul className='flex flex-wrap pr-16 gap-2 text-base w-1/2'>
                        <li>Contact Us</li>
                        <li>Partner With Us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>FAQs</li>
                        <li>Case Studies</li>
                        <li>Blogs</li>
                        <li>News & Events</li>
                        <li>Services</li>
                    </ul>
                    <p className='text-sm w-1/2'>
                    All trademarks, logos and names are properties of their respective owners. Unauthorized Copying, Usage, Publishing of our website contents prohibited. Use of this Web site constitutes acceptance of the our User Agreement, Cancellation & Refund and Privacy Policy
                    </p>
                </div>
                <div className='px-14 py-12 grid grid-cols-2'>
                    <div>
                        <p>&#169; 2024 ASAP Community Skill Park, All Rights Reserved.</p>
                        <p>Powered by SRV InfoTech</p>
                    </div>
                    <ul className='flex gap-3 justify-end'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund & Cancellation</li>
                        <li>Disclaimer</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer
