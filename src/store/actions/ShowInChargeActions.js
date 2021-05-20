import Axios from 'axios';

// API URL
const apiUrl = "http://localhost:8083";

export const createMovieSuccess = (movie) => {
    console.log("inside addMovieSucess method");
    alert("Movie added successfully");
    return {
        type: 'CREATE_MOVIE_SUCCESS',
        payload: movie
    }
};
export const addMovie = (payload) => 
{
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
        return Axios.post(apiUrl + "/showincharge/addmovie", data)
            .then(response => {
                dispatch(createMovieSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
        };
    };

    export const createTheatreSuccess = (theatre) => {
        console.log("inside CreateTheatreSuccess method");
        alert("Theatre added successfully");
        return {
            type: 'CREATE_THEATRE_SUCCESS',
            payload: theatre
        }
    };
    
    
    export const addTheatre = (payload) => {
        let data = {
            theatreid: payload.theatreid,
            theatrename: payload.theatrename,
            theatrecity: payload.theatrecity
        
        }
        return (dispatch) => {
            return Axios.post(apiUrl + "/showincharge/addtheatre", data)
                .then(response => {
                    dispatch(createTheatreSuccess(response.data))
                })
                .catch(error => {
                    throw (error);
                });
        };
    };