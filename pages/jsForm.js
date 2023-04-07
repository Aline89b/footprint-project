import * as React from 'react';
import { useState } from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Navbar from "../components/navbar"
import { useHandleSubmit } from '../hooks/useHandleSubmit';
import { useInput } from '../hooks/useInput';


export default function JsForm() {

  const name = useInput("")
  const surname = useInput("")
  const email = useInput("")

  const {handleSubmit}= useHandleSubmit()

  
    return (
      
      
        <div className='flex flex-wrap justify-center'>
            <Navbar />
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
                          
                            <InputLabel  htmlFor="name"></InputLabel>
                            <TextField required 
                            id="name" 
                            {...name}
                                                                                   
                            error = {!name}
                            
                            label="name" 
                            variant="filled" />
                          
                          <FormControl>
                            <InputLabel htmlFor="surname"></InputLabel>
                            <TextField required 
                            {...surname}
                            
                            error = {!surname}
                            
                            id="surname" label="surname" variant="filled" />
                          </FormControl>
                          <FormControl>
                            <InputLabel htmlFor="email"></InputLabel>
                            <TextField  required
                              {...email}
                            
                            
                            error = {!email.value.includes("@")}
                             id="email" label="email" variant="filled" />
                          </FormControl>
                            <Button type="submit" color="success" variant="outlined">SUBMIT</Button>
    
                        </Stack> 
                    </form>
                    
             </div>
        </div>
    )
  }