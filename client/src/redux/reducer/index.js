import axios from "axios";
export const GET_LOGIN = "GET_LOGIN";

export function getlogin() {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/datos/login`);
    const login = response.data;
    return dispatch({
      type: GET_LOGIN,
      payload: login,
    });
  };
}
