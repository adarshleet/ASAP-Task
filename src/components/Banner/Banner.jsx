import React from 'react'
import robot from '../../assets/images/robot.webp'
import './Banner.css'

const Banner = () => {
    return (
        <>
            {/* <div className='flex justify-between py-10'>
            <div className='flex justify-end font-extrabold items-center md:flex-1 text-5xl px-6 text-gray-800'>
                <p></p>
                <h1 className='md:ps-24'>AI-Machine Learning Developer</h1>
            </div>
            <div className='md:flex-1 p-4'>
                <div className='banner-img'>
                    <img src={robot} alt="" className=''/>
                </div>
            </div>
        </div> */}
            <div className='flex flex-col md:flex-row justify-between py-10 mx-12'>
                <div className='flex justify-center md:justify-end font-extrabold items-center md:flex-1 text-3xl md:text-4xl lg:text-5xl  px-6 text-gray-800'>
                    <h1 className='lg:ps-24'>AI-Machine Learning Developer</h1>
                </div>
                <div className='flex justify-center md:justify-start md:flex-1 p-4'>
                    <div className='banner-img'>
                        <img src={robot} alt="" className='' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
