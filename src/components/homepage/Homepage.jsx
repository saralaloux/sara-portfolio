import {Link} from 'react-router-dom';
import { init } from "ityped";
import { useEffect, useRef } from "react";
import {TiSocialLinkedinCircular} from "react-icons/ti";
import {DiGithubBadge} from "react-icons/di"

export default function Homepage () {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["front-end Developer", " UX & UI Designer"],
      });
    }, []);

    return (
        <div className="homepage" id="homepage">
            <div className='homepage__title'>
            <h2>Hello World</h2>
            </div>
            <div className="homepage__content">
                <div className="homepage__content__presentation">
                    <h1>I'm Sara Laloux,</h1>
                </div>
                <div className="homepage___content__ityped">
                    <p><span ref={textRef}></span></p>
                </div>
                <div className="homepage__content__buttons">
                    <button className="homepage__content__buttons__dark">Get In Touch</button>
                    <button className="homepage__content__buttons__light">My projects</button>
                </div>
                <div className="homepage__content__link">
                    <ul>
                        <li><Link to="https://github.com/saralaloux"><DiGithubBadge /></Link></li>
                        <li><Link to="https://www.linkedin.com/in/saralaloux/"><TiSocialLinkedinCircular /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}