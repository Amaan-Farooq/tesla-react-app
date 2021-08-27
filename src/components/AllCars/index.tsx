import React from "react";
import "./styles.scss";
import { useEffect , useState } from "react";
import {
    Link
} from "react-router-dom";

export function AllCars(props:any){
    const [cars , SetCars] = useState<any>([]);
    const getCars = async () => {
        const response : any = await fetch("http://localhost:8000/carsApp/car-list/");
        const data = await response.json();
        SetCars(data);
        // console.log(data);
    }
   
    useEffect(()=>{
        getCars();
    },[]);
    
    const link="/details/";
    // console.log(cars);

    return (
         <div className = "all-cars">
             <div className="title">T E S L A</div>
             <h1 className = "all-cars-title">ALL MODELS</h1>
             <div className = "car-list">
             {cars.map((car:any) => {
                 return (
                    <Link to ={link+`${car.id}`}>
                    <div key = {car.id} className = "card">
                        <img className="car-image" src={car.img_url} alt="Car" />
                        <ul className = "flex">
                            <li className = "li1-item-1">{car.name}</li>
                            <li className = "li1-item-2">{car.start_range}</li>
                        </ul>
                        <ul className = "flex">
                            <li className="li2-item-1">{car.Time_to_60}s</li>
                            <li className="li2-item-2">{car.top_speed} Mph</li>
                            <li className="li2-item-3">{car.peak_power} HP</li>
                            <li className="li2-item-4">$ {car.base_price}</li>
                        </ul>
                        <ul className = "flex list3">
                            <li className="li3-item-1">0-60</li>
                            <li className="li3-item-2">Top Speed</li>
                            <li className="li3-item-3">Peak Power</li>
                            <li className="li3-item-4">Starts</li>

                        </ul>
                    </div>
                     </Link>
                 );
             })
            }
            </div>
         </div>
    );

    
}