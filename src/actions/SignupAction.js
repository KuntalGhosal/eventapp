import axios from "axios";
// import { axiosInstance } from "../Axios";

export const SIGNUP = "SIGNUP";

export const signUpActiion = () => ({
  type: SIGNUP,
});

export const signUpUserDispatch = (data, actions) => async (dispatch) => {
  axios
    .post("https://ik-react-task.herokuapp.com/accounts/register/", data)
    .then((res) => {
      console.log("RES", res);
    })
    .catch((err) => {
      console.log(err);

      alert("ser with this email is already registered");
    });
};
