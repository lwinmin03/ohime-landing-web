import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import MobilityHub from '@/sections/MobilityHub'
import TrustedParterner from '@/sections/TrustedParterner'
import React from 'react'

const MainLayout = () => {
  return (
    // FIX: Removed 'h-screen'. 
    // Ideally remove 'overflow-x-hidden' too unless specifically needed, 
    // as it can sometimes lock scroll on mobile if not careful.
    <main className='w-full min-h-screen bg-gray-50 relative'> 

       <Navbar/>
       <div className='w-11/12 mx-auto'>
         <HeroSection/>
         <TrustedParterner />
         <MobilityHub />
         <div className='h-96 bg-red-600'></div>
      
       </div>

    </main>
  )
}

export default MainLayout