// import React from 'react';
// // import {data} from '../../data';
// import {listProject, allProjects, webProjects, designProjects} from '../../data';
// const Card = () => {

//     const [selected, setSelected] = useState('all');
//     const [data, setData] = useState([]);

//     useEffect (() => {
//         switch(selected) {
//             case 'all':
//             setData(allProjects);
//             break;
//             case 'web':
//             setData(webProjects);
//             break;
//             case 'design':
//             setData(designProjects);
//             break;
//             default:
//                 setData(allProjects);
//         }
//     }, [selected])

//     return (
//         <div className='card__wrapper'>
//         {data.map(work => (
//         <div className='card' key={work.id}>
//             <div className="card__body">
//                 <img className='card__image' src={work.image} alt={work.alt}/>
//                 <h3 className='card__title'>{work.title}</h3>
//                 <p className="card__description">{work.description}</p>
//             </div>
//             <button className="card__btn">View on github</button>
//         </div>
//         ))}
//         </div>
//     );
// };

// export default Card;