
import Navbar from '@/components/Common/Navbar'
import GallerySection from '@/sections/GallerySection'
import HeroSection from '@/sections/HeroSection'
import MobilityHub from '@/sections/MobilityHub'
import TrustedParterner from '@/sections/TrustedParterner'


const MainLayout = () => {
  return (
    
    <main className='w-full  h-screen bg-gray-50 relative overflow-auto'> 

       <Navbar/>
       <div className='w-11/12 mx-auto overflow-x-hidden'>
         <HeroSection/>
         <TrustedParterner />
         <MobilityHub />
         <GallerySection />
      
       </div>

    </main>
  )
}

export default MainLayout