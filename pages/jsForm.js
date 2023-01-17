import * as React from 'react';
import { useState } from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { setRevalidateHeaders } from 'next/dist/server/send-payload';


export default function JsForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  
  
  const handleSubmit = async (event) => {
      
    event.preventDefault()
    const data = {
      name: name,
      surname: surname,
      email: email,
    }
    console.log(data)
    const endpoint ="/api/hello"
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
     
    headers: {
      "Content-Type":"application/json",
    
    },
  })
   const result = await res.json()
    
      alert(`Is this your full name: ${result.data}`)
      console.log(typeof(result.data))
    }
    return (
      
      
        <div className='flex flex-wrap justify-center'>
            <div className='flex-col  mt-20 p-2 font-bold text-center text-xl '>
                <h1>Wanna know what you can do to
                <br></br> 
                   <span className=' text-lime-600'> reduce your footprint</span>
                <br></br>
               on your daily life?</h1>
           <h2>Drop an e mail and get a suggestion once a week!
            <br></br>
            <span role="img" aria-label="smile">😎</span></h2>
            </div>
            <div>
               
            <form onSubmit={handleSubmit}
                    
                    
                    >
                        <Stack 
                        spacing={2}
                        alignItems="center"
                        mt={10}
                        
                        sx={{borderRadius: 1, boxShadow: 2,p: 4, mx:"auto", width: 300, height: 400}}
                        >
                          
                            <InputLabel htmlFor="name"></InputLabel>
                            <TextField required 
                            id="name" 
                            value={name}
                            name = {name}
                            error = {!name}
                            onChange= {(event) => {setName(event.target.value)}}
                            label="name" 
                            variant="filled" />
                          
                          <FormControl>
                            <InputLabel htmlFor="surname"></InputLabel>
                            <TextField required 
                            value ={surname}
                            name = {surname}
                            error = {!surname}
                            onChange= {(event) => {setSurname(event.target.value)}}
                            id="surname" label="surname" variant="filled" />
                          </FormControl>
                          <FormControl>
                            <InputLabel htmlFor="email"></InputLabel>
                            <TextField  required
                            value={email}
                            name = {email}
                            onChange= {(event) => {setEmail(event.target.value)}} 
                            error = {!email.includes("@")}
                             id="email" label="email" variant="filled" />
                          </FormControl>
                            <Button type="submit" color="success" variant="outlined">SUBMIT</Button>
    
                        </Stack> 
                    </form>
                    
             </div>
        </div>
    )
  }