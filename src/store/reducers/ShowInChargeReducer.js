const initialState = {
   
    newMovie: undefined,
    newTheatre: undefined
}

export default function ShowInChargeReducer(state = initialState, action) {

   switch (action.type) {

           case 'CREATE_MOVIE_SUCCESS':
                   return {
                       ...state,
                       newMovie: action.payload
                   };  
            
           case 'CREATE_THEATRE_SUCCESS':
                    return {
                        ...state,
                        newTheatre: action.payload
                        };      
                   
           
     

            default:
                   return state;

   }
}