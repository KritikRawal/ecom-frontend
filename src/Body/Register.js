import { Component, state } from "react";
import {Container, Row, Col, SubmitUser, ThemeProvider} from 'react-bootstrap';
import axios from 'axios';

class Register extends Component{

    state = {
        fname : "",
        lname : "",
        email : "",
        address : "",
        phone_number : "",
        usernanme : "",
        password : "",
        usertype : ""

    }
    SubmitUser=(e)=>{
        e.preventDefault();
        const userdata = {
            fname : this.state.fname,
            lname : this.state.lname,
            email : this.state.email,
            address : this.state.address,
            phone_number : this.state.phone_number,
            usertype : this.state.usertype

        }
        axios.post("http://localhost:90/added/insert", userdata)
        //  .then((userdata)=>{
        //      res.status(200)
        //  })
        //  .catch((err)=> {
        //  result.status(500)
        // })

    }


    render(){
        return(
            <div className="container">
                    <div className="row">
                        <div className = "col-lg-12 mainBackground">
                            <div className="row">
                                <div className="col-lg-8 d-none d-md-block"></div>
                                <div className="col-lg-4">
                                    <form method="post" className="login-form">
                                        <h5 className="text-center"> Register </h5>
                                        <div className="form-group">
                                            <label> Fname </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.fname} 
                                                onChange={(event)=>this.setState({fname: event.target.value})} className="form-control" name='fn' required placeholder="Enter Firstname"/>
                                                
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Lname </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.lname}
                                                onChange={(event)=>this.setState({lname: event.target.value})} className="form-control" name='ln' required placeholder="Enter Lastname"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Address </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.address}
                                                onChange={(event)=>this.setState({address: event.target.value})} className="form-control" name='ln' required placeholder="Enter Lastname"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Email </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="email" value={this.state.email}
                                                onChange={(event)=>this.setState({email: event.target.value})} className="form-control" name='ln' required placeholder="Enter email"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Phone_Number </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.phone_number}
                                                onChange={(event)=>this.setState({phone_number: event.target.value})} className="form-control" name='ln' required placeholder="Enter phone number"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> User_type </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.usertype}
                                                onChange={(event)=>this.setState({usertype: event.target.value})} className="form-control" name='ln' required placeholder="Enter phone number"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Username </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="text" value={this.state.usernanme}
                                                onChange={(event)=>this.setState({usernanme: event.target.value})} className="form-control" name='un' required placeholder="Enter username"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label> Password </label>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    {/* <span className="input-group-text icon"></span> */}
                                                </div>
                                                <input type="password" value={this.state.password}
                                                onChange={(event)=>this.setState({password: event.target.value})} className="form-control" name='pw' required placeholder="Enter Password"/>
                                            </div>
                                        </div>
                                        
                                        <button onClick={this.SubmitUser} type="submit" className="btn btn-primary btn-block" style={{borderRadius:"10px",boxShadow:"inset 0px 0px 5px white",padding:"9px"}} name="register"> Register </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}




export default Register;