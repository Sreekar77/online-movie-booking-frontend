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


class CreateTheatreComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            theatreid: '',
            theatrename: '',
            theatrecity: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTheatre = this.createTheatre.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createTheatre(e) {
        e.preventDefault();
        
        let payload = {
            theatreid: this.state.theatreid,
            theatrename: this.state.theatrename,
            theatrecity: this.state.theatrecity,
        }
        
        const { adminActions } = this.props;
        adminActions.createTheatre(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            theatreid: '',
            theatrename: '',
            theatrecity: '',
        });
    }

    render() {
        return (
            <div>

                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Add Theatre</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >


                    </Navbar.Collapse>
                </Navbar>

                <Card      border="primary" className ="container mx-auto my-5  col-8 ">
                    <Form onSubmit={this.createTheatre}>
                        <Table responsive className= "mx-auto">
                            <tbody>
                                <tr>
                                    <td><label>Theatre Id:</label></td>
                                    <td><input type="text" placeholder="Theatre Id" name="theatreid" id="theatreid" value={this.state.theatreid} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Theatre Name:</label></td>
                                    <td><input type="text" placeholder="Theatre Name" name="theatrename" id="theatrename" value={this.state.theatrename} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Theatre City:</label></td>
                                    <td><input type="text" placeholder="Theatre City" name="theatrecity" id="theatrecity" value={this.state.theatrecity} onChange={this.handleInputChange}></input></td>
                                </tr>
                            </tbody>
                        </Table>

                      <div className="text-center">
                            <Button className="mx-2 my-3" variant="info" type="submit" value="submit">Submit</Button>
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
                        <Nav.Link href="#Welcome"><Link to={`/homepage`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button></Link></Nav.Link>
                                </Nav>
                        </div>
                    </Form>
                </Card>

                    {
                        this.props.theatre !== undefined &&
                        alert("Theatre Has Been Added"+ this.props.theatre.theatreid)
                    }


                <div style={{ position: "fixed" , padding:"15px"}} className="d-flex flex-column foo ">
                    <footer className="footer">
                        <div>

                            <span>&copy; Online Movie Booking</span>
                        </div>
                        
                    </footer>
                </div>

                
            </div> 
                  
        );
                     
    } 
}
 
function mapStateToProps(state) {
 
    return { theatre: state.adminReducer.newTheatre, 
        theatreIds: state.adminReducer.theatreid}
}
 
function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateTheatreComponent);