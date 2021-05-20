import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from '../store/actions/AdminActions';

class DeleteMovieById extends Component{
  componentDidMount(){
      const {adminActions, match} = this.props;
      adminActions.deleteMovie(match.params.movieId);
  }
  render(){
      if(this.props.newMovie !== undefined){
          this.props.history.push("/admin/movieslist");
      }
      return(
          <div></div>
      );
  }
}

function mapStateToProps(state) {
  return {
      newMovie : state.adminReducer.newMovie
     
  };
}
function mapDispatchToProps(dispatch){
   return {
      adminActions : bindActionCreators(adminActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteMovieById);