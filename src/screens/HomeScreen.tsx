import React, { useState, useEffect } from "react";
import { Container, Grid, Paper } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateOrAny } from '../redux/store';
import { IRoom } from '../interfaces/IRoom';
import { fetchRooms } from '../redux/actions/RoomActions';
import RoomCard from "../components/RoomCard";
import Loader from "../components/Loader";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const [keyword, ] = useState<string>("");
    const [numOfBeds, ] = useState<number | string>("");
    const [roomType, ] = useState<string>("");

    const [currentPage, ] = useState<number>(1);
    const { loading, rooms, error } = useSelector((state: RootStateOrAny) => state.roomsFetch);

    useEffect(() => {
        fetchRooms(dispatch)(keyword, numOfBeds, roomType, currentPage);
    }, [dispatch, keyword, numOfBeds, roomType, currentPage]);

    return (
        <Container>

            <h2>All Rooms</h2>
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
        </Container>
    );
};

export default HomeScreen;
