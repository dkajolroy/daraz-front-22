import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <div className='top_nav_area pt-1 pb-1'>
            <div className="container">
                <ul className='top-menu m-0 p-0 d-flex align-items-center justify-content-end'>
                    <li>
                        <Link to='/' className='text-danger'>SAVE MORE ON APP</Link>
                    </li>
                    <li>
                        <Link to='/'>SELL ON DARAZ</Link>
                    </li>
                    <li>
                        <Link to='/'>  CUSTOMER CARE</Link>
                    </li>
                    <li>
                        <Link to='/'>TRACK MY ORDER</Link>
                    </li>
                    <li>
                        <Link to='/'>SIGNUP / LOGIN</Link>
                    </li>
                    <li>
                        <Link to='/'>DARAZ AFFILIATE PROGRAM</Link>
                    </li>
                    <li>
                        <Link to='/'>ভাষা</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;
