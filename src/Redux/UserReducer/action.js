import axios from "axios";

import {
  actionLoginError,
  actionLoginLoading,
  actionLoginSuccess,
  actionsignUpLoading,
  actionsingUpError,
  actionsingUpSuccess,
} from "./actionType";

let baseURL = process.env.REACT_APP_BASE_URL;

export const loginFetch = (value) => async (dispatch) => {
  dispatch(actionLoginLoading());
  try {
    const res = await axios
      .post(`${baseURL}/users/login`, value);
    dispatch(actionLoginSuccess(res.data));
  } catch (err) {
    dispatch(actionLoginError(err.message));
    console.log(err);
  }
};

export const signUpFetch = (value) => async (dispatch) => {
  console.log(value)
  dispatch(actionsignUpLoading());
  return axios
    .post(`${baseURL}/users/register`, value)
    .then((res) => {
      dispatch(actionsingUpSuccess());
      console.log("user created successfully")
    })
    .catch((err) => {
      dispatch(actionsingUpError(err.response?.data.msg));
      console.log(err);
    });
};

// conver 1 letter to upper case and rest to lower
export function capitalizeFirstLetter(string) {
  const words = string?.split(" ");
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords?.join(" ");
}


export function writeLocalStorage(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}