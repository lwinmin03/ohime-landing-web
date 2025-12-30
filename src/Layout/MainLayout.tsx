import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import React from 'react'

const MainLayout = () => {
  return (
    <main className='w-full h-screen bg-gray-50'>

        <Navbar/>
<div className='w-11/12  mx-auto'>
  <HeroSection/>
  
</div>



    </main>
  )
}

export default MainLayout