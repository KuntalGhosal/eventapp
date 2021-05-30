import AuthReducer from './AuthReducer';


import UserReducer from './UserReducer';

const rootReducer = {
    auth: AuthReducer,
   
    user : UserReducer,

}

export default rootReducer;