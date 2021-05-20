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


class ViewPaymentComponent extends Component {

    constructor() {
        super();
            }

    componentDidMount() {
        this.props.userActions.fetchAllPayment();
        
    }

    render() {
        return (
            <div>
                <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home">Payment Details</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    
                </Navbar.Collapse>
                </Navbar>
                {
                    this.props.payment !== undefined ?

                    <Table striped bordered hover variant="dark" align="center">
                            
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Amount</th>
                                    <th>Transaction Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.payment.map((payment, index) =>
                                        <tr>
                                            <td>{payment.bookingId}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.transactionDate}</td>
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
                    <Nav.Link href="#Welcome"><Link to={`/user/addbooking`}><Button className="mx-1 my-3" variant="warning" align="center">Back</Button></Link></Nav.Link>
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
 
    return { payment: state.userReducer.payment }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      userActions : bindActionCreators(userActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (ViewPaymentComponent);