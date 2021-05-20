import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from '../store/actions/AdminActions';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';  
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class AddMovieComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieId : '',
            movieName : '',
            movieDate :'',
            genre : '',
            rating : '',
            duration : '',
            theatres : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addMovie(e) {
        e.preventDefault();
        
        let payload = {
            movieId : this.state.movieId,
            movieName : this.state.movieName,
            movieDate : this.state.movieDate,
            genre : this.state.genre,
            rating : this.state.rating,
            duration : this.state.duration,
            theatres : this.state.theatres
        }
        
        const { adminActions } = this.props;
        adminActions.addMovie(payload);        
 
    }

    clear = () => {
        this.setSate = ({
            movieId : '',
            movieName : '',
            movieDate :'',
            genre : '',
            rating : '',
            duration : '',
            theatres : ''
        });
    }

    render() {
        return (
            <div>

                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Add Movie</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >


                    </Navbar.Collapse>
                </Navbar>

                <Card border="primary" className ="container mx-auto my-5  col-8 ">
                    <Form onSubmit={this.addMovie}>
                        <Table responsive className= "mx-auto">
                            <tbody>
                                <tr>
                                    <td><label>Movie ID:</label></td>
                                    <td><input type="text" placeholder="Id" name="movieId" id="movieId" value={this.state.movieId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Movie Name:</label></td>
                                    <td><input type="text" placeholder="Movie Name" name="movieName" id="movieName" value={this.state.movieName} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Movie Date: </label></td>
                                    <td><input type="date" placeholder="Movie Date" name="movieDate" id="movieDate" value={this.state.movieDate} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Genre: </label></td>
                                    <td><input type="text" placeholder="genre" name="genre" id="genre" value={this.state.genre} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Rating:</label></td>
                                    <td><input type="text" placeholder="rating" name="rating" id="rating" value={this.state.rating} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Duration:</label></td>
                                    <td><input type="text" placeholder="duration" name="duration" id="duration" value={this.state.duration} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Theatres:</label></td>
                                    <td><input type="text" placeholder="theatres" name="theatres" id="theatres" value={this.state.theatres} onChange={this.handleInputChange}></input></td>
                                </tr>

                            </tbody>
                        </Table>

                      <div className="text-center">
                            <Button className="mx-2 my-3" variant="info" type="submit" value="submit" onClick={this.addMovie}>Submit</Button>
                            <Button className="mx-2 my-3" variant="danger">Cancel</Button>
                        </div>
                        <div 
                          style={{
                       display: "flex",
                       justifyContent: "center",
                         alignItems: "center"
                           }}
      >
                            <Nav>
                        <Nav.Link href="#Welcome"><Link to={`/homepage`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button>
                        </Link></Nav.Link>
                                </Nav>
                        </div>
                        

                        
                    </Form>
                </Card>



                
                
                    {
                        this.props.movie !== undefined &&
                        alert("Movie Created Succssfully with id"+ this.props.movie.movieId)
                    }


                <div style={{ position: "fixed" , padding:"5px"}} className="d-flex flex-column foo ">
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
 
                    return { movie: state.adminReducer.newmovie, 
                        moviesIds: state.adminReducer.moviesIds}
                }

                function mapDispatchToProps(dispatch) {
                    return {
                        adminActions: bindActionCreators(adminActions, dispatch)
                    }
                };
                 
                export default connect(mapStateToProps, mapDispatchToProps) (AddMovieComponent);