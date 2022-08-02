import React from 'react'
import AllProduct from '../Components/Home/AllProduct'
import HeroSection from '../Components/Home/HeroSection'
import Layout from './../Components/Common/Layout';

function Home() {
    return (
        <Layout>
            <div className='home__section__container'>
                <HeroSection />
                <AllProduct />
            </div>
        </Layout>
    )
}

export default Home
