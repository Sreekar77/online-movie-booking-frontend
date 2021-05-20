/* eslint-disable no-useless-constructor */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import * as userActions from '../store/actions/UserActions';
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ViewTheatreComponent extends Component {

    constructor() {
        super();
            }

    componentDidMount() {
        this.props.userActions.fetchAllTheatre();
        
    }

    render() {
        return (
            <div>
                <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home">Affiliated Theatres</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    
                </Navbar.Collapse>
                </Navbar>
                {
                    this.props.theatres !== undefined ?

                    <Table striped bordered hover variant="dark" align="center">
                            
                            <thead>
                                <tr>
                                    <th>Theatre ID</th>
                                    <th>Theatre Name</th>
                                    <th>Theatre City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.theatres.map((theatre, index) =>
                                        <tr>
                                            <td>{theatre.theatreid}</td>
                                            <td>{theatre.theatrename}</td>
                                            <td>{theatre.theatrecity}</td>
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

function mapStateToProps(state) {
 
    return { theatres: state.userReducer.theatres }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      userActions : bindActionCreators(userActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (ViewTheatreComponent);