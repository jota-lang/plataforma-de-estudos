import React, { useState } from 'react';
import './menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="drawer-container">
            <button className="menu-button" onClick={toggleDrawer}>
                ☰
            </button>
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleDrawer}>
                    ✕
                </button>
                <ul className="menu-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;