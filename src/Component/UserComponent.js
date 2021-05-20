import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class UserComponent extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem("customername")==undefined)
        {
            window.location.href="/login";
        }
    }

    logout(){
        sessionStorage.removeItem("customername");
        window.location.href="/login";
    }

    render(){
        let login=this.props.login;
        return(
            <body>
            <div class="user">
                <center className="txt"> Welcome {sessionStorage.getItem("customername")}</center>
                <Link to="/landingpage">
                    <button className="btn"> HELLO </button>

                </Link> &nbsp;
                
                <button className="btn" id="bt" onClick={this.logout}> Logout </button>
            </div>
            </body>
        );
    }
}
function mapStateToProps(state){
    return{
        login:state.loginReducer.login
    };
    }
    