import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import "./styles.scss";

interface params {
    carid: string;
}

export function Orders(){

const car = useParams<params>();
// console.log(car.carid);
    const [orders, SetOrders] = useState<any>([]);
    var[red,SetRed] = useState<boolean>(true);
    var[white,SetWhite] = useState<boolean>(false);
    var[black,SetBlack] = useState<boolean>(false);
    
    function onRedClick(){
        SetRed(true);
        SetWhite(false);
        SetBlack(false);
    }
    function onWhiteClick()
    {
        SetRed(false);
        SetWhite(true);
        SetBlack(false);
    }

    function onBlackClick()
    {
        SetRed(false);
        SetWhite(false);
        SetBlack(true);
    }

    var myimage = red?"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/221_Red-Multi-Coat_870e14.jpg?tr=w-898":white?"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/225_Pearl-White-Multi-Coat_bfc3c2.jpg?tr=w-898":"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/224_Solid-Black_141414.jpg?tr=w-898";

    const getOrders = async () => {
        const response: any = await fetch(`http://localhost:8000/carsApp/cars/detail/${car.carid}`);
        const data = await response.json();
        SetOrders(data);
        // console.log(data);
    }

    useEffect(() => {
        getOrders();
    }, []);

    const link = "/ordered-car/";

return(
    <div className = "orders">
        <div className="title">T E S L A</div>
        <img src={myimage} alt="" />
        <div className = "order-details">
            <h1 className = "order-title">{orders.name}</h1>
            <div>
                <ul className="order-list1">
                    <li className = "order-list1-item1">{orders.start_range}</li>
                    <li className = "order-list1-item2">{orders.top_speed} mph</li>
                    <li className = "order-list1-item3">{orders.Time_to_60} sec</li>
                </ul>
                <ul className="order-list2">
                    <li className = "order-list2-item1">Est Range</li>
                    <li className = "order-list2-item2">Top Speed</li>
                    <li className = "order-list2-item3">0-60</li>
                </ul>
                <div className="variants">
                <div className = "variant-button" >
                    <p className="variant-text1">Long range</p>
                    <p className="variant-text2">$ 79,990</p>
                </div>
                <div className = "variant-button">
                    <p className="variant-text1">Plaid</p>
                    <p className="variant-text2">$ 119,990</p>
                </div>
                <div className = "variant-button">
                    <p className="variant-text1">Plaid +</p>
                    <p className="variant-text2">$ 149,990</p>
                </div>
                </div>
                <h1 className="paint-title">Paint</h1>
                <div className="paints">
                    <button onClick = {onRedClick} className = "paint-button1"></button>
                    <button onClick = {onWhiteClick} className = "paint-button2"></button>
                    <button onClick = {onBlackClick} className = "paint-button3"></button>
                </div>
                <h1 className="wheel-title">Wheels</h1>
                <div className="wheels">
                    <img className = "wheel-img" src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1411111-00-A_0.jpg" alt="" />
                    <img className = "wheel-img" src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1478922-00-D_2.jpg" alt="" />
                </div>
                <h1 className = "interior-title">Interiors</h1>
                <div className="interiors">
                    <div className="interior1"></div>
                    <div className="interior2"></div>
                </div>
                <div className="interior-about">
                    <p className="interior-text">Nylon</p>
                    <p className="interior-text">Leather </p>
                </div>
                <h1 className = "addon">Full Self Driving Capabilities</h1>
                {/* <p>{orders.add_on[0].description}</p> */}
                <div className="addon-features">
                <p>Navigation on Autopilot</p>
                <p>Auto Lane Change</p>
                <p>Auto Park</p>
                <p>Summon</p>
                <p>Full Self Driving Computer</p>
                <p>Traffic Light and Stop Sign Control</p>
                <h2 className = "order-now">Order your {orders.name}</h2>
                <h3 className = "delivery">Estimated Delivery : 6-8 Weeks</h3>
                <div className="order-button">
                <Link to = {link+`${orders.id}`}><button className = "orderCar">Order</button></Link>
                </div>
                </div>
            </div>
        </div>
         
    </div>
);
}