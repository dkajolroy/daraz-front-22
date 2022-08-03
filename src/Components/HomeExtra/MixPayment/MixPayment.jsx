import React from 'react';
import payment from '../../../images/PAYMENT.png'
import international from '../../../images/INTERNATIONAL.png'
import dss from '../../../images/DSS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './MixPayment.css'

const MixPayment = () => {
    return (
        <div className='mix-section mt-5'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="mix-items">
                            <h6 className='mb-2'>Payment Methods</h6>
                            <img src={ payment } alt="payment logo" />

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="mix-items">
                            <h6 className='mb-2'>Daraz International</h6>
                            <img src={ international } alt="payment logo" />

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="mix-items">
                            <h6 className='mb-2'>Follow Us</h6>
                            <div className="our-social-media">
                                <ul className='d-flex align-items-center m-0 p-0'>
                                    <li><a href="#"><FontAwesomeIcon icon={ faFacebookF } className='social-icon d-block border p-1 border-primary rounded-pill' style={ { height: '20px', width: '20px' } } /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faTwitter } className='social-icon d-block ms-2 border p-1 border-primary rounded-pill' style={ { height: '20px', width: '20px' } } /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faYoutube } className='social-icon d-block ms-2 border p-1 border-primary rounded-pill' style={ { height: '20px', width: '20px' } } /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faInstagram } className='social-icon d-block ms-2 border p-1 border-primary rounded-pill' style={ { height: '20px', width: '20px' } } /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="mix-items">
                            <h6 className='mb-2'>Verified by</h6>
                            <img src={ dss } alt="payment logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MixPayment;