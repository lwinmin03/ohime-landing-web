import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import TrustedParterner from '@/sections/TrustedParterner'
import React from 'react'

const MainLayout = () => {
  return (
    <main className='w-full h-screen bg-gray-50 overflow-x-hidden'>

        <Navbar/>
<div className='w-11/12  mx-auto'>
  <HeroSection/>
  <TrustedParterner />

</div>



    </main>
  )
}

export default MainLayout