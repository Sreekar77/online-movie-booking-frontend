import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import userReducer from './UserReducer';
import adminReducer from './AdminReducer';
import showinchargeReducer from './ShowInChargeReducer'

const rootReducer = combineReducers({
 
    loginReducer,
    userReducer,
    adminReducer,
    showinchargeReducer
 
});
 
export default rootReducer;