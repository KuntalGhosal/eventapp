import {axiosInstance} from '../Axios';
import {Storeauthenticated, StoreToken} from '../config';


export const LOGIN = 'LOGIN';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

export const loginAction = () => ({
    type: LOGIN,
});

export const loginUserDispatch = (data,actions) =>async(
    dispatch
    
) =>{
    
    axiosInstance
    .post ('/accounts/login/',data)
    .then((res) =>{
        console.log("RES",res);
        StoreToken(res.data.token)
        Storeauthenticated(true)
        

        dispatch({type: SET_AUTHENTICATED,payload: true})
        
    
    })
    .catch((err) =>{
        console.log(err)
        
        alert("Input a valid email and password")
    })
}