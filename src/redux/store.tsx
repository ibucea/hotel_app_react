import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from './reducers/UserReducers';
import { useDispatch } from 'react-redux'


const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReducers = combineReducers({
    userLogin: userLoginReducer,
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store;