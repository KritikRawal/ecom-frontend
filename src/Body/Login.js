import axios from "axios";
import React from "react";
import { Component,state,loginUser, response } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";

class Login extends Component {
    loginUser=(e)=>{
        e.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:3000/user/login",userData)
        .then(()=>{
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.data))
            window.location.href="/"
        })
        .catch((err)=>{
            console.log(err)
        }

        )
    }

    render() {
        return (
           <Container>
               <Row>
                   <Col>
                   </Col>
                   <Col>
                   <form>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.loginUser}>Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form></Col>
        <Col></Col>
               </Row>
           </Container>
        );
    }
}




export default Login;