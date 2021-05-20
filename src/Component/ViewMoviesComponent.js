/* eslint-disable no-useless-constructor */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import * as userActions from '../store/actions/UserActions';
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ViewMoviesComponent extends Component {

    constructor() {
        super();
            }

    componentDidMount() {
        this.props.userActions.fetchAllMovies();
        
    }

    render() {
        return (
            <div>
                <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home">Available Movies</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    
                </Navbar.Collapse>
                </Navbar>

                        <Carousel>

                        {/* <Carousel.Item style={{'height':"300px"}} > */}

                        <Carousel.Item interval={1000}>
                        <img style={{'height':"500px"}}
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1475353152807-97f4e3315977?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                          alt="Welcome Page"
                        />
                        <Carousel.Caption>
                        <h3>Learn Magic with Harry Potter!</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                        <img style={{'height':"500px"}}
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80"
                          alt="Welcome Page"
                        />
                        <Carousel.Caption>
                        <h3>Or meet us at the Disney Castle!</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img style={{'height':"500px"}}
                          className="d-block w-100"
                          src="https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                          alt="Welcome Page"
                        />
                        <Carousel.Caption>
                        <h3>If not, Join the forces for a glorious Star Wars!</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        {/* </Carousel.Item> */}
                        </Carousel>


                        {
                    this.props.movies !== undefined ?

                    <Table striped bordered hover variant="dark" align="center">
                            
                            <thead>
                                <tr>
                                    <th>Movie ID</th>
                                    <th>Movie Name</th>
                                    <th>Movie Date</th>
                                    <th>Genre</th>
                                    <th>Rating</th>
                                    <th>Duration</th>
                                    <th>Theatres</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.movies.map((movies, index) =>
                                        <tr>
                                            <td>{movies.movieId}</td>
                                            <td>{movies.movieName}</td>
                                            <td>{movies.movieDate}</td>
                                            <td>{movies.genre}</td>
                                            <td>{movies.rating}</td>
                                            <td>{movies.duration}</td>
                                            <td>{movies.theatres}</td>
                                            <td><Link to={`/user/addbooking`}><Button type="submit">Book Movie</Button></Link></td>
                                            </tr>)
                                }
                            </tbody>

                        </Table>
                        

                                          
                        :
                        <h3>Loading....</h3>
                }

                <div 
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
      >
          
                    <Nav>
                    <Nav.Link href="#Welcome"><Link to={`/landingpage`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button></Link></Nav.Link>
                    </Nav>
                </div>

                
                <div style={{ position: "bottom" , padding:"15px"}} className="d-flex flex-column foo ">
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

function mapStateToProps(state) {
 
    return { movies: state.userReducer.movies }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      userActions : bindActionCreators(userActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (ViewMoviesComponent);