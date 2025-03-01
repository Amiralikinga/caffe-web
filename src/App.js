
import './App.css';
import Reserve from "./Reserve/reserve";
import Home from "./Home/home";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from './ShoppingCart/shoppingCart'
import Settelment from './Settelment/settelment';
import Payment from './Payment/payment';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reserve" element={<Reserve/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/settelment" element={<Settelment/>}/>
            <Route path="/pay" element={<Payment/>}/>
        </Routes>
    );
}

export default App;