import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/less/navigation';
import 'swiper/css/autoplay';

import { data } from "../../data";

function slider () {
   
    return (
        <div className='test'>   
<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
    {data.map(work => (
              <SwiperSlide>
                <h2>{work.title}</h2>
                <p>{work.description}</p> 
                <img src={work.image} alt=""/>
              </SwiperSlide>
    ))}
    </Swiper>
    </div>
    );
};

export default slider;