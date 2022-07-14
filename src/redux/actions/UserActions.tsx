import { Dispatch } from 'redux';
import * as actions from '../constants/UserConstants';
import axios from 'axios';
import { IUserLogin } from '../../interfaces/IUser';

export const login = (dispatch: Dispatch) => async (user: IUserLogin) =>  {

    try {
        
        dispatch({ type: actions.USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/api/users/login", user, config);

        dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error: any) {
        dispatch({
        type: actions.USER_LOGIN_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}

export const logout = (dispatch: Dispatch) =>() =>  {

    dispatch({ type: actions.USER_LOGOUT });
    localStorage.removeItem("userInfo");

}