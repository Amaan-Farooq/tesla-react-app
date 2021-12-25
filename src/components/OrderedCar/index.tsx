import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import animal from "./images/order.png";
import "./styles.scss";
interface params {
    carid: string;
    color: string;
}

export function OrderedCar(){
    const [orders, SetOrders] = useState<any>([]);
    const car = useParams<params>();
    const orderedImage = car.color==="red"?"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/221_Red-Multi-Coat_870e14.jpg?tr=w-898":car.color==="white"?"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/225_Pearl-White-Multi-Coat_bfc3c2.jpg?tr=w-898":"https://stimg.cardekho.com/images/car-images/930x620/Tesla/Model-S/5252/1611841114159/224_Solid-Black_141414.jpg?tr=w-898";
    const getOrders = async () => {
        const response: any = await fetch(`http://localhost:8000/carsApp/cars/detail/${car.carid}`);
        const data = await response.json();
        SetOrders(data);
        // console.log(data);
    }

    useEffect(() => {
        getOrders();
    }, []);
    // console.log(car.carid)
    return(
        <div className="ordered-car">
             <div className="title">T E S L A</div>
             <div className="ordered-car1">
                <img className="tick" src="https://about.iamhere.app/wp-content/uploads/2019/06/green-check-mark-icon-in-a-circle-tick-symbol-in-vector-23713629-1.jpg" alt="" />
                <h1>Your Order is Complete</h1>  
             </div>
             <div className="ordered-car2">
                 <h3 className="haha">haha</h3>
                 <h2>yes</h2>
            </div>
            <div className = "animal-image">
                <img className = "animal" src={animal} alt="" />
            </div>
            <h1 className = "ordered-car-title">{orders.name}</h1>
            <div className = "car-image-container">
                <img className = "ordered-car-image"src={orderedImage} alt="" />
            </div>

               <div className = "ordered-car-details-container">
                   <div className="ordered-details1">
                       <li className="ordered-details-item">Plaid+</li>
                       <li className="ordered-details-item">Red</li>
                       <li className="ordered-details-item">$ 2500</li>
                       <li className="ordered-details-item">Tempest 19" Wheels</li>
                       {/* <li className="ordered-details-item">Included</li> */}
                       <li className="ordered-details-item">Leather Interior</li>
                       <li>Included</li>
                       <li className="ordered-details-item">Full Self Driving Capabilities</li>
                   </div>
                   <div className = "ordered-details2">
                        <li className="ordered-details-item">$ 149,990</li>
                        <li className="ordered-details-item"><div className = "ordered-paint-button"></div></li>
                        <li className="ordered-details-item"><img className = "ordered-wheel" src = "https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1411111-00-A_0.jpg" alt = ""></img></li>
                        <li className="ordered-details-item"><div className = "ordered-interior"></div></li>
                        <li className="ordered-details-item">$ 10,000</li>
                   </div>
               </div>
                {/* <div className="ordered-car-details">
                    <li className="ordered-details1">Plaid+</li>
                    <li>$ 149,990</li>
                </div>
                <div className="ordered-car-details">
                    <li className="ordered-details1">Red</li>
                    <li><div className = "ordered-paint-button"></div></li>
                </div>
                <div className="ordered-car-details">
                    <li className="ordered-details1">Tempest 19" Wheels</li>
                    <li><img className = "ordered-wheel" src = "https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1411111-00-A_0.jpg" alt = ""></img></li>
                </div>
                <div className="ordered-car-details">
                    <li className="ordered-details1">Leather Interior</li>
                    <li><div className = "ordered-interior"></div></li>
               </div>
               <div className="ordered-car-details">
                    <li className="ordered-details1">Full Self Driving Capabilities</li>
                    <li>$ 10,000</li>
                </div>*/}
                <div className = "price-container">
                   <h2 className = "price">$ 160,990</h2>
                </div> 

                <div className="download-buttons">
                    <button className = "final-button1">Explore {orders.name}</button>
                    <button className = "final-button2">Download Invoice</button>
                </div>
        </div>
    );
}