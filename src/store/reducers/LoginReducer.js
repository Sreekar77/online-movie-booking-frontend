const initialState={
    login:undefined,
    
}

export default function loginReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                login:action.login
            };
    
            default:
                return state;
    }
}