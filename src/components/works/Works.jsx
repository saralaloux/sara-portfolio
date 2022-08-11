import {data} from "../../data"

const Work = () => {
    return (
        <div className='works' id='works'>
            <h2 className='works__title'>
                My works
            </h2>
            <div className='works__wrapper'>
            {data.map(work => (
                <div className="works__wrapper__content"
                key={work.id}>
                    {/* <p>{work.description}</p> */}
                    <img src={work.image} alt={work.alt}/>
                    <h3>{work.title}</h3>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Work;