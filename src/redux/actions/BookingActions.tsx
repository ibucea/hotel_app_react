import { Dispatch } from "redux";
import axios from 'axios';
import * as actions from '../constants/BookingConstants';
import { IRoom } from "../../interfaces/IRoom";
import { ICreateBooking } from "../../interfaces/IBooking";

export const checkRoomBooking = (dispatch: Dispatch) => async(roomId: IRoom['roomId'], checkInDate: Date, checkOutDate: Date) => {

    try {
        dispatch({ type: actions.CHECK_ROOM_BOOKING_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/JSON",
            }
        }

        await axios.post(`/api/bookings/check`, {roomId, checkInDate, checkOutDate}, config);

        dispatch({ type: actions.CHECK_ROOM_BOOKING_SUCCESS });

    } catch (error: any) {
        dispatch({ 
            type: actions.CHECK_ROOM_BOOKING_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}

export const createBooking = (dispatch: Dispatch, getState: any) => async (bookingData: ICreateBooking) => {

    try {
        dispatch({ type: actions.CREATE_BOOKING_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/JSON",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/bookings`, bookingData, config);

        dispatch({ type: actions.CREATE_BOOKING_SUCCESS });

    } catch (error: any) {
        dispatch({ 
            type: actions.CREATE_BOOKING_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}

export const getBookedDates = (dispatch: Dispatch) => async (roomId:  IRoom['roomId']) =>  {

    try {
        dispatch({ type: actions.GET_BOOKED_DATES_REQUEST });

        const { data } = await axios.get(`/api/bookings/dates/${roomId}`);

        dispatch({ type: actions.GET_BOOKED_DATES_SUCCESS, payload: data });

    } catch (error: any) {
        dispatch({ 
            type: actions.GET_BOOKED_DATES_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }
}

export const getMyBookings = (dispatch: Dispatch, getState: any) => async () =>  {

    try {
        dispatch({ type: actions.GET_MY_BOOKINGS_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/JSON",
                "Authorization": `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`/api/bookings/me`, config);

        dispatch({ type: actions.GET_MY_BOOKINGS_SUCCESS, payload: data });

    } catch (error: any) {
        dispatch({ 
            type: actions.GET_MY_BOOKINGS_FAIL, 
            payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message });
    }

}