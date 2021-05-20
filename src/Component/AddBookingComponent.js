import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function AddBookingComponent () {
    return(
        <div>

                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Movie Booking</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >


                    </Navbar.Collapse>
                </Navbar>

                <Card    bg="dark" text="white"  border="primary" className ="container mx-auto my-5  col-8 ">

             <div class="card-body">
             <h4 class="card-title">Booking</h4>
             <p class="card-text">Movie Booked Successfully.</p>
             
             

             <div 
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
      >
          
                    <Nav>
                    <Nav.Link href="#Welcome"><Link to={`/user/movies`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button></Link></Nav.Link>
                    <Nav.Link href="#Welcome"><Link to={`/user/paymentdetails`}><Button className="mx-2 my-3" align="center">Payment</Button></Link></Nav.Link>
                    </Nav>
                </div>
            </div>
            </Card>
                <div style={{ position: "fixed" , padding:"15px"}} className="d-flex flex-column foo ">
                    <footer className="footer">
                        <div>

                            <span>&copy; Online Movie Booking System </span>
                        </div>

                    </footer>
                </div>

        </div>
           );
 }