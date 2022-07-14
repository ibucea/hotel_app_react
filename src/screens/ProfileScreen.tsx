import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateOrAny } from '../redux/store';
import { Container, Table } from '@material-ui/core';
import { Alert } from '@mui/material';
import Loader from '../components/Loader';
import { getMyBookings } from '../redux/actions/BookingActions';
import { Link } from "react-router-dom";
import moment from 'moment';

const ProfileScreen: React.FC = () => {

    const dispatch = useDispatch();


    const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin);
    const { myBookings, loading, error } = useSelector((state: RootStateOrAny) => state.BookingsMy);

    useEffect(() => {
      
    }, [dispatch]);

    useEffect(() => {

        if(userInfo) {
  
        
        getMyBookings(dispatch, userInfo)();}
    }, [userInfo, dispatch]);


  return (
      <Container>

                <h2>Info Profile</h2>
                Full Name: {userInfo.user.username}
                <br></br>
                Email: {userInfo.user.email}

  
          <h2>My Bookings</h2>
   

        {loading ? <Loader /> : error ? <Alert severity='error'>{error}</Alert> : (
          <Table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Room</th>
                <th>Check In </th>
                <th>Check Out</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {myBookings?.map((book: any) =>
                <tr key={book._id}>
                  <td>{book._id}</td>
                  <td>
                    <Link to={`/room/${book.room._id}`}>
                      {book.room.name}
                    </Link>
                  </td>
                  <td>{moment(book.checkInDate as Date).format("LL")}</td>
                  <td>{moment(book.checkOutDate as Date).format("LL")}</td>
                  <td>${book.amountPaid}</td>
                </tr>
              )}
            </tbody>
          </Table>
          )}
    
    </Container>
  );
};

export default ProfileScreen;

