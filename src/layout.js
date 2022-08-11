import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./views/App.js"
import injectContext from "./store/appContext.js";

const Layout = () => {
    const basename = process.env.BASENAME || ""

    return(
        <div>
            <BrowserRouter basename= {basename}>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route element={<h1> Not found! </h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default injectContext(Layout)