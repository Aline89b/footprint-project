import { React, useState } from "react"
import {TextField, Autocomplete, Stack, Box}  from "@mui/material" 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from "/public/json/data.json"



export default function Form() {
  const [passengers, setPassengers] = useState('');
 

  const handleChange = (event) => {
    setPassengers(event.target.value);
  };
    return (
<div className="flex justify-center">
  <Stack direction="row" spacing={2}>
    
      <Autocomplete
        disablePortal
        id="origin"
        options={data}
        sx={{ width: 250 }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        
          {option.name} ({option.city}) {option.country}
        </Box>
      )}
        renderInput={(params) => <TextField {...params} label="From" inputProps={{
          ...params.inputProps,}}
          />}
      />
      <Autocomplete
        disablePortal
        id="destination"
        options={data}
        sx={{ width: 250 }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        
          {option.name} ({option.city}) {option.country}
        </Box>
      )}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">passengers</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={passengers}
              label="passengers"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
           </FormControl>
          </Stack>
        </div>
      )
}
