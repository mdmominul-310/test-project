import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className='bg-dark'>
            <Container>
                <div className='d-flex justify-content-between  text-light p-3'>
                    <div>
                        <h2>
                            Shopcart
                        </h2>
                    </div>
                    <div className='d-flex '>
                        <p>
                            About us
                        </p>
                        <p className='px-3'>
                            contact
                        </p>
                        <p>
                            Help
                        </p>




                    </div>
                    <div>
                        English
                    </div>
                </div>
            </Container>
        </div>


    )
}
