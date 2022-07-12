import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from './reducers/UserReducers';
import {roomsFetchReducer} from './reducers/RoomReducers';


import { AnyIfEmpty } from 'react-redux'


const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReducers = combineReducers({
    userLogin: userLoginReducer,
    roomsFetch: roomsFetchReducer
})


const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo")!);

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage
  }
};
const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );


export type RootStateOrAny = AnyIfEmpty<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch 



export default store;