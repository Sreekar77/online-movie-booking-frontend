/* eslint-disable no-useless-constructor */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from '../store/actions/AdminActions';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

class GetAllTheatresComponent extends Component {

    constructor() {
        super();
            }

    componentDidMount() {
        this.props.adminActions.fetchAllTheatres();
        
    }

    render() {
        return (
            <div>

            <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home" className="justify-content-center">Show Theatres</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >


                </Navbar.Collapse>
            </Navbar>
                

            <div style={{
                
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
                    }}>
                        
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
                                    this.props.theatres.map((theatres, index) =>
                                        <tr>
                                            <td>{theatres.theatreid}</td>
                                            <td>{theatres.theatrename}</td>
                                            <td>{theatres.theatrecity}</td>

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
                        <Nav.Link href="#Welcome"><Link to={`/homepage`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button>
                        </Link></Nav.Link>
                                </Nav>
                        </div>
                </div>
              
                        <div style={{ position: "fixed" , padding:"1px"}} className="d-flex flex-column foo ">
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
 
    return { theatres: state.adminReducer.theatres }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      adminActions : bindActionCreators(adminActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (GetAllTheatresComponent);