import Axios from 'axios';
 
// API URL
const apiUrl = "http://localhost:8083";
 
// Sync Action

export const createTheatreSuccess = (theatre) => {
    console.log("inside CreateTheatreSuccess method");
    alert("Theatre added successfully");
    return {
        type: 'THEATRE_ADDED',
        payload: theatre
    }
};
 
export const createTheatre = (payload) => {
    let data = {
        theatreid: payload.theatreid,
        theatrename: payload.theatrename,
        theatrecity: payload.theatrecity,
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/admin/addtheatre", data)
            .then(response => {
                dispatch(createTheatreSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
 
export const createMovieSuccess = (movie) => {
    console.log("inside addMovieSucess method");
    alert("Movie added successfully");
    return {
        type: 'CREATE_MOVIE_SUCCESS',
        payload: movie
    }
};
 
export const addMovie = (payload) => {
    let data = {
        movieId : payload.movieId,
        movieName : payload.movieName,
        movieDate : payload.movieDate,
        genre : payload.genre,
        rating : payload.rating,
        duration : payload.duration,
        theatres : payload.theatres
        
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/admin/addmovie", data)
            .then(response => {
                dispatch(createMovieSuccess(response.data))
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
        return Axios.get(apiUrl + '/admin/movieslist')
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

export const fetchAllTheatresSuccess = (theatres) => {
    console.log(theatres);
    return {
        type: 'FETCH_ALL_THEATRES_SUCCESS',
        theatres
    }
};
 
//Async Action
export const fetchAllTheatres = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/admin/theatreslist')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllTheatresSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteMovieSuccess=()=>{
    console.log("inside deleteMovieSuccess method");
    return {
        type : 'MOVIE_DELETED'
    }
};

export const deleteMovie = (movieId) =>{
    console.log("inside deleteMovie method");
    return (dispatch)=> {
        return Axios.delete(apiUrl+'/admin/removeMovie/' + movieId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteMovieSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

  
