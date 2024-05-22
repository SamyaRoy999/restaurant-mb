import SectionHeading from "../SectionHeading/SectionHeading"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import { EffectCreative } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimunial = () => {

    const [rewiew, setRewiew] = useState([])


    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setRewiew(data);
            })
    }, [])

    return (
        <div>
            <SectionHeading heading='FROM OUR MENU ' subHeading='---Check it out---' />
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                   
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper w-9/12 "
            >
                {rewiew.map(item => (

                    <SwiperSlide key={item._id}>
                        <div className="flex flex-col gap-3 mt-14  h-96">
                            <div className="flex flex-col gap-4 bg-[#fff]  p-4">

                                <div className="flex justify justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="flex p-1 gap-1 text-orange-300">
                                        <p>{item.rating}</p>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-half"></ion-icon>
                                    </div>
                                </div>

                                <div>
                                   {item.details}
                                </div>

                                <div className="flex justify-between">
                                    <span>Feb 13, 2021</span>
                                    <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                                        <ion-icon name="share-outline"></ion-icon> Share</button>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </div >
    )
}

export default Testimunial

