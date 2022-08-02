import React from 'react'
import Footer from '../Footer/Footer'
import TotalNav from './TotalNav'

export default function Layout({ children }) {
    return (
        <>
            <TotalNav />
            {children}
            <Footer />
        </>
    )
}
