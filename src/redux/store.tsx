import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from './reducers/UserReducers';
import {roomsFetchReducer, roomDetailsReducer} from './reducers/RoomReducers';
import { userRegisterReducer} from './reducers/RegisterReducers';
import { roomBookingCheckReducer, bookedDatesReducer, bookingCreateReducer, BookingsMyReducer} from './reducers/BookingReducers'


import { AnyIfEmpty } from 'react-redux'


const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    roomsFetch: roomsFetchReducer,
    roomDetails:roomDetailsReducer,
    roomBookingCheck: roomBookingCheckReducer,
    bookedDates: bookedDatesReducer,
    bookingCreate: bookingCreateReducer,
    BookingsMy: BookingsMyReducer
})


const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo")!);
const middleware = [thunk]

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage
  }
};
const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );


export type RootStateOrAny = AnyIfEmpty<typeof store.getState> 
export type RootState = ReturnType<typeof store.getState>

export default store;