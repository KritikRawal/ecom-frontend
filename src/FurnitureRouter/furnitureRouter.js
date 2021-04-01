import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from '../Body/Login';
import Register from '../Body/Register';
import Body from '../Body/Body';
import AboutUs from '../About Us/AboutUs';
import Product from '../Product/Product';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';




const FurnitureRouter = (props)=>{
    return (
      <>
           <Header/>
            <Route path="/" component={Body} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
            <Route path="/Product" component={Product}></Route>
        <Footer/>
      </>
    )
}

export default FurnitureRouter;