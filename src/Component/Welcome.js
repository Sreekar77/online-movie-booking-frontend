import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
          
            <div>
              
                

<Navbar bg="dark" variant="dark">
                <Link to="#home" className="nav-link">Online Movie Booking</Link>
                 <Nav className="navbar-right">
                    <Link to="login" className="nav-link">Login</Link>
                    <Link to="register"className="nav-link">Register</Link>
                </Nav>
            </Navbar>
            <Jumbotron className ='bg-dark text-white'>

                
  <h1>Welcome to the Movie Booking App</h1>
  <p>
    Here you can login,register and book the movie tickets.
  </p>
  
</Jumbotron>

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
}

export default Welcome;