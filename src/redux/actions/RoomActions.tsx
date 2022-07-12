import axios from 'axios';
import { Dispatch } from 'redux';
import * as actions from '../constants/RoomConstants';

export const fetchRooms = (keyword: string, numOfBeds: number | string, roomType: string, currentPage: number) => 
async (dispatch: Dispatch) => {
    try {
        dispatch({ type: actions.FETCH_ROOMS_REQUEST });

        const { data } = 
        await axios.get(`/api/rooms/?keyword=${keyword}&numOfBeds=${numOfBeds}&roomType=${roomType}&pageNumber=${currentPage}`);

        console.log(data, 'DATAAAAAAA');
        dispatch({ type: actions.FETCH_ROOMS_SUCCESS, payload: data });
        
    } catch (error: any) {
        dispatch({ 
            type: actions.FETCH_ROOMS_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }
}