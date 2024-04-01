import React, { useState } from 'react'
import Banner from '../components/Banner'
// import Images from '../components/images'
import Images from '../components/Images'
import Footer from '../components/Footer'
import Contribution from '../components/contribution'



function Home() {


    return (
        <>
        
        <div className=' mx-auto bg-black p-4 sm:p-6 lg:p-8'>
            <Banner />
            <div className='mt-20 sm:mt-12 lg:mt-16'>
            <Images />
            </div>
            <div className='mt-20 sm:mt-12 lg:mt-16'><Contribution/>
            </div>
            <div className='mt-20 sm:mt-12 lg:mt-16'><Footer /></div>
            
            </div>
        </>
    )
}

export default Home