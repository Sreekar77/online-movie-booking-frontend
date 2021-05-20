import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux';

class Dashboard extends Component {

    logout(){
        window.location.href="/"
    }

    render(){
    return(
       <div>
            <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home" align="center">Book My Movie App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <Nav>
                        <Nav.Link href="#Welcome"><Link to={`/showincharge/addmovie`}><Button type="submit">Add Movie</Button></Link></Nav.Link>
                        < Nav.Link eventKey={2} >
                        <Link to={`/showincharge/addtheatre`}><Button type="submit">Add Theatre</Button></Link>
                        </Nav.Link >

                        < Nav.Link eventKey={3} >
                            <Link to={`/`}><Button type="submit" id="bt" onClick={this.logout}> Logout </Button></Link>
                     </Nav.Link>
                    </Nav>


                    


                </Navbar.Collapse>
            </Navbar>
            
      

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
                        alt="Show In Charge Page"
                    />
        
                    <Carousel.Caption>
                        <h3>Welcome Show-In-Charge!</h3>
                        <p>Handpicked cinema, enjoy to the fullest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZSUyMG9mJTIwdGhyb25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Movies and More</h3>
                        <p>Handpicked cinema, enjoy to the fullest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                        alt="Admin Page"
                    />
        
                    <Carousel.Caption>
                        <h3>Cinema</h3>
                        <p>Handpicked cinema, enjoy to the fullest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="d-flex flex-column foo ">
                <footer className="footer">
                    <div>

                        <span>&copy; Online Movie Booking </span>
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
export default connect(mapStateToProps)(Dashboard);