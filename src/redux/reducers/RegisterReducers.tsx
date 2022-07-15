import * as actions from '../constants/RegisterConstants';
import * as userActions from '../constants/UserConstants';

export const userRegisterReducer = (state = {}, action: any) => {
    switch (action.type) {
        case actions.USER_REGISTER_REQUEST:
            return {
                loading: true
            };
        case userActions.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case actions.USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }

}
