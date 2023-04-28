import React from "react";
import { motion } from "framer-motion";

export default function Result(props) {
  return (
    <motion.div
      className=" flex-col text-center text-lg p-6 bg-[#ffc107] rounded-2xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>Results are in kg</p>
      <h1 className="text-black text-2xl font-bold ">
        CO2 EMISSION FOR PASSENGER:{" "}
      </h1>
      <h2 className=" text-green-700 font-bold"> {props.result} </h2>
      <h1 className="text-black text-2xl font-bold"> TOTAL CO2 EMISSION: </h1>
      <h2 className=" text-green-700 font-bold"> {(props.result / 1) * props.value} </h2>
    </motion.div>
  );
}
