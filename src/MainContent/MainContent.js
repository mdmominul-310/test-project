import React, { useEffect, useState } from 'react'
import './MainContent.css'
import api from '../data/fakeApi.JSON'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import banner from '../asstes/images/wrap.png'
import banner2 from '../asstes/images/wrap2.png'



export default function MainContent() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            <Row>
                <Col lg={5}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1>
                            We picked some <span className='text-warning'> <b> Cool things</b></span> for you!
                        </h1>

                    </div>
                </Col>
                <Col lg={7}>
                    <div>
                        <h4 className='deals'>hot deals for you</h4>
                        <Row lg={3}>
                            {
                                products.slice(0, 6).map(product => {

                                    return (
                                        <Col>
                                            <div className='py-3' >
                                                <img src={product.picture} className="w-100" />
                                                <div>
                                                    <div>
                                                        <p>{product.name}</p>

                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p>
                                                            <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                            {product.price}
                                                        </p>
                                                        <p className='text-danger'>-{product.discount}% off</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>



            </Row>

            <div className='pt-5'>
                <img src={banner} className='w-100' />
            </div>

            <div className='py-5'>
                <h4 className='deals'>Today's hot deals</h4>
                <div>
                    <Row lg={6}>
                        {
                            products.slice(6, 12).map(product => {

                                return (
                                    <Col>
                                        <div className='py-3' >
                                            <img src={product.picture} className="w-100" />
                                            <div>
                                                <div>
                                                    <p>{product.name}</p>

                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>
                                                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                        {product.price}
                                                    </p>
                                                    <p className='text-danger'>-{product.discount}% off</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

            </div>

            <div className='pb-5'>
                <h4 className='deals'>Your search item</h4>
                <div>
                    <Row lg={6}>
                        {
                            products.slice(6, 12).map(product => {

                                return (
                                    <Col>
                                        <div className='py-3' >
                                            <img src={product.picture} className="w-100" />
                                            <div>
                                                <div>
                                                    <p>{product.name}</p>

                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>
                                                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                        {product.price}
                                                    </p>
                                                    <p className='text-danger'>-{product.discount}% off</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

            </div>

            <div className='pt-5'>
                <img src={banner2} className='w-100' />
            </div>

            <div className='py-5'>
                <h4 className='deals'>Deals on furniture</h4>
                <div>
                    <Row lg={6}>
                        {
                            products.slice(6, 12).map(product => {

                                return (
                                    <Col>
                                        <div className='py-3' >
                                            <img src={product.picture} className="w-100" />
                                            <div>
                                                <div>
                                                    <p>{product.name}</p>

                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p>
                                                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                        {product.price}
                                                    </p>
                                                    <p className='text-danger'>-{product.discount}% off</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

            </div>

            <div className='pb-5'>
                <h4 className='deals'>Review your purchase</h4>
                <div>
                    <Row lg={2}>
                        {
                            products.slice(2, 4).map(product => {

                                return (
                                    <Col>
                                        <div className='py-3 d-flex' >
                                            <img src={product.picture} className="w-100" />
                                            <div>
                                                <div>
                                                    <p>{product.name}</p>
                                                    <p>
                                                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                        {product.price}
                                                    </p>

                                                </div>

                                            </div>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

            </div>
        </div>
    )
}
