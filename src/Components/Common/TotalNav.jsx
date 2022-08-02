import React from 'react'
import TopNav from './../Nav/TopNav';
import BottomNav from './../Nav/BottomNav';
import MainNav from './../Nav/MainNav';

export default function TotalNav() {
    return (
        <div className='total_nav_section_x'>
            <TopNav />
            <MainNav />
            <BottomNav />
        </div>
    )
}
