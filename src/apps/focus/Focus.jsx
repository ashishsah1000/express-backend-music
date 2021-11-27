import React from 'react'
import "./focus.css"
import { Button, FormControl, TextField, Typography,Radio, RadioGroup,FormControlLabel } from '@material-ui/core'
import AddCircle from '@material-ui/icons/AddCircle'
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
import { purple } from '@mui/material/colors';
import { typography } from '@mui/system';
import { useState } from 'react';

export default function Focus() {
    const [actionType, setActionType] = React.useState('Study');
    const [AddElement, setAddElement] = useState(false)
    const actionTypes = [
        {
            value: "Study",
            lable: "Study"
        },
        {
            value: "Exercise",
            lable: "Exercise"
        },
        {
            value: "Hobbies",
            lable: "Hobbies"
        },
        {
            value: "Others",
            lable: "Others"
        }
    ];


    const handleChange = (event) => {
        setActionType(event.target.value);
    };
    const showAddElement = ()=>{
        setAddElement(!AddElement)
    }

    return (
        <div className="container">

            <h1>Welcome to focus page</h1>
            <Button variant="contained" onClick={showAddElement} color={!AddElement?"primary":"secondary"}>
                {!AddElement?"Add New Item":"Close add element"} &nbsp;<AddCircle />
            </Button>
            {AddElement?<div className="addElement">
                <Box component="form" sx={{ width: 300, display: 'flex', flexWrap: 'wrap', backgroundColor: "rgba(222,222,222,.8)", padding: "20px 20px", borderRadius: 2 }} noValidate
                    autoComplete="off" >
                    <Typography variant="h4" style={{ color: "rgba(22,22,22,.8)" }}>
                        Add your work
                    </Typography>
                    <br />
                    <FormControl>
                        <TextField label="Job Name" variant="outlined" style={{ width: "250px" }} />
                        <br />
                        <TextField variant="outlined" label="Extra Details" />
                        <br />
                        <select className="selectAction">
                            {actionTypes.map((x) => {
                                return (
                                    <option value={x.value}>{x.lable}</option>
                                )
                            })}
                        </select>
                        <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <Typography variant="p">How much you want to priotize this job?</Typography>
                            <FormControlLabel value="high" control={<Radio size="small" color="secondary" />} label="High" />
                            <FormControlLabel value="moderate" control={<Radio size="small" color="primary"  />} label="Moderate" />
                            <FormControlLabel value="low" control={<Radio size="small" color="success"  />} label="Low" />
                        </RadioGroup>
                        <div className="submitBtn">
                            <Button variant="contained" color="primary" className="submitBtn">Add the job</Button>

                        </div>

                    </FormControl>


                </Box>

            </div>:<div></div>}
            
        </div>
    )
}
