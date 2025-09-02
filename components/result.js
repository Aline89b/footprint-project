import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export default function Result(props) {
  const { result, value } = props;

  return (
  <motion.div
  className="w-full max-w-md p-8 rounded-3xl shadow-lg bg-white/90 backdrop-blur-md text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Risultato CO₂</h2>
  
  <div className="space-y-3">
    <p className="text-lg">Emissione per passeggero:</p>
    <p className="text-green-700 text-3xl font-extrabold">
      {(result.co2e / value).toFixed(2)} {result.co2e_unit}
    </p>

    <p className="text-lg">Totale viaggio:</p>
    <p className="text-green-700 text-3xl font-extrabold">
      {result.co2e} {result.co2e_unit}
    </p>

    {result.distance_km && (
      <p className="text-gray-600">Distanza: {result.distance_km} km</p>
    )}
  </div>
  <Button
                variant="outlined"
                sx={{ mt: 4, color: "rgb(178 132 91)", borderColor: "green" }}
                onClick={() => window.location.reload()} // reset veloce
              >
                Nuovo calcolo
              </Button>
</motion.div>
  );
}
