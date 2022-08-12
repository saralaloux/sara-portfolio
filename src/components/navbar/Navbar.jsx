import React, { useState, useEffect } from 'react';
import{BiMenuAltRight} from "react-icons/bi";
import{AiOutlineClose} from "react-icons/ai";

// import Title from "./Title"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
<div className='header'>
    <div className='header__content'>
        <h2 className='header__content__logo'>LLX.</h2>
        <nav className={`header__content__nav ${
                menuOpen && size.width < 768 ? 'isMenu' : ""
            }`}
                >
            <ul>
                <li>
                    <a href="#homepage" onClick={menuToggleHandler}>Homepage</a>
                </li>
                <li>
                    <a href="#work" onClick={menuToggleHandler}>Works</a>
                </li>
                <li>
                    <a href="#contact" onClick={menuToggleHandler}>Contact</a>
                </li>
            </ul>
        </nav>
        <div className='header__content__toggle'>
            {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
            )}
        </div>
    </div>
</div>
    );
};
export default Header;