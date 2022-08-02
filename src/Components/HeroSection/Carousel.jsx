import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Carousel() {
    return (
        <div className='carousel_slider_area h-100'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/72aa75e1-0c23-43a5-bebe-19817ba089d4.jpg_1200x1200.jpg" alt="slide1" /></SwiperSlide>
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/dab1c281-4bc9-4754-b4fb-96d320fc8f79.jpg" alt="slide" /></SwiperSlide>
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/0268186d-aaa2-4793-877f-5631f4264059.jpg" alt="slide" /></SwiperSlide>
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/3d4700e0-2e97-4708-9345-85a4ab37c9b9.jpg" alt="slide" /></SwiperSlide>
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/9f1862f1-43b0-4571-8f17-6f3835491eb2.jpg" alt="slide" /></SwiperSlide>
                <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/d13dcf5d-c43b-4866-8bda-b1ec11451b70.jpg" alt="slide" /></SwiperSlide>

            </Swiper>
        </div>
    )
}
