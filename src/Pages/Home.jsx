import React from 'react'
import AllProduct from '../Components/Home/AllProduct'
import HeroSection from '../Components/Home/HeroSection'

function Home() {
    return (
        <div className='home__section__container'>
            <HeroSection />
            <AllProduct />
        </div>
    )
}

export default Home
