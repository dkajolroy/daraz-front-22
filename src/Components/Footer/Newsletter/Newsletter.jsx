import React from 'react';
import './Newsletter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Newsletter = () => {
    return (
        <div className='news_feed mt-5'>
            <div className='container-fluid ps-5 pe-5'>
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12">
                        <div className="news-feed-title d-flex align-items-center">
                            <div className="logo">
                                <FontAwesomeIcon icon={ faPaperPlane } className='text-light' size='2x' />
                            </div>
                            <div className="title ms-2 text-light">
                                <h6>Signup for Newsletter</h6>
                                <p className='mt-2'>We’ll never share your email address with a third-party</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="input-box">
                            <input type="email" placeholder='Email address' className='pt-3 pb-3 w-100 rounded border-0 ps-2' />
                            <div className="sub-btn">
                                <input type="submit" value="Subcribe" className='bg-danger border-0 text-light rounded-end p-3 border-0 ' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="social-media mt-3">
                            <ul className='d-flex align-items-center social-content'>
                                <li className='ms-3'><a href="#" className='text-light'><FontAwesomeIcon icon={ faFacebookF } className='me-2' />Facebook</a></li>
                                <li className='ms-3'><a href="#" className='text-light'><FontAwesomeIcon icon={ faYoutube } className='me-2' />Youtube</a></li>
                                <li className='ms-3'><a href="#" className='text-light'><FontAwesomeIcon icon={ faTwitter } className='me-2' />Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;