import React from 'react';
import { Container, FormControl, Input, InputLabel, MenuItem, Select  } from '@material-ui/core';

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
  (event: React.ChangeEvent<{ name?: string, value: unknown}>) => {
    setRoomType(
      typeof event.target.value === 'string' 
        ? event.target.value : ''
    );
  };

  const handleNumOfBedsChange = 
  (event: React.ChangeEvent<{ name?: string, value: unknown}>) => {
    setNumOfBeds(
      typeof event.target.value === 'string' 
        ? event.target.value : ''
    );
  };

  return (
    <Container>
        <div>
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
            </div>
            <div>
                <FormControl >
                    <InputLabel>Num of Beds</InputLabel>
                    <Select 
                        name="numOfBeds" 
                        value={numOfBeds} 
                        onChange={handleNumOfBedsChange} 
                        labelId="simple-select-label"
                    >
                       <MenuItem value={10}>One</MenuItem>
                        <MenuItem value={20}>Two</MenuItem>
                        <MenuItem value={30}>Three</MenuItem>
                    </Select>
                </FormControl >
            </div>
            <div>
                <FormControl >
                    <InputLabel>Room Type</InputLabel>
                    <Select 
                        name="roomType"
                        value={roomType} 
                        onChange={handleRoomTypeChange} 
                        labelId="simple-select-label"
                    >
                        <option value="King">King</option>
                        <option value="Single">Single</option>
                        <option value="Twins">Twins</option>
                    </Select>
                </FormControl >
            </div>
        </div>
    </Container>
  );
};

export default SearchRooms;
