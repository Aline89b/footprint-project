import React from "react"

export default function Result(props) {
  
    return (

        <div className="my-10 flex-col text-center text-lg text-red-700 p-6">
            <h1 className="text-black text-2xl font-bold text-center my-10">Let's start</h1>
              <h1>ciao belli</h1>
          <p>here goes footprint results</p>
          <h1 className=" text-bold ">RESULT tot: {props.result} </h1>
          <h1> RESULT single: {props.result/1*props.value} </h1>
        </div>
    )
}