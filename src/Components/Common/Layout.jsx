import React from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../Footer/Newsletter/Newsletter'
import DownloadApp from '../HomeExtra/DownloadApp/DownloadApp'
import MixPayment from '../HomeExtra/MixPayment/MixPayment'
import TotalNav from './TotalNav'

export default function Layout({ children }) {
    return (
        <>
            <TotalNav />
            { children }
            <DownloadApp />
            <MixPayment />
            <Newsletter />
            <Footer />
        </>
    )
}
