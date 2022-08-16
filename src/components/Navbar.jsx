import React from "react";
import "../styles/Components.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand" href="#">
                        <p className="name-project">Amazon Project </p>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;