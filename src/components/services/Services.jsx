// import {data} from "../../data"

import Title from "./Title";
import UxCard from "./UxCard";

const Services = () => {
    return (
        <div className='services' id='services'>
            <Title />
        <div className="services__content"> 
            <UxCard />
            <UxCard />
            <UxCard />
            </div>
        </div>
    );
};

export default Services;