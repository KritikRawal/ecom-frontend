import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Login from '../Body/Login';
import Register from '../Body/Register';
import Body from '../Body/Body';


const FurnitureRouter = (props)=>{
    return (
        <Switch>
            <Route path="/" component={Body} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
    )
}

export default FurnitureRouter;