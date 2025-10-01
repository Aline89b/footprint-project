import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TrainIcon from "@mui/icons-material/Train";
import FlightIcon from "@mui/icons-material/Flight";
import SendIcon from "@mui/icons-material/Send";
import {
  TextField,
  Autocomplete,
  Stack,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import data from "/public/json/data.json";
import car from "/public/json/car.json";
import train from "/public/json/train.json";
import { v4 as uuid } from "uuid";
import useFootprintData from "../hooks/useFootprintData";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Result from "../components/result";
import Link from "next/link";

export default function Form() {
  const {
    value,
    originVal,
    destinationVal,
    transport,
    carSize,
    carType,
    flightClass,
    result,
    handleChange,
    handleOriginChange,
    handleDestinationChange,
    setTransport,
    setCarSize,
    setCarType,
    setFlightClass,
    fetchData,
  } = useFootprintData();

let dataB;

if (transport === "car") {
  dataB = car;
} else if (transport === "rail") {
  dataB = train;
} else {
  dataB = data; // default = auto
}

  dataB.forEach((el) => {
    el.id = uuid();
  });

  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen relative bg-[url(../public/images/bgWorld.svg)] bg-cover bg-center bg-no-repeat">
        
        {/* 👇 Se ho già il risultato mostro SOLO Result */}
        {result ? (
          <div className="flex flex-col items-center">
            <Result result={result} value={value} />
            
          </div>
        ) : (
          <>
            {/* FORM */}
            <Stack direction={{ xs: "column", md: "column" }} spacing={2} alignItems="center">
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 4 }}>
                <BottomNavigation
                  sx={{
                    width: 350,
                    borderRadius: 3,
                    boxShadow: 2,
                    bgcolor: "rgb(62 170 73)",
                    "& .Mui-selected": {
                      color: "#fff000",
                    },
                  }}
                  value={transport}
                  onChange={(event, newValue) => {
                    setTransport(newValue);
                  }}
                  showLabels
                >
                  <BottomNavigationAction label="Auto" value="car" icon={<DirectionsCarIcon />} />
                  <BottomNavigationAction label="Treno" value="rail" icon={<TrainIcon />} />
                  <BottomNavigationAction label="Aereo" value="air" icon={<FlightIcon />} />
                </BottomNavigation>
              </Box>
            </Stack>

            <div className="flex flex-wrap justify-center gap-4 mb-6 min-w-fit">
              {/* From */}
              <Autocomplete
                disablePortal
                id="origin"
                options={dataB}
                onChange={handleOriginChange}
                sx={{ minWidth: 250 }}
                getOptionLabel={(option) => `${option.city} ${option.name} ${option.country}`}
                renderOption={(props, option) => (
                  <Box component="li" {...props} key={option.id}>
                    {option.city} ({option.name}) {option.country}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField {...params} sx={{ bgcolor: "ghostwhite" }} label="From" />
                )}
              />

              {/* To */}
              <Autocomplete
                disablePortal
                id="destination"
                options={dataB}
                sx={{ minWidth: 250 }}
                getOptionLabel={(option) => `${option.city}`}
                onChange={handleDestinationChange}
                renderOption={(props, option) => (
                  <Box component="li" {...props} key={option.id}>
                    {option.city} ({option.name}) {option.country}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField {...params} sx={{ bgcolor: "ghostwhite" }} label="To" />
                )}
              />

              {/* Passengers */}
              <FormControl>
                <InputLabel id="passengers-label">Passengers</InputLabel>
                <Select
                  sx={{ bgcolor: "ghostwhite" }}
                  labelId="passengers-label"
                  value={value}
                  label="Passengers"
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6].map((val) => (
                    <MenuItem key={val} value={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Conditional inputs */}
              {transport === "car" && (
                <>
                  <FormControl>
                    <InputLabel id="car-size-label">Car Size</InputLabel>
                    <Select
                      sx={{ bgcolor: "ghostwhite" }}
                      labelId="car-size-label"
                      id="car-size-select"
                      value={carSize || " "}
                      label="Car Size"
                      onChange={(e) => setCarSize(e.target.value)}
                    >
                      <MenuItem value="small">Small</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="large">Large</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="car-type-label">Car Type</InputLabel>
                    <Select
                      labelId="car-type-label"
                      id="car-type-select"
                      value={carType || ""}
                      onChange={(e) => setCarType(e.target.value)}
                      label="Car Type"
                      sx={{ bgcolor: "ghostwhite", minWidth: 150 }}
                    >
                      <MenuItem value="plugin_hybrid">Plugin Hybrid</MenuItem>
                      <MenuItem value="diesel">Diesel</MenuItem>
                      <MenuItem value="electric">Electric</MenuItem>
                      <MenuItem value="petrol">Petrol</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}

              {transport === "air" && (
                <FormControl>
                  <InputLabel id="flight-class-label">Flight Class</InputLabel>
                  <Select
                    sx={{ bgcolor: "ghostwhite" }}
                    labelId="flight-class-label"
                    id="flight-class-select"
                    value={flightClass}
                    label="Flight Class"
                    onChange={(e) => setFlightClass(e.target.value)}
                  >
                    <MenuItem value="economy">Economy</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="first">First Class</MenuItem>
                  </Select>
                </FormControl>
              )}

              <Button
                onClick={fetchData}
                variant="text"
                color="success"
                endIcon={<SendIcon />}
              >
                GO!
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
