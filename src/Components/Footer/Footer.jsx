import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt, faEnvelopeOpen, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
    const date = new Date();
    const getDate = date.getFullYear();
    return (
        <div className="footer_area_compo_xx bg-dark">
            <div className="container">
                <footer>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <Link to='/' className='text-light fs-2'>Daraz</Link>


                            <ul className='menu2'>
                                <li className='text-secondary'><FontAwesomeIcon icon={ faHeadphonesAlt } className='me-2' /> San Luis Potosi, Centro Historico, 78000 San Luis Potosi, SPL, Mexico</li>
                                <li className='text-secondary'><FontAwesomeIcon icon={ faHeadphonesAlt } className='me-2' /> (+0214)0 315 215 - (+0214)0 315 215</li>
                                <li className='text-secondary'><FontAwesomeIcon icon={ faEnvelopeOpen } className='me-2' /> Contact@daraz.Com</li>
                                <li className='text-secondary'><FontAwesomeIcon icon={ faClock } className='me-2' /> Open Time: 8:00AM - 6:00PM</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <h6 className='text-light'>Customer Care</h6>
                            <ul className='menu2'>
                                <li className='text-secondary'>contact us</li>
                                <li className='text-secondary'>about us</li>
                                <li className='text-secondary'>F.A.Q</li>
                                <li className='text-secondary'>Help Center</li>
                                <li className='text-secondary'>joint now</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <h6 className='text-light'>Catagorise</h6>
                            <ul className='menu2'>
                                <li className='text-secondary'>Product Support</li>
                                <li className='text-secondary'>PC Setup & Support</li>
                                <li className='text-secondary'>services</li>
                                <li className='text-secondary'>Extended Service Plans</li>
                                <li className='text-secondary'>Community</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <h6 className='text-light'>Product Promotion</h6>
                            <ul className='menu2'>
                                <li className='text-secondary'>Product Support</li>
                                <li className='text-secondary'>PC Setup & Support</li>
                                <li className='text-secondary'>services</li>
                                <li className='text-secondary'>Extended Service Plans</li>
                                <li className='text-secondary'>Community</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright_content">
                        <hr className='text-secondary' />
                        <p className='text-secondary'>Copyright @ { getDate } daraz. all rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
