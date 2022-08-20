import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";
import { FaAmazon, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand"><FaAmazon/> <span className="text-warning">Amazon Project</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link active">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link">Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link">About us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                to={"/views2"} 
                                className="nav-link dropdown-toggle" 
                                id="navbarDropdown" 
                                role="button"
                                 data-bs-toggle="dropdown">Contact</Link>
                                <ul className="dropdown-menu bg-secondary">
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
                        <ul className="navbar-nav flex-row flex-wrap text-light">
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaGithub /><small className="d-md-none ms-2">Github</small>
                            </li>
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaInstagram /><small className="d-md-none ms-2">Instagram</small>
                            </li>
                            <li className="nav-item col-6 col-md-auto p-3">
                                <FaLinkedinIn /><small className="d-md-none ms-2">LinkedIn</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;