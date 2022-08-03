import React from 'react'
import logo from '../../images/logo.png'
import downloadApp from '../../images/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './MainNav.css'

function MainNav() {
    return (
        <div className="main_nav_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                        <div className="logo">
                            <img src={ logo } alt="Logo" className='img-fluid mainLogo' />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6 col-10">
                        <div className="logo">
                            <div className="search-box">
                                <input type="text" placeholder='Please Search Product' className='w-100 d-block'/>
                                <div className="search-btn">
                                    <FontAwesomeIcon icon={ faSearch } className='btn-search'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-2">
                        <div className="cart mt-2">
                            <FontAwesomeIcon icon={ faShoppingCart } size='2x'/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="downloadApp">
                            <img src={ downloadApp } alt="Logo" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
