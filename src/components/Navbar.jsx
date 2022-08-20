import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand"><FaAmazon/> <span>Amazon Project</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul>
                            <li>
                                <Link to={"/views2"}>Products</Link>
                            </li>
                            <li>
                                <Link to={"/views2"}>Review</Link>
                            </li>
                            <li>
                                <Link to={"/views2"}>About us</Link>
                            </li>
                            <li>
                                <Link to={"/views2"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;