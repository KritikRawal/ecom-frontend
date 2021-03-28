import React,{ Component } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

class Products extends Component{
    state = {
        products : [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
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

       
 deleteProduct = (pid) =>{
    axios.delete('http://localhost:90/product/delete/' + pid,  this.state.config)
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
              
                <div>{
                    this.state.products.map((product)=>{
                        return (<div>
                            <p>Id :
                            {
                            product.pname 
                            }
                            </p>
                            <p><button onClick={this.deleteProduct.bind(this, product._id)}>Delete</button></p>
                           <p><Link to={"/update/" + product._id}  >Update</Link></p>
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
export default Products;