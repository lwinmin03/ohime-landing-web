
import React from 'react'

const MainLayout = () => {
  return (
    
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