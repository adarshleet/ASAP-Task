import React from 'react'
import downloadApp from '../../assets/images/downloadApp.png'
import { RiShieldCheckFill } from "react-icons/ri";
import PlayStore from '../../assets/images/Google.png'
import AppleStore from '../../assets/images/Apple.png'


const DownloadBanner = () => {
  return (
    <div className='bg-white my-16 flex'>
        <div className='w-1/2'>
            <img src={downloadApp} alt="" width={600} className=''/>
        </div>
        <div className='pb-20 w-1/2' >
            <div className='h-full w-full p-28' style={{backgroundColor:'#FCF6F4',borderBottomLeftRadius:'18rem'}}>
                <h3 className='text-4xl font-extrabold mb-6'>Download Our App</h3>
                <h5 className='text-xl'>Its time to discover what you've been missing.</h5>
                <h5 className='text-xl mb-4'>Download our app and see for yourself.</h5>
                <div className='flex gap-4'>
                    <div className='flex text-lg items-center gap-1'>
                        <p className='text-orange-500 text-2xl'><RiShieldCheckFill/></p>
                        <p>Easy to Use</p>
                    </div>
                    <div className='flex text-lg items-center gap-1'>
                        <p className='text-orange-500 text-2xl'><RiShieldCheckFill/></p>
                        <p>24 hours Support</p>
                    </div>
                    <div className='flex text-lg items-center gap-1'>
                        <p className='text-orange-500 text-2xl'><RiShieldCheckFill/></p>
                        <p>User Friendly</p>
                    </div>
                </div>
                <div className='flex items-center mt-2'>
                    <img src={AppleStore} alt="" className='w-40'/>
                    <img src={PlayStore} alt="" className='w-52'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadBanner
