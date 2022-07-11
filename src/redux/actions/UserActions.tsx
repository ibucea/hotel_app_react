import { Dispatch } from 'redux';
import * as actions from '../constants/UserConstants';
import axios from 'axios';
import { IUserLogin } from '../../interfaces/IUser';

export const login = (user: IUserLogin) => async (dispatch: Dispatch) => {

    console.log('action login');
    try {
        
        dispatch({ type: actions.USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/login", user, config);

        console.log("userInfo-----userACTION", JSON.stringify(data))

        dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error: any) {
        console.log('errorrr');
        dispatch({
        type: actions.USER_LOGIN_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}