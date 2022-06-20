import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import { Link } from 'react-router-dom'


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])
    return (
        < >
            <Meta />
            {!keyword ? <>
                <div style={{height: 30}}></div>
                <ProductCarousel />
            </>
                : (<Link to='/' className='btn btn-outline-dark' style={{ marginTop: '20px' }}><i className="far fa-hand-point-left"></i> Go Back </Link>)
            }
            <div style={{height: 30}}></div>
            <h3>Latest Furnitures</h3>
            {loading ? (<></>) : error ? (<Message variant='danger'>{error} <i className="fas fa-exclamation-triangle"></i></Message>)
                :
                <>
                       
                    <Row >
                        {products.map(product => {
                            return <Col className='body' key={product._id} sm={12} md={6} lg={4} xl={3} >
                                <Product product={product} />
                            </Col>
                        })}

                    </Row>
               
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                </>
            }
        </>
    )
}

export default HomeScreen
