import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {data} from "../../data"

const Work = () => {
    return (
        <div className='works' id='works'>
            <h2 className='works__title'>
                My works
            </h2>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

            {data.map(work => (
                <SwiperSlide className="works__wrapper__content"
                key={work.id}>
                    {/* <p>{work.description}</p> */}
                    <img src={work.image} alt={work.alt}/>
                    <h3>{work.title}</h3>
                    </SwiperSlide>
            ))}

            </Swiper>
        </div>
    );
};

export default Work;