import React from 'react';
import './App.scss';
import {Home} from "./components/Home";
import {AllCars} from "./components/AllCars";
import {Details} from "./components/Details";
import {Orders} from "./components/Orders";
import {OrderedCar} from "./components/OrderedCar";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
         <Route exact path="/">
            <Home />
          </Route> 
          <Route exact path="/allCars">
            <AllCars />
          </Route>  
          <Route exact path="/details/:carid">
            <Details />
          </Route>
          <Route exact path="/orders/:carid">
            <Orders />
          </Route>
          <Route exact path="/ordered-car/:carid">
            <OrderedCar />
          </Route>
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
