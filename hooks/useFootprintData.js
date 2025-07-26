import { useState } from "react";

export default function useFootprintData() {
  const [originVal, setOriginVal] = useState(null);
  const [destinationVal, setDestinationVal] = useState(null);
  const [value, setValue] = useState(1); // numero passeggeri
  const [transport, setTransport] = useState("");
  const [carSize, setCarSize] = useState("medium");
  const [carType, setCarType] = useState("diesel");
  const [flightClass, setFlightClass] = useState("economy");
  const [result, setResult] = useState(null);

  const handleOriginChange = (event, newValue) => {
    setOriginVal(newValue);
  };

  const handleDestinationChange = (event, newValue) => {
    setDestinationVal(newValue);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

 const fetchData = async () => {
  if (!transport) return;

  // Usa query se non c'è IATA
  const origin =
    transport === "flight" 
      ? { "iata": originVal.code }
      : transport !== "flight"
        ? { "query": originVal.city }
        : undefined;

  const destination =
     transport === "flight" 
      ? { "iata": destinationVal.code }
      : transport !== "flight" 
        ? { "query": destinationVal.city }
        : undefined;

  let car_details = undefined;
  let train_details = undefined;
  let flight_details = undefined;

  if (transport === "car") {
    car_details = {
      passengers: Number(value),
      car_size: carSize,      // "small" | "medium" | "large"
      car_type: carType,      // "diesel" | "petrol" | "plugin_hybrid" | "electric"
    };
  }

  if (transport === "rail") {
    train_details = {
      passengers: Number(value),
    };
  }

  if (transport === "air") {
    flight_details = {
      passengers: Number(value),
      class: flightClass, // "economy" | "business" | "first"
    };
  }

  console.log("Dati inviati a /api/footprint:", {
    origin,
    destination,
    travel_mode: transport,
    car_details,
    train_details,
    flight_details,
  });

  try {
    const response = await fetch("/api/footprint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        origin,
        destination,
        travel_mode: transport,
        car_details,
        train_details,
        flight_details,
      }),
      
    });

    const data = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(data));
    console.log("Risultato:", data);
    setResult({
      co2e: data.co2e,
      co2e_unit: data.co2e_unit,
      distance_km: data.distance_km,
    
});
  } catch (error) {
    console.error("Errore durante la chiamata:", error);
  }
};

  return {
    value,
    originVal,
    destinationVal,
    transport,
    carSize,
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
  };
}
