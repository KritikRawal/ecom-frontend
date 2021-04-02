import React,{useState,useEffect} from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert'


const Shop = (props) => {
    let [type,setCategory] = useState("Chair");
    let [furnitures,setFurniture] = useState([]);
    useEffect(()=>{
        axios.post("http://localhost:90/product/showall",{category:type})
        .then((response)=>{
            console.log(response)
            if(response.data.success == true)
            {
                setFurniture(response.data.data)
            }
            else
            {
                setFurniture([])
            }
        })
    },[type])

    const changeHandler = (e) =>{
        setCategory(
            e.target.value
        )
    }

    return (
        <React.Fragment>
            <Container fluid className="mt-2 mb-2">
                <Row>
                    <Col lg={4} className="d-none d-md-block"></Col>
                    <Col lg={4}>
                        <select className="form-control" onChange={(event=>{changeHandler(event)})}>
                            <option value="Chair"> Chair </option>
                            <option value="Cupboard"> Cupboard </option>
                            <option value="Others"> Others</option>
                        </select>
                    </Col>
                    <Col lg={4} className="d-none d-md-block"></Col>
                    {
                        furnitures.length > 0?
                        (
                            
                            furnitures.map((product)=>{
                                return(
                                    <Col lg={3}>
                                        <Card className="productCard" style={{cursor:"pointer"}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="productImg">
                                                    <Card.Img variant="top" src={`http://localhost:90/${product.pimage}`} />
                                                </div>
                                                    <Card.Body>
                                                        <Card.Title className="text-center">{product.pname}</Card.Title>
                                                        <p> <strong> Brand: </strong> {product.pBrand}  </p>
                                                        <p> <strong>Available Stock: </strong> {product.availableStock} </p>
                                                        <p> <strong>Price: </strong> 
                                                            {
                                                                product.newPrice > 0 ?
                                                                (
                                                                    <>
                                                                    <span> Rs {product.newPrice} </span> <span style={{textDecoration:"line-through"}}> Rs {product.pprice} </span> <small> ({product.discount}%) </small>
                                                                    </>
                                                                ):
                                                                (
                                                                    <span> Rs {product.pprice} </span>
                                                                )
                                                            }
                                                         </p>
    
                                                        
                                                         
       
                                                       
                                                    </Card.Body>
                                                
     
                                            </Card>
                                    </Col>
                                )
                            })
                        ):
                        (
                            <Col lg={12}>
                                    <p className="text-center mt-2" style={{fontWeight:"bolder"}}> No Furniture on stock. </p>
                            </Col>  
                            
                        )
                       
                    }
                    <Col>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Shop
