import React,{useRef} from 'react'
import "./focus.css"
import { Button, FormControl, TextField, Typography,Radio, RadioGroup,FormControlLabel } from '@material-ui/core'
import AddCircle from '@material-ui/icons/AddCircle'
import { Box } from '@mui/material';
import CreateFocus from './CreateFocus/CreateFocus';
import BoxList from './BoxList/BoxList';
import FocusList from './FocusList/FocusList';
import { useState } from 'react';

export default function Focus() {
    const [AddElement, setAddElement] = useState(false)
    
    const showAddElement = ()=>{
        setAddElement(!AddElement)
    }

    return (
        <div className="container">

            <h1>Welcome to focus page</h1>
            <Button variant="contained" onClick={showAddElement} color={!AddElement?"primary":"secondary"}>
                {!AddElement?"Add New Item":"Close add element"} &nbsp;<AddCircle />
            </Button>
            <div className="focusItems">
                <FocusList />
            </div>
            {AddElement?<div>
                <CreateFocus />    
                

            </div>:<div></div>}
            
        </div>
    )
}
