import React from "react"

export default function Result(props) {
     
    return (

        <div className="  flex-col text-center text-lg text-red-700 p-6">
            <h1 className="text-black text-2xl font-bold text-center my-10">Let's start</h1>
              <h1>Once you put the airport of your departure and your arrival you will get the footprint of your travel</h1>
          <p>Results are in kg</p>
          <h1 className="text-black text-2xl font-bold ">CO2 EMISSION FOR PASSENGER: {props.result} </h1>
          <h1 className="text-black text-2xl font-bold"> TOTAL CO2 EMISSION:  {props.result/1*props.value }  </h1>
        </div>
    )
}