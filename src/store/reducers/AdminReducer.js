
const initialState = {
    movies: [],
    newTheatre: undefined,
    newMovie: undefined,
    theatres: []
}
 
export default function AdminReducer(state = initialState, action) {
 
    switch (action.type) {
            case 'CREATE_THEATRE_SUCCESS':
                return {
                    ...state,
                    newTheatre: action.payload
                };

            case 'CREATE_MOVIE_SUCCESS':
                    return {
                        ...state,
                        newMovie: action.payload
                    };  
                    
            case 'FETCH_ALL_MOVIES_SUCCESS':
                    return {
                        ...state,
                        movies : action.movies
                    };

             case 'FETCH_ALL_THEATRES_SUCCESS':
                        return {
                            ...state,
                            theatres : action.theatres
                        };
            
             case 'MOVIE_DELETED' :
                            return {
                                ...state,
                                newMovie : 'deleted'
                            };
            
       

             default:
                    return state;
 
    }
}