import React, { useState, useEffect } from 'react';
// import DatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
import DatePicker from 'react-datepicker'

import'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { RootStateOrAny } from '../redux/store';

import { getRoomDetails } from '../redux/actions/RoomActions';
import { IRoom } from '../interfaces/IRoom';
import Loader from '../components/Loader';
import { Container, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { checkRoomBooking, createBooking, getBookedDates } from '../redux/actions/BookingActions';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { Alert } from '@mui/material';
import { IBooking } from '../interfaces/IBooking';


// import { Link } from 'react-router-dom';
import { CHECK_ROOM_BOOKING_RESET, CREATE_BOOKING_RESET } from '../redux/constants/BookingConstants';
import { IUser } from '../interfaces/IUser';




type TId = {
    id: IRoom['roomId'],
    userId: IUser['userId']

}

const RoomDetailsScreen = () => {

    const { loggedIn } = useAuthStatus();


    const [checkInDate, setCheckInDate] = useState<IBooking['checkInDate']>();
    const [checkOutDate, setCheckOutDate] = useState<IBooking['checkOutDate']>();
    const [daysOfStay, setDaysOfStay] = useState<IBooking['daysOfStay']>(0);

    const { id, userId } = useParams<TId>();

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin);
    const { loading, room, error } = useSelector((state: RootState) => state.roomDetails);


    const { loading: loadingRoomIsAvailable, success: successRoomIsAvailable, error: errorRoomIsAvailable }
    = useSelector((state: RootStateOrAny) => state.roomBookingCheck);

    const {  successBookingCreate, error: errorBookingCreate } 
    = useSelector((state: RootStateOrAny) => state.bookingCreate);

    const {bookedDates} = useSelector((state: RootStateOrAny) => state.bookedDates);

    useEffect(() => {
        getRoomDetails(dispatch)(id as string);
        getBookedDates(dispatch)(id as string);
        dispatch({ type: CHECK_ROOM_BOOKING_RESET });
        dispatch({ type: CREATE_BOOKING_RESET });
    }, [dispatch, id]);

    const onChange = (dates: any) => {
        const [checkInDate, checkOutDate] = dates;
        setCheckInDate(checkInDate as Date);
        setCheckOutDate(checkOutDate as Date);

        if (checkInDate && checkOutDate) {

            // Calclate days of stay

            const days = Math.abs(checkInDate - checkOutDate) / (1000 * 60 * 60 * 24);

            setDaysOfStay(days);

            checkRoomBooking(dispatch)(id as string, checkInDate.toISOString(), checkOutDate.toISOString());

        }

    }

    const excludedDates: any[] = []
    bookedDates?.forEach((date: Date) => {
        excludedDates.push(new Date(date))
    })

    const successBooking = () => {

        const bookingData = {
            roomId: id,
            userId: userInfo.user.userId,
            checkInDate, 
            checkOutDate, 
            daysOfStay,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        createBooking(dispatch,userInfo)(bookingData);
        getBookedDates(dispatch)(id as string);
        dispatch({ type: CHECK_ROOM_BOOKING_RESET });
        dispatch({ type: CREATE_BOOKING_RESET });

    }

  return (
      <Container>
        {loading ? <Loader /> : error ? <Alert severity="error">{error}</Alert>  : (
            <><><div>{room['name']}</div><></><div>{room['address']}</div></><h3>Description</h3><p>
                  {room['description']}
              </p>
              <p> ${room['pricePerNight']} / Per Night</p>
              <p >Pick Check In & Check Out Date</p>
                                    <DatePicker
                                        dateFormat="DD-MM-YYYY"
                                        className='w-100'
                                        selected={checkInDate}
                                        onChange={onChange}
                                        startDate={checkInDate}
                                        endDate={checkOutDate}
                                        minDate={new Date()}
                                        excludeDates={excludedDates}
                                        selectsRange
                                        inline
                                    />
                                     {loadingRoomIsAvailable && <Loader />}
                                    {successRoomIsAvailable && <Alert severity='success'>Room Is Available</Alert>}                               
                                    {errorRoomIsAvailable && <Alert severity='error'>{errorRoomIsAvailable}</Alert>}

                                    {!loggedIn && (
                                        <Alert severity='info'>
                                            Please <Link to="/login">Sign In</Link> for booking
                                        </Alert>
                                     )}

                                    {loggedIn && successRoomIsAvailable && ( 
                                        <Button onClick={successBooking}>
                                            Booking
                                        </Button>
                                     )}

                                
                                     {successBookingCreate && (
                                        <Alert severity='success'>
                                            Your booking has been created
                                        </Alert>
                                     )}

                                     {errorBookingCreate && (
                                        <Alert severity='error'>
                                            {errorBookingCreate}
                                        </Alert>
                                     )}</>

            )}

      </Container>
  );
};

export default RoomDetailsScreen;
