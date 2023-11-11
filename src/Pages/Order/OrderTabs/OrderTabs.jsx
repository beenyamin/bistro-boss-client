import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTabs = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div >


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                    {
                        items.map(item =>
                            <FoodCard key={item._id}
                                item={item}> </FoodCard>)
                    }

                      </div>

                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default OrderTabs;