import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { Header } from './components/Header/mainHeader';
import { Home } from './modules/Home';
import { Footer } from './components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Home/Product/product';
import  Login from './Login';
import Signup from './Signup';
import Products from './modules/Products/products';
import Cart from './modules/Cart/cart';
import Reviews from './modules/Reviews';
import AddProduct from './modules/Add-Product';
function App() {
  return (
    <div>
     

     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/review' element={<Reviews/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
     </Routes>
    </div>
  );
}

export default App;
