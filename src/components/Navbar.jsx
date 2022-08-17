import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <p className="name-project">Amazon Project </p>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav navbar-brand">
                            <li className="nav-item">
                                <Link to={"/views2"} className="nav-link active" aria-current="page"><p className="p-navbar">Home</p></Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link p-navbar">Features</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link p-navbar">Pricing</p>
                            </li>
                            <li className="nav-item"> 
                                <p className="nav-link p-navbar">About us</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;