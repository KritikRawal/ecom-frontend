import { Component,state, DeleteProduct } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';


class Body extends Component{
    state = {
        products : []
    }
    componentDidMount(){
        axios.get("http://localhost:90/product/showall")
        .then((response)=>{
            console.log(response)
            this.setState({
                products : response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    DeleteProduct = (prod_id)=>{
        console.log(prod_id);
        axios.get('http://localhost:90/product/delete/' + prod_id)  
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
             

                    </Col>
                    <div>{
                        this.state.products.map((product)=>{
                            return (<div>
                                <p>Id :
                                {
                                product.pname 
                                }
                                </p>
                                <p><button onClick={this.DeleteProduct.bind(this, product._id)}>delete</button></p>
                            </div>
                                ) 
                        })
                    }
                    </div>
                    <Col>somethint</Col>
                </Row>
             </Container>
        )
    }
}
export default Body;
