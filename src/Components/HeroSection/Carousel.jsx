import React from "react";
import { Carousel } from 'antd';
import './carousel.css'


export default function Slider() {
    return (
        <div className='carousel_slider_area h-100'>
            <Carousel autoplay >
                <div>
                    <img src="https://icms-image.slatic.net/images/ims-web/dab1c281-4bc9-4754-b4fb-96d320fc8f79.jpg" alt="slide" />
                </div>
                <div>
                    <img src="https://icms-image.slatic.net/images/ims-web/0268186d-aaa2-4793-877f-5631f4264059.jpg" alt="slide" />
                </div>
                <div>
                    <img src="https://icms-image.slatic.net/images/ims-web/3d4700e0-2e97-4708-9345-85a4ab37c9b9.jpg" alt="slide" />
                </div>
            </Carousel>
        </div>
    )
}
