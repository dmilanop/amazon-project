import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import injectContext from "./store/appContext.js";
import Home2 from "./views/Home2.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || ""

    return(
        <div>
            <BrowserRouter basename= {basename}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/views2" element={<Home2/>} />
                    <Route element={<h1> Not found! </h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default injectContext(Layout)