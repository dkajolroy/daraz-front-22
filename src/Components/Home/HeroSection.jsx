import React from 'react'
import CategoryMenu from '../Common/CategoryMenu'
import Carousel from './../Common/Carousel';
import './home.css'

export default function HeroSection() {
    return (
        <div className="container-fluid">
            <div className="hero_section_area">
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-lg-block d-none category_menu_compo_x">
                            <CategoryMenu />
                        </div>
                        <div className="col-lg-9 carousel_slider_compo_x">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
