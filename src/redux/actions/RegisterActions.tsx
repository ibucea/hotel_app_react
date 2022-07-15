import { Dispatch } from 'redux';
import * as actions from '../constants/RegisterConstants';
import * as userAction from '../constants/UserConstants'
import axios from 'axios';
import { IUserRegister } from '../../interfaces/IUser';

export const register = (dispatch: Dispatch) => async (user: IUserRegister) => {
    try {
        dispatch({ type: actions.USER_REGISTER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/api/users/register", user, config);

        console.log('data');

        dispatch({ type: actions.USER_REGISTER_SUCCESS });
        dispatch({ type: userAction.USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error: any) {
        dispatch({
            type: actions.USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
