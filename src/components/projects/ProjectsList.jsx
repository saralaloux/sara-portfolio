import React, { useEffect, useState } from 'react';
import {listProject, allProjects, webProjects, designProjects} from '../../data';
import ProjectItem from './ProjectItem';

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
            <div className='card__wrapper'>
        {data.map(work => (
        <div className='card' key={work.id}>
            <div className="card__body">
                <img className='card__image' src={work.image} alt={work.alt}/>
                <h3 className='card__title'>{work.title}</h3>
                <p className="card__description">{work.description}</p>
            </div>
            <button className="card__btn">View on github</button>
        </div>
        ))}
        </div>
        </div>
    );
};

export default ProjectsList;