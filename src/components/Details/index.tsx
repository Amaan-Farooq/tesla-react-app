import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import "./styles.scss";


interface params {
    carid: string;
}

export function Details() {
    const car = useParams<params>();
    // console.log(car.carid);

    const [details, SetDetails] = useState<any>([]);
    const getDetails = async () => {
        const response: any = await fetch(`http://localhost:8000/carsApp/cars/detail/${car.carid}`);
        const data = await response.json();
        SetDetails(data);
        // console.log(data);
    }

    useEffect(() => {
        getDetails();
    }, []);

    // console.log(details);
    const image = details.img_url;
    const link = "/orders/";
    return (
        <div className="details">
            <div className="details-1" style={{ backgroundImage: `url(${image})` }}>
                <div className="title">T E S L A</div>
                <h1 className="details-title">{details.name}</h1>
                <div className="details-btn">
                    <Link to = {link+`${details.id}`}><button className="details-button">Order</button></Link>
                </div>
            </div>
            <div className=" details-2">
                <h1 className = "details2-title">{details.name} Specs</h1>
                <div className="details2-buttons">
                    <button className = "details2-button">Plaid</button>
                    <button className = "details2-button">Long Range</button>
                </div>
                <div className = "details-list">
                    <ul className="details-list1">
                        <li className = "detail-items">Range</li>
                        <li className = "detail-items">{details.start_range}</li>
                        <li className = "detail-items">Peak Power</li>
                        <li className = "detail-items">{details.peak_power}</li>
                        <li className = "detail-items">Top Speed</li>
                        <li className = "detail-items">{details.top_speed}</li>
                        <li className = "detail-items">Weight</li>
                        <li className = "detail-items">{details.weight}</li>
                        <li className = "detail-items">Cargo Capacity</li>
                        <li className = "detail-items">{details.cargo_capacity}</li>
                    </ul>
                    <ul className = "details-list2">
                        <li className = "detail-items">Power Train</li>
                        <li className = "detail-items">{details.power_train}</li>
                        <li className = "detail-items">Acceleration</li>
                        <li className = "detail-items">{details.acceleration}</li>
                        <li className = "detail-items">Drag Coefficient</li>
                        <li className = "detail-items">{details.drag_coefficient}</li>
                        <li className = "detail-items">Wheels</li>
                        <li className = "detail-items">{details.wheels}</li>
                        <li className = "detail-items">Charging</li>
                        <li className = "detail-items">{details.charging}</li>
                    </ul>
                </div>

            </div>
        </div>
    );

}