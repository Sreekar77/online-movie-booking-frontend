import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Login extends Component{
   constructor(){
       super();
       this.state={
           customername:'',
           password:''
           

       }
       
       
   }
   validation=(user)=>{

    let password=this.state.password;
    let customername=this.state.customername;
  
    
    
    if(customername.length==0){
        alert("Please provide a username");
    }

    else if(password.length<3) {
        alert("Please enter the correct password!");
    }

    else{
        alert("Login successfull");
    }
    

    let payload={
        customername:this.state.customername,
        password:this.state.password
    }
    this.props.LoginAction.loginValidate(payload);
    user.preventDefault();

   
}
   onChange=(user)=>this.setState({[user.target.name]:user.target.value});

   
   render(){

    

    let login=this.props.login;
    console.log("inside render method"+login);

    if(login!==undefined)
    {
        if(login.role==="admin")
        {
            return <Redirect to="/homepage"></Redirect>
        }
        else if(login.role==="user"){
            return <Redirect to="/landingpage"></Redirect>
        }
        else if(login.role=="showincharge"){
            return <Redirect to="/dashboard"></Redirect>
        }
        else{
            alert("Please check your details");
            
        }
        
    }
    return(
        

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
                            <h3 className="text-center">Login</h3>
                            <div className="card-body"></div>
            <form>
                <div className="form-group">
                    
                    <label>Username</label>
                    <input type="text" name="customername" className="form-control" value={this.state.customername} onChange={this.onChange} required/><br></br>
                    <label>Enter password</label>
               <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input><br></br>
                </div>

                <div className="form-group-1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>


                    <button className="btn btn-success" onClick={this.validation}>Login</button> <span> </span>
                    <span> </span>

                    <Link to={`/`}><button className="btn btn-success"> Back </button></Link>

                    <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
          
               
            </form>
            </div></div>
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
function mapStateToProps(state){
return{
    login:state.loginReducer.login
};
}
function mapDispatchToProps(dispatch){
return{
    LoginAction: bindActionCreators(LoginAction,dispatch)
};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);