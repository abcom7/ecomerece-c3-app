
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import Shop from "./pages/Shop"
import ProductsInfo from './components/ProductsInfo';
import Cart from "./pages/Cart";

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path = "/" elemnt = {<Home/>}/>
      <Route exact path = "/Shop" elemnt = {<Shop/>}/>
      <Route exact path = "/ProductsInfo/:id" elemnt = {<ProductsInfo/>}/>
      <Route exact path = "/Cart" elemnt = {<Cart/>}/>
    </Routes>
   </Router>
  );
}

export default App;
