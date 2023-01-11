import { React, useState } from "react"
import {TextField, Autocomplete, Stack, Box, Button}  from "@mui/material" 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from "/public/json/data.json"
import Result from "../public/src/components/result"
import Header from "../public/src/components/header"



export default function Form() {
  const [value, setValue] = useState(1);
  const [originVal, setOriginVal] = useState("" || null);
  const [destinationVal, setDestinationVal] = useState(''|| null)
  const [result, setResult] = useState();
  console.log(originVal)
 
  
  const fetchData = async () => {
    
    const res = await fetch("https://beta3.api.climatiq.io/travel/flights", {
      method: "POST",
      body: JSON.stringify(
      {
        "legs": [
        { 
        "from": originVal,
        "to": destinationVal,
        "passengers": value,
      }
    ]
      }) ,
      headers: {
        "Content-Type":"application/json",
        "Authorization": ` Bearer ${process.env.API_KEY} `,
      },
    })
     const data = await res.json()
     console.log(data)
    console.log(data.co2e/value)
    console.log(data.co2e, data.co2e_unit)
    setResult(data.co2e)
    
    
  }
  
  const handleChange = (event) => {
    
    setValue(event.target.value);
  };
    return (
    
  <div>
    <div className="relative w-full h-96 overflow-hidden">
      <Header />
     </div>
    <div className="flex flex-wrap justify-center mt-24">
     <Stack direction="row" spacing={2}>
    
      <Autocomplete
        disablePortal
      
        id="origin"
        options={data}
        
        onChange={(e, neworiginVal) =>{
          console.log(neworiginVal.code)
          setOriginVal(neworiginVal.code)
        } }
        sx={{ width: 400 }}
        getOptionLabel={(option) => `${option.name} ${option.country}`}
        renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        
          {option.country} ({option.city}) {option.name}
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
        sx={{ width: 350 }}
        getOptionLabel={(option) => `${option.name} ${option.country}`}
        onChange={(e, newDestinationVal) => setDestinationVal(newDestinationVal.code)}
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
              value={value}
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
           <Button onClick={fetchData} variant="outlined"> GO!</Button>
          </Stack>
           </div>
          <div>
            <Result result={result} value = {value} />
          </div>
        </div>  
      )
}
