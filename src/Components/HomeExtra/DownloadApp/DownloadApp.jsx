import React from 'react';
import { Link } from 'react-router-dom'
import './DownloadApp.css'
import scanLogo from '../../../images/qr-scan.png'
import logo2 from '../../../images/logo2.png'
import apple from '../../../images/apple.png'
import andorid from '../../../images/goolepley.png'
import gallarey from '../../../images/gallapp.png'

const DownloadApp = () => {
    return (
        <div className='download-section mt-5'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="down-menu">
                            <h6>Customer Care</h6>
                            <ul className='m-0 p-0'>
                                <li>
                                    <Link to='/'>Help Center</Link>
                                </li>
                                <li>
                                    <Link to='/'>How to Buy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Returns & Refunds</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to='/'>Terms & Conditions</Link>
                                </li>
                            </ul>
                            <div className="menu11 mt-3">
                                <h6> Earn With Daraz</h6>
                                <ul className='m-0 p-0'>
                                    <li>
                                        <Link to='/'> Daraz University</Link>
                                    </li>
                                    <li>
                                        <Link to='/'> Sell on Daraz</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>  Code of Conduct</Link>
                                    </li>
                                    <li>
                                        <Link to='/'> Join the Daraz Affiliate Program</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="down-menu">
                            <h6>Daraz Services</h6>
                            <ul className='m-0 p-0'>
                                <li>
                                    <Link to='/'>About Daraz</Link>
                                </li>
                                <li>
                                    <Link to='/'>Digital Payments</Link>
                                </li>
                                <li>
                                    <Link to='/'> Careers</Link>
                                </li>
                                <li>
                                    <Link to='/'>Daraz Blog</Link>
                                </li>
                                <li>
                                    <Link to='/'>Daraz Cares</Link>
                                </li>
                                <li>
                                    <Link to='/'>dMart</Link>
                                </li>
                                <li>
                                    <Link to='/'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Daraz App</Link>
                                </li>
                                <li>
                                    <Link to='/'>Daraz Exclusives</Link>
                                </li>
                                <li>
                                    <Link to='/'> Hungrynaki Food Delivery</Link>
                                </li>
                                <li>
                                    <Link to='/'>BD Cricket Live</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="down-menu">
                            <div className="logo d-flex align-items-center">
                                <div className="scan">
                                    <img src={ scanLogo } alt='scan logo' className='scanLogo img-fluid' />
                                </div>
                                <div className="logo2 ms-2">
                                    <img src={ logo2 } alt='scan logo' className='img-fluid logoap'/>
                                    <h6 className='text-warning mt-2'>Happy Shopping</h6>
                                    <h5 className='downTitle'>Download App</h5>
                                </div>
                            </div>
                            <div className="download-app mt-3">
                                <div className="app d-flex align-items-center">
                                    <div className="app1">
                                        <img src={ apple } alt='scan logo' className='downAll' />
                                    </div>
                                    <div className="app1 ms-2">
                                        <img src={ andorid } alt='scan logo' className='downAll' />
                                    </div>
                                    <div className="app1 ms-2">
                                        <img src={ gallarey } alt='scan logo' className='downAll' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;