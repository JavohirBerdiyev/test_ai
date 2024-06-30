import React from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from './logo.svg'; // Assume logo.svg is in the same directory

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Logo className="navbar-logo" />
                <div className="navbar-brand">SODIQ SCHOOL</div>
            </div>
            <div className="navbar-menu">
                <a href="#about-us">About us</a>
                <a href="#team">Team</a>
                <div className="dropdown">
                    <a href="#results">Results</a>
                    <div className="dropdown-content">
                        <a href="#results1">Result 1</a>
                        <a href="#results2">Result 2</a>
                    </div>
                </div>
                <a href="#opportunities">Opportunities</a>
                <a href="#contact">Contact</a>
                <a href="#news">News</a>
                <a href="#personal-cabinet">Personal cabinet</a>
                <a href="#more-question">More question</a>
            </div>
            <div className="navbar-right">
                <div className="contact-info">
                    <span>+998 99 099 78 77</span>
                    <span>Mon-Fri | 9:00-18:00</span>
                </div>
                <div className="social-icons">
                    <a href="#instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#telegram"><i className="fa fa-telegram"></i></a>
                    <a href="#other"><i className="fa fa-icon"></i></a>
                </div>
                <div className="language-selector">
                    <select>
                        <option>Eng</option>
                        <option>Ru</option>
                        <option>Uz</option>
                    </select>
                </div>
                <button className="apply-now">APPLY NOW</button>
            </div>
        </nav>
    );
}

export default Navbar;
