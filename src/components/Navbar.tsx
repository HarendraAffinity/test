"use client"
import React, { useState } from 'react'

const Navbar = () => {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar =(): void =>{
        setisClick(!isClick);
        
    };

  return (
 <> 
 <div className='bg-custom-teal w-screen'>
 <div className='top-header max-w-7xl mx-auto px-4 sm:px6 lg:px-8 '>
 <div className="flex justify-between">
  <div className="flex justify-between gap-4 py-2">
  <a href="tel:+919311431087" className='flex justify-between gap-2'>
         <img className='' src="https://www.affinityeducation.in/old-assets/img/call.svg" width="20px" /> <b className='text-white'>+919311431087</b>
     </a>
     <a href="mailto:info@affinityeducation.in" className='flex justify-between gap-2'>
         <img src="https://www.affinityeducation.in/old-assets/img/mail.svg" width="20px" /> <b className='text-white'>info@affinityeducation.in</b>
     </a>
  </div>
  <div className="flex justify-between gap-4 py-2">
  <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/instagram.svg" />
    </a> 
    <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/facebook.svg" />
    </a> 
    <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/linkedin.svg" />
    </a> 
    <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/twitter.svg" />
    </a> 
    <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/pinterest.svg" />
    </a> 
    <a target="_blank" href="#">
    <img width="20px" src="https://www.affinityeducation.in/old-assets/img/youtube.svg" />
    </a>   
  </div>
</div>
</div>
</div>
<nav className='bg-white w-screen'>
    <div className='max-w-7xl mx-auto px-4 sm:px6 lg:px-8'>
        <div className="flex justify-between items-center h-20">
            <div className='flex items-center'>
                <div className='flex-shrink-0'>
                    <a href='/' className='text-white'>
                        <img className='w-100 h-16' src='https://d2l6ismiq7kl4l.cloudfront.net/homepage-video/img/header-logo.gif' />
                    </a>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='ml-4 flex items-center space-x-4'>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        About Us
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        NEET Rank Predictor
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        Our Services
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        Immigration
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        Test Preparation
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        Blog
                    </a>
                    <a href='/' className='text-black hover:text-custom-teal rounded-lg p-2 font-bold'>
                        Contact Us
                    </a>
                </div>
            </div>
            <div className='md:hidden flex items-center'>
                <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar} 
                >
                 {isClick ? (
                    
                    <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6L12 12' />
                   </svg>
                 ) : (
                    <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                   </svg>
                 )}
                </button>
            </div>
        </div>
    </div>
    {isClick && (
        <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 '>
            <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        About Us
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        NEET Rank Predictor
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        Our Services
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        Immigration
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        Test Preparation
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        Blog
                    </a>
                    <a href='/' className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>
                        Contact Us
                    </a>
            </div>
        </div>
    )}
</nav>
</>  
  )
}

export default Navbar