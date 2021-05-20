const initialState = {
    users: [],
    user: undefined,
    newUser: undefined,
    usersIds: [],
    movies: [],
    payment: [],
    theatres: [],
    bookingDetails : undefined
}
 
export default function UserReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_USERS_SUCCESS':
            return {
                ...state,
               users : action.users
            };
            
        case 'FETCH_ALL_USERS_IDS_SUCCESS':
            return {
                ...state,
               usersIds : action.usersIds
            };
            case 'FETCH_USER_BY_ID_SUCCESS':
                return {
                    ...state,
                    user: action.payload
                };
     
            case 'CREATE_USER_SUCCESS':
                return {
                    ...state,
                    newUser: action.payload
                };

                case 'FETCH_ALL_MOVIES_SUCCESS':
                    return {
                        ...state,
                        movies : action.movies
                    };
            
            case 'ADD_BOOKING_SUCCESS':
                    return{
                        ...state,
                        bookingDetails:action.bookingDetails
                    }

            case 'FETCH_ALL_PAYMENT_SUCCESS':
                    return {
                        ...state,
                        payment : action.payment
                    }; 
                    
            case 'FETCH_ALL_THEATRE_SUCCESS':
                    return {
                        ...state,
                        theatres : action.theatres
                    };

       
        default:
            return state;
 
    }
}