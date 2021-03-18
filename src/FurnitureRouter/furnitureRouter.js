import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from '../Body/Login';
import Register from '../Body/Register';


const FurnitureRouter = (props)=>{
    return (
        <Switch>
            <Route path="/" component={Login} exact></Route>
            <Route path="/register" component={Register}></Route>
        </Switch>
    )
}

export default FurnitureRouter;