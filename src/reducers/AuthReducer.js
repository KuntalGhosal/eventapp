import {SET_AUTHENTICATED} from '../actions/AuthActions';

const initialState = {
    Authenticated:false
}

export default (state=initialState,action) => {
    switch(action.type){
        case SET_AUTHENTICATED:
        return Object.assign({},state,{
            Authenticated:action.payload,
        });
        default:
            return state;
    }
};