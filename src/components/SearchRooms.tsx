import React from 'react';
import { Container, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';

type SearchRoomsParams = {
    keyword: string,
    setKeyword: React.Dispatch<React.SetStateAction<string>>,
    numOfBeds: number | string,
    setNumOfBeds: React.Dispatch<React.SetStateAction<number | string>>,
    roomType: string,
    setRoomType: React.Dispatch<React.SetStateAction<string>>
}



export const SearchRooms: React.FC<SearchRoomsParams> =
    ({ keyword, setKeyword, numOfBeds, setNumOfBeds, roomType, setRoomType }) => {

        const handleRoomTypeChange =
            (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
                setRoomType(
                    typeof event.target.value === 'string'
                        ? event.target.value : ''
                );
            };

        const handleNumOfBedsChange =
            (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
                setNumOfBeds(
                    typeof event.target.value === 'string'
                        ? event.target.value : ''
                );
            };

        return (
            <Container>
                <div>

                    <FormControl >
                        <InputLabel>Search</InputLabel>
                        <Input
                            type="text"
                            name="keyword"
                            placeholder="Search"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </FormControl>


                    <FormControl >
                        <InputLabel>Num of Beds</InputLabel>
                        <Select defaultValue={'DEFAULT'}
                            name="numOfBeds"
                            value={numOfBeds}
                            onChange={handleNumOfBedsChange}
                            labelId="Num-of-Beds"
                        >
                            {/* <option value="DEFAULT" disabled>Choose the numOfBeds ...</option> */}
                            <option id='op1' value={10}>One</option>
                            <option id='op2' value={20}>Two</option>
                            <option id='op3' value={30}>Three</option>
                        </Select>
                    </FormControl >


                    <FormControl >
                        <InputLabel>Room Type</InputLabel>
                        <Select defaultValue={'DEFAULT'}
                            name="roomType"
                            value={roomType}
                            onChange={handleRoomTypeChange}
                            labelId="Room-Type"
                        >
                            {/* <option value="DEFAULT" disabled>Choose the Room type ...</option> */}
                            <option id='opt1' value="King">King</option>
                            <option id='opt2' value="Single">Single</option>
                            <option id='opt3' value="Twins">Twins</option>
                        </Select>
                    </FormControl >

                </div>
            </Container>
        );
    };

export default SearchRooms;
