import React from "react";
import "../styles/Views.css"
import food from "../img/food.png"

const Home2 = () => {
    return (
        <>
            <div className="container">
                <div className="div-1 card text-white bg-dark mb-3">
                    <img src={food} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Home2;