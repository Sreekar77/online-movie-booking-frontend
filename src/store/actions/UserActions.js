import Axios from 'axios';
 
// API URL
const apiUrl = "http://localhost:8083";
 
// Sync Action

 
export const createUserSuccess = (user) => {
    console.log("inside addItemSucess method");
    return {
        type: 'CREATE_USER_SUCCESS',
        payload: user
    }
};
 
export const createUser = (payload) => {
    let data = {
        customername : payload.customername,
        password : payload.password,
        email : payload.Email,
        phoneno : payload.Phoneno,
       
        
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/user/addcustomer", data)
            .then(response => {
                dispatch(createUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchAllMoviesSuccess = (movies) => {
    console.log(movies);
    return {
        type: 'FETCH_ALL_MOVIES_SUCCESS',
        movies
    }
};
 
//Async Action
export const fetchAllMovies = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/user/movies')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllMoviesSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addBookingSucces=(booking)=>{
    console.log("inside addbooking");
    alert("Movie Booked");
   // window.location.href="/viewPurchasedPolicy?Id=/"+policy.customerId;
    return{
        type:'ADD_BOOKING_SUCCESS'
    }
}
export const addBooking=(payload)=>{
    console.log("inside addbooking");
    let data={
        movieId:payload.movieId,
        movieName:payload.movieName
        }
       console.log(data.movieId);
        return(dispatch)=>{
            return Axios.post(apiUrl+"/user/addbooking",data)
            .then(Response=>{
              
                dispatch(addBookingSucces(Response.data));
            })
            .catch(Error=>{
                console.log("error");
                console.log("here");
                throw(Error);
            });
        };
};
export const addBookingDetailsSuccess=(bookingDetails)=>{
    console.log("inside add booking success");
    
    return{
        type: 'ADD_BOOKING_SUCCESS',bookingDetails
    }
} ;

export const fetchAllPaymentSuccess = (payment) => {
    console.log(payment);
    return {
        type: 'FETCH_ALL_PAYMENT_SUCCESS',
        payment
    }
};
 
//Async Action
export const fetchAllPayment = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/user/paymentdetails')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllPaymentSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchAllTheatreSuccess = (theatres) => {
    console.log(theatres);
    return {
        type: 'FETCH_ALL_THEATRE_SUCCESS',
        theatres
    }
};
 
//Async Action
export const fetchAllTheatre = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/user/theatreslist')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllTheatreSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};