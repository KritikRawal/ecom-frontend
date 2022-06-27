import axios from "axios";
import React from "react";
import { Component, state, loginUser, response } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";
import swal from 'sweetalert'
import "./login.css"
import loginImage from "./login.png"
// import { useForm } from "react-hook-form";


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": ""
        }
    }



    loginUser = (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:90/funfurnish/login", userData)
            .then((response) => {
                console.log(response);
                if (response.data.success == true) {
                    swal({
                        "title": "Success",
                        "text": response.data.message,
                        "icon": "success"
                    })
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data))
                    window.location.href = "/"
                }
                else {
                    swal({
                        "title": "Error",
                        "text": response.data.message,
                        "icon": "error"
                    })
                }

            })
            .catch((err) => {

                console.log(err)
            }

            )
    }
   


    render() {




        return (
            <Container className="loginForm">
                <Row>
                    <Col>
                    </Col>
                    <Col md={6}>
                        <form className="registerforms mt-5 p-5 " >
                            <h3 className="text-center text-bold heads">Log in</h3>
                            <div className="regimg">
                                                <img src={loginImage} className="loginimg" alt="" />

                                        </div>

                            <div className="form-group LoginText">
                                <label>Username</label>
                                <input type="text" className="form-control" value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} placeholder="Enter username" />


                            </div>

                            <div className="form-group LoginText">
                                <label>Password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label remember" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block loginbtn" onClick={this.loginUser}>Sign in</button>
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