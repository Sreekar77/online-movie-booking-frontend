import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import * as userActions from '../store/actions/UserActions'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Register.css';


class Register extends Component {
     
 
    constructor(props) {
        super(props);
        this.state = {
            customername :'',
            password :'',
            Email : '',
            Phoneno :'',
           

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this);

       
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createUser(e) {
        e.preventDefault();

        let Phoneno=this.state.Phoneno;
        let password=this.state.password;
        let customername=this.state.customername;
      
        if(customername.length==0){
            alert("Please provide a username");
        
        }

        
        else if(password.length<3){
            alert("Please provide a password");
        }

        else if(!this.state.Email.includes('@' && ('.'))) { 
            alert("Invalid email");
        }
        

        else if(!Number(Phoneno)){
            alert("Insert a valid phone number");
        }

        else {
            alert("Registered successfully!");
        }
    
    
        let payload = {
           customername : this.state.customername,
           password : this.state.password,
            Email : this.state.Email,
            Phoneno : this.state.Phoneno,

        }
        
        const { userActions } = this.props;
        userActions.createUser(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            customername :'',
            password :'',
            Email : '',
            Phoneno :'',

        });
    }


    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Link to={`/`}> Online Movie Booking</Link> <span></span>
                 <Nav className="navbar-right">
                    <Link to="login" className="nav-link">Login</Link>
                    <Link to="register"className="nav-link">Register</Link>
                </Nav>
            </Navbar>

            <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Sign Up</h3>
                            <div className="card-body"></div>


          
            <form onSubmit={this.createUser}>
            <div className="form-group text-left">
                <label htmlFor="exampleInputUserName1">User Name</label>
                <input type="text" 
                       className="form-control" 
                       id="customername" 
                       placeholder="Enter user name"
                       name = "customername"
                       value={this.state.customername} 
                       onChange={this.handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Enter your full name.</small>
                </div>

                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        name = "password"
                        value={this.state.password} 
                        onChange={this.handleInputChange}
                    />
               
                <small id="password" className="form-text text-muted">Please enter Password.</small>
                </div>

                <div className="form-group text-left">
                <label>Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="Email" 
                       aria-describedby="EmailHelp" 
                       placeholder="Enter Email"
                       type =" text"
                       name = "Email"
                       value={this.state.Email} 
                       onChange={this.handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your Email with anyone else.</small>
                </div>

                <div class="form-group text-left">
                   <input id="Phoneno"
                    type="int" 
                    name="Phoneno"
                    className="form-control" 
                    placeholder="Enter Phone number"
                     name="Phoneno"
                     value={this.state.Phoneno} 
                    onChange={this.handleInputChange}/>
                </div>


            
                <div className="text-center">
                       <Link to='./login'>  <Button className="mx-2 my-3" variant="info" type="submit" value="submit" onClick={this.createUser}>Submit</Button></Link>
                            <Button className="mx-2 my-3" variant="danger">Cancel</Button>
                            </div>
            </form>
            </div>
        </div>
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
function mapStateToProps(state) {
 
    return { user: state.userReducer.newuser, 
        usersIds: state.userReducer.usersIds}
}
 
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Register);