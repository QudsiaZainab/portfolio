import React from 'react';
import { FaAngleUp } from 'react-icons/fa'; 
import './Footer.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 By Qudsia Zainab | All Rights Reserved</p>
            </div>
            <div className="footer-iconTop">
                <a href="#" onClick={scrollToTop}>
                    <FaAngleUp className='upIcon' /> 
                </a>
            </div>
        </footer>
    );
};

export default Footer;