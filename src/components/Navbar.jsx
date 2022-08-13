import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const[disabled, setDisabled] = useState(false)

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#"><h5>Amazon Project</h5></Link>
                    <button className="navbar-toggler" disabled={disabled} onClick={() => setDisabled(true)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/views2" className="nav-link active" aria-current="page" href="#"><h6>Home</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/views2" className="nav-link" href="#"><h6>Link</h6></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <h6 className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </h6>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/views2" className="dropdown-item" href="#"><h6>Action</h6></Link></li>
                                    <li><Link to="/views2" className="dropdown-item" href="#"><h6>Another action</h6></Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link to="/views2" className="dropdown-item" href="#"><h6>Something else here</h6></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <h6 className="nav-link disabled">Disabled</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;