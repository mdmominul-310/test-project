import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLocationDot, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Navigation() {
    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-between'>
                <div>
                    <h2>
                        <span className='text-dark'>Shop</span>cart
                    </h2>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserCircle} /> sign in

                </div>
            </div>
            <hr
            />

            <div className='d-flex justify-content-between'>
                <div className='bg-warning p-2 rounded'>
                    <FontAwesomeIcon icon={faLocationDot} /> Dhaka,1212
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                        <input type="text" className="form-control form-input" placeholder="Search ..." />
                        <FontAwesomeIcon icon={faSearch} className='fa-icon' />

                    </div>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Fresh</Nav.Link>
                        <Nav.Link href="#">Today's Deals</Nav.Link>
                        <Nav.Link href="#">Mobiles</Nav.Link>
                        <Nav.Link href="#">Gift Cards </Nav.Link>
                        <Nav.Link href="#">Women Clothing</Nav.Link>
                        <Nav.Link href="#">Men Clothing</Nav.Link>
                        <Nav.Link href="#">Kids Clothing</Nav.Link>
                        <Nav.Link href="#">Health</Nav.Link>
                        <Nav.Link href="#">Pet Corner</Nav.Link>
                        <Nav.Link href="#">Books</Nav.Link>
                        <Nav.Link href="#">Beauty</Nav.Link>
                        <Nav.Link href="#">Kitchen</Nav.Link>
                        <Nav.Link href="#">Bed Room</Nav.Link>
                        <Nav.Link href="#">Sport</Nav.Link>
                        <Nav.Link href="#">Bags</Nav.Link>


                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
