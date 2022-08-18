import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="header">
                <nav className="nav">
                    <Link to={"/"} className="nav-link" >
                        <p className="logo">Amazon Project</p>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-menu-link nav-link">Products</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-menu-link nav-link">Reviews</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-menu-link nav-link">About us</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-menu-link nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;