import { bindActionCreators } from 'redux';
import {GET_EVENTS,GET_ACTION_TYPE} from '../actions/UserActions';


const initialState = {
    eventsList:[],
    eventTypes:[],
}

export default (state=initialState,action) =>{

switch(action.type) {
    case GET_EVENTS:
        return Object.assign({}, state,{
            eventsList: [...action.payload],
        });
    case GET_ACTION_TYPE :
        return Object.assign({}, state,{
            eventTypes: [...action.payload],
        })
    default:
        return state;
}
};