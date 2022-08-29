// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import {data} from "../../data"

const Work = () => {
    return (
        <div>

<div className='card__wrapper'>
        {data.map(work => (
        <div className='card' key={work.id}>
            <div className="card__body">
                <img className='card__image' src={work.image} alt={work.alt}/>
                <h3 className='card__title'>{work.title}</h3>
                <p className="card__description">{work.description}</p>
            </div>
            {/* <button className="card__btn">View on github</button> */}
            <SiGithub className='card__icon'/>
        </div>
        ))}
        </div>


        </div>
    //     <div className='works' id='works'>
    //         <h2 className='works__title'>
    //             My works
    //         </h2>
    //         <Swiper
    //     slidesPerView={1}
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >

    //         {data.map(work => (
    //             <SwiperSlide className="works__wrapper__content"
    //             key={work.id}>
    //                 {/* <p>{work.description}</p> */}
    //                 <img src={work.image} alt={work.alt}/>
    //                 <h3>{work.title}</h3>
    //                 </SwiperSlide>
    //         ))}
    //         </Swiper>
    //     </div>

    
    );
};

export default Work;