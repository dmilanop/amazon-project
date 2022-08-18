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
                            <Link to={"/views2"} className="nav-link"><p className="nav-menu-link">Products</p></Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-link"><p className="nav-menu-link">Reviews</p></Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-link"><p className="nav-menu-link">About us</p></Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to={"/views2"} className="nav-link"><p className="nav-menu-link">Contact</p></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;