import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap';
import {connect } from 'react-redux';
 
class LandingComponent extends Component {

    logout(){
        window.location.href="/"
    }

    render(){
    return(
    
       <div>
          
            <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home">BookMyMovie</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <Nav>
                        <Nav.Link href="#Welcome"><Link to={`/`}><Button className="mx-1 my-3">Home</Button></Link></Nav.Link>
                        <Nav.Link eventKey={2} >
                            <Link to={`/user/movies`}><Button className="mx-1 my-3">Movies</Button></Link>
                        </Nav.Link>    
                        <Nav.Link eventKey={3} >
                            <Link to={`/user/theatreslist`}><Button className="mx-1 my-3">Theatres</Button></Link>    
                        </Nav.Link>
                        <Nav.Link eventKey={4} >
                            <Link to={`/`}><Button className="mx-1 my-3" id="bt" onClick={this.logout}> Logout </Button></Link>    
                        </Nav.Link>
                    </Nav>


                    


                </Navbar.Collapse>
            </Navbar>
            

            <Carousel>
                <Carousel.Item interval={1000}>
                <img style={{'height':"600px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1587986100063-d1c34ca3dc6b?fit=fillmax&fm=jpg&ixid=eyJhcHBfaWQiOjM1NjcwfQ&ixlib=rb-1.2.1&q=75"
                        alt="Welcome Page"
                    />
                    <Carousel.Caption>
                    <h1 class="text-warning"><center className="txt"> Welcome, {sessionStorage.getItem("customername")}!</center></h1>
                        <p>Catch the latest movies in your nearest Cinemas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{'height':"600px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1554522329-33b20a360135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Welcome Page"
                    />
                    <Carousel.Caption>
                        <h3>Browse, Book, Watch and Enjoy!</h3>
                        <p>And while you're at it, use the app to get discounts as well!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"600px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1523207911345-32501502db22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Welcome Page"
                    />
                    <Carousel.Caption>
                        <h3>Book anytime, anywhere!</h3>
                        <p>Use BookMyMovie. It's simple, it's easy!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

             
            <div style={{ position: "bottom" , padding:"10px"}} className="d-flex flex-column foo ">
                    <footer className="footer">
                        <div>

                            <span>&copy; Online Movie Booking System </span>
                        </div>
                        

                    </footer>
                </div>
       

 
   </div>
    );
}
}
function mapStateToProps(state){
    return{
        login:state.loginReducer.login
    };
}
export default connect(mapStateToProps)(LandingComponent);