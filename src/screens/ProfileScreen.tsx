import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateOrAny } from '../redux/store';
import { Container, Table } from '@material-ui/core';
import { Alert } from '@mui/material';
import Loader from '../components/Loader';
import { getMyBookings } from '../redux/actions/BookingActions';
import moment from 'moment';

const ProfileScreen: React.FC = () => {

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin);
  const { myBookings, loading, error } = useSelector((state: RootStateOrAny) => state.BookingsMy);

  useEffect(() => {

    if (userInfo) {
      getMyBookings(dispatch, userInfo)();
    }
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
              <th>Room ID</th>
              <th>Check In </th>
              <th>Check Out</th>
              <th>Days Of Stay</th>
              <th>Created At</th>
              <th>Updated At</th>

            </tr>
          </thead>
          <tbody>
            {myBookings?.map((book: any) =>
              <tr key={book.bookingId}>
                <td>{book.bookingId}</td>
                <td> {book.roomId}</td>
                <td>{moment(book.checkInDate as Date).format("LL")}</td>
                <td>{moment(book.checkOutDate as Date).format("LL")}</td>
                <td>{book.daysOfStay}</td>
                <td>{moment(book.createdAt as Date).format("LL")}</td>
                <td>{moment(book.updatedAt as Date).format("LL")}</td>
             
              </tr>
            )}
          </tbody>
        </Table>
      )}

    </Container>
  );
};

export default ProfileScreen;

