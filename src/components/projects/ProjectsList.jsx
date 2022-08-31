import React, { useEffect, useState } from 'react';
import {listProject, allProjects, webProjects, designProjects} from '../../data';
import ProjectItem from './ProjectItem';
import {SiGithub} from 'react-icons/si';
import {TbHandFinger} from 'react-icons/tb';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ProjectsList = () => {
    const [selected, setSelected] = useState('all');
    const [data, setData] = useState([]);

    useEffect (() => {
        switch(selected) {
            case 'all':
            setData(allProjects);
            break;
            case 'web':
            setData(webProjects);
            break;
            case 'design':
            setData(designProjects);
            break;
            default:
                setData(allProjects);
        }
    }, [selected])
    return (
        <div>
            <ul>
                {listProject.map(item => (
                    <ProjectItem 
                    key={item.id}
                    title={item.title} 
                    active={ selected === item.id}
                    setSelected ={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
                    <div className="card">
                    {data.map((work) => (
            <div className="card__wrapper" key={work.id}>
                <img className="card__img" src={work.image} alt={work.alt}/>
                <h3 className="card__title">{work.title}</h3>
                <p className="card__description">{work.description}</p>
                    <SiGithub className='card__icon'/>
            </div>
            ))}
                    </div>



        <div className="slider__wrapper">
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

            {data.map((work) => (
                <SwiperSlide className="slider"
                key={work.id}>
                        <img className="slider__img" src={work.image} alt={work.alt}/>
                        <h3 className="slider__title">{work.title}</h3>
                        <p className="slider__description">{work.description}</p>
                    <SiGithub className='card__icon'/>
                    </SwiperSlide>
            ))}
            </Swiper>
            
        </div>

        <TbHandFinger className='hand' />
        </div>
    );
};

export default ProjectsList;