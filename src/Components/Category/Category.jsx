import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../../../public/home/slide1.jpg"
import img2 from "../../../public/home/slide2.jpg"
import img3 from "../../../public/home/slide3.jpg"
import img4 from "../../../public/home/slide4.jpg"
import img5 from "../../../public/home/slide5.jpg"
import SectionHeading from '../SectionHeading/SectionHeading';

const Category = () => {

    return (
        <>
            <SectionHeading heading={"ORDER ONLINE"}  subHeading={"---From 11:00am to 10:00pm---"} />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className=' text-4xl text-center -mt-10 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className=' text-4xl text-center -mt-10 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className=' text-4xl text-center -mt-10 text-white'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className=' text-4xl text-center -mt-10 text-white'>desserts </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className=' text-4xl text-center -mt-10 text-white'>Soups</h3>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Category