import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })



    }, [])

    return (
        <div className="my-20">

            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}

                    >
                        <div className=" flex flex-col items-center mx-20 my-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className="">{review.details}</p>
                            <h2 className="text-2xl text-orange-300"> {review.name}</h2>
                        </div>

                    </SwiperSlide>
                    )
                }

            </Swiper>


        </div>
    );
};

export default Testimonials;