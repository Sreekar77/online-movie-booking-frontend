import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import AddMovieComponent from './AddMovieComponent';
import CreateTheatreComponent from './CreateTheatreComponent'
import GetAllMoviesComponent from './GetAllMoviesComponent'
import GetAllTheatresComponent from './GetAllTheatresComponent'
import DeleteMovieById from './DeleteMovieById'
import LandingComponent from './LandingComponent';
import ViewMoviesComponent from './ViewMoviesComponent';
import ViewTheatreComponent from './ViewTheatreComponent';
import ViewPaymentComponent from './ViewPaymentComponent';
import AddBookingComponent from './AddBookingComponent';
import Dashboard from './Dashboard';
import AddMovie from './AddMovie';
import AddTheatre from './AddTheatre';

const Routes = () => (
    <BrowserRouter>
    

        <Switch>
        <Route path='/' component={Welcome} exact />
        <Route path='/login' component={Login} exact />   
        <Route path='/register' component={Register} exact /> 

        <Route path='/homepage' component={Homepage} exact />
        <Route path={`/admin/addmovie`} component={AddMovieComponent} exact />
        <Route path={`/admin/addtheatre`} component={CreateTheatreComponent} exact />
        <Route path={`/admin/movieslist`} component={GetAllMoviesComponent} exact />
        <Route path={`/admin/theatreslist`} component={GetAllTheatresComponent} exact />
        <Route path={`/admin/removeMovie/{movieid}`} component={DeleteMovieById} exact />

        <Route path={'/landingpage'} component={LandingComponent} exact />
        <Route path={`/user/movies`} component={ViewMoviesComponent} exact />
        <Route path={`/user/addbooking`} component={AddBookingComponent} exact />
        <Route path={`/user/paymentdetails`} component={ViewPaymentComponent} exact />
        <Route path={`/user/theatreslist`} component={ViewTheatreComponent} exact />

        <Route path={'/dashboard'} component={Dashboard} exact />
        <Route path={'/showincharge/addmovie'} component={AddMovie} exact/>
        <Route path={'/showincharge/addtheatre'} component={AddTheatre} exact/>


        </Switch>

    </BrowserRouter>
);
export default Routes;