import React, { useState, useEffect } from "react";
import { Container, Grid, Paper } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateOrAny } from '../redux/store';
import { IRoom } from '../interfaces/IRoom';
import { fetchRooms } from '../redux/actions/RoomActions';
import Paginate from "../components/Paginate";
import RoomCard from "../components/RoomCard";
import Loader from "../components/Loader";
import SearchRooms from "../components/SearchRooms";


const HomeScreen = () => {

    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState<string>("");
    const [numOfBeds, setNumOfBeds] = useState<number | string>("");
    const [roomType, setRoomType] = useState<string>("");

    const [currentPage, setCurrentPage] = useState<number>(1);
    const { loading, rooms, count, error } = useSelector((state: RootStateOrAny) => state.roomsFetch);

    console.log(rooms, 'ROOMSSSSS');




    useEffect(() => {
        console.log('use efect');
        dispatch(fetchRooms(keyword, numOfBeds, roomType, currentPage));
    }, [dispatch, keyword, numOfBeds, roomType, currentPage]);

    return (
        <Container>

            <h2>All Rooms</h2>
            <SearchRooms
                keyword={keyword}
                setKeyword={setKeyword}
                numOfBeds={numOfBeds}
                setNumOfBeds={setNumOfBeds}
                roomType={roomType}
                setRoomType={setRoomType}
            />
            <Grid>
                {loading ? <Loader /> : error ? <Alert severity="error">{error}</Alert> : rooms.length > 0 ?
                    <>
                        {rooms.map((room: IRoom) =>
                            <Paper key={room.roomId} >
                                <RoomCard {...room} />
                            </Paper>
                        )}
                    </>
                    : (
                        <>
                            <Alert severity="info">No Room Available</Alert>
                        </>
                    )}
            </Grid>
            <Grid>
                <Paper>
                    {count !== 0 && (
                        <Paginate
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPosts={count}
                            postPerPage={4}
                        />
                    )}
                </Paper>
            </Grid>
        </Container>
    );
};

export default HomeScreen;
