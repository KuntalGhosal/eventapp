import axios from "axios";
import { axiosInstance } from "../Axios"

export const GET_EVENTS = 'GET_EVEVNTS';
export const GET_ACTION_TYPE ='GET_ACTION_TYPE';



export const getEventListDispatch = () => async(
    dispatch,
) => {
   axiosInstance
   .get('/events/')
   .then((res) => {
       console.log(res);
       dispatch({type: GET_EVENTS , payload:res.data});
   })
   .catch((err) => {
       console.log(err);
   })
}

export const getEventsType = () => async (
    dispatch,
) => {
    axiosInstance
    .get('/events/event_types/')
    .then((res) => {
        console.log(res);
        dispatch({type: GET_ACTION_TYPE, payload:res.data})
    })
    .catch((err) =>{
        console.log(err);
    })
}

export const postEvents = (data) =>async(
    dispatch,
) => {
    axiosInstance
    .post('/events/',data)
    .then((res) => {
        console.log(res);
        // dispatch({type: POST_EVENT , payload})
    })
    .catch((err) =>{
        console.log(err);
    })
}
//     const config = {
// 			method: 'POST',
// 			url: 'https://ik-react-task.herokuapp.com/events/',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Authorization:
// 					localStorage.getItem('token')
// 			},
// 			data: data,
// 		};
// 		const res = await axios(config);
// 		console.log(res);
// }
