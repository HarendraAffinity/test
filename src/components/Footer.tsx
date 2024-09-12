import React from 'react'

const Footer = () => {
  return (

   <>

    <div className='w-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-10'>
<div className='max-w-6xl mx-auto px-4 sm:px6 lg:px-8 '> 
<h3 className='text-center text-4xl font-semibold text-white pb-5'>We Welcome Associates</h3>
<p className='text-center text-white pb-5'>We have an expert team that assists you in choosing the best university to complete your Study Abroad dream. We provide more than 650+ top medical universities for MBBS/other courses and 25+ nations.</p>
<form className='pl-40 pr-40 mt-5'>   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>
</div>

<div className='w-screen'>
 <div className='max-w-7xl mx-auto px-4 sm:px6 lg:px-8 '>
 <div className="flex justify-between">
  <div className="flex justify-between gap-4 py-10 ">
<div className="w-1/4">
    <img src='https://d2l6ismiq7kl4l.cloudfront.net/homepage-video/img/header-logo.gif' width={200} />
    <p className='py-2'>Affinity Education is a trusted source for authentic educational guidance. From admission-related help to e-learning resources, it ensures that students receive all the help they need to crack the major exams.
</p> 
</div>
<div className="">
    <h3 className='text-2xl text-custom-teal'>Useful Link</h3>
    <ul>
        <li>About</li>
        <li>Our Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
    </ul>
</div>
<div className="">
    <h3 className='text-2xl text-custom-teal'>Legal Compliance</h3>
    <ul>
        <li>Terms & Conditions</li>
        <li>Privacy policy</li>
        <li>Refund Policy</li>
    </ul>
</div>
<div className="">
    <h3 className='text-2xl text-custom-teal'>Contact Us</h3>
    <p className='py-2'>#301, World Trade Tower(WTT),<br></br> Sector 16 Noida, 201301 Noida,<br></br> Uttar Pradesh, India</p> 
</div>


  </div>

</div>
</div>
</div>

</> 
  )
}

export default Footer