import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";
import { FaAmazon, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid nav-div">
                    <Link to={"/"} className="navbar-brand"><FaAmazon className="nav-logo"/> <span className="nav-title">Amazon Project</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mx-auto views-list">
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link"><span className="link-decoration">Products</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link"><span className="link-decoration">Review</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link"><span className="link-decoration">About us</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                to={"/views2"} 
                                className="nav-link dropdown-toggle" 
                                id="navbarDropdown" 
                                role="button"
                                 data-bs-toggle="dropdown"><span className="link-decoration">Contact</span></Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="https://getbootstrap.com/docs/5.1/components/navbar/" className="dropdown-item" target="_blank" rel="noreferrer noopener">Email</a>
                                    </li>
                                    <li>
                                        <a href="https://getbootstrap.com/docs/5.1/components/navbar/" className="dropdown-item" target="_blank" rel="noreferrer noopener">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://getbootstrap.com/docs/5.1/components/navbar/" className="dropdown-item" target="_blank" rel="noreferrer noopener">Twitter</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr className="text-white-50"/>
                        <ul className="navbar-nav flex-row social-media-list">
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaGithub className="nav-logo"/><small className="link-social-networks d-md-none ms-2">Github</small>
                            </li>
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaInstagram className="nav-logo"/><small className="link-social-networks d-md-none ms-2">Instagram</small>
                            </li>
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaLinkedinIn className="nav-logo"/><small className="link-social-networks d-md-none ms-2">LinkedIn</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;