import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from '../Body/Login';
import Register from '../Body/Register';
import Body from '../Body/Body';
import AboutUs from '../About Us/AboutUs';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Admin from '../admin/admin';
import Shop from '../shop/shop';




const FurnitureRouter = (props)=>{
    return (
      <>
           <Header/>
            <Route path="/" component={Body} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
           
            <Route path="/admins" component={Admin}></Route>
            <Route path="/shop" component={Shop}></Route>
        <Footer/>
      </>
    )
}

export default FurnitureRouter;