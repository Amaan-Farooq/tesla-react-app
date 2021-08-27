import React from "react";
import "./styles.scss";
import {
    Link
} from "react-router-dom";

export function Home() {
    return (
            <div className="home">
                <nav>
                    <ul className = "nav-list">
                        <li id="li1">T E S L A</li>
                        <li id="li2">RANGE CALCULATOR</li>
                    </ul>
                </nav>
                <h1 className = "home-title">Electric Cars , Solar and Clean Energy</h1>
                <div className="btn">
                    <Link to="/allCars" ><button className = "home-button">ALL CARS</button></Link>
                </div>
            </div>
    );
}