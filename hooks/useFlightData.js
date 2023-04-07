import { useState } from 'react';

const useFlightData = () => {
  const [value, setValue] = useState(1);
  const [originVal, setOriginVal] = useState("" || null);
  const [destinationVal, setDestinationVal] = useState(''|| null);
  const [result, setResult] = useState();

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
    });
    const data = await res.json();
    setResult(data.co2e);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOriginChange = (event, neworiginVal) => {
    setOriginVal(neworiginVal.code);
  };

  const handleDestinationChange = (event, newDestinationVal) => {
    setDestinationVal(newDestinationVal.code);
  };

  return { value, originVal, destinationVal, result, handleChange, handleOriginChange, handleDestinationChange, fetchData };
};

export default useFlightData;