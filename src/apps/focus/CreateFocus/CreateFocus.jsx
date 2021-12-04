import React from 'react'
import "./CreateFocus.css"
import { useState } from 'react';
import { Button, FormControl,Box, TextField, Typography,Radio, RadioGroup,FormControlLabel } from '@material-ui/core'

export default function CreateFocus() {
    const [actionType, setActionType] = React.useState('Study');
    const [ButtonText, setButtonText] = useState("Add the job")

 
    const [Title, setTitle] = useState("");
    const [Details, setDetails] = useState("");
    const [Type, setType] = useState("");
    const [Level, setLevel] = useState("");

    // strikes on click of form button and creates a post request
    const getFormData = ()=>{
        console.log(Title+" "+Details+" "+Type+" "+Level);
        //  learn about cors
        var sendData = {
            "title" : Title,
            "details":Details,
            "level":Level,
            "types":Type.length>0?Type:actionType[0].value
        }
        setButtonText("Wait Adding the Job");

        fetch("http://localhost:3000/a/focus/create/",{
            method : 'POST',
            headers: { "content-type": "application/json" },
            body:JSON.stringify(sendData)
        }).then(response => response.json()).then((res)=>{setButtonText("Add other job")})
      .catch((err)=>console.log(err));

    }
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


    // const handleChange = (event) => {
    //     setActionType(event.target.value);
    // };


    return (
        <div className="createFocus">
            <Box component="form" sx={{ width: 300, display: 'flex', flexWrap: 'wrap', backgroundColor: "rgba(222,222,222,.8)", padding: "20px 20px", borderRadius: 2 }} noValidate
                autoComplete="off" >
                <Typography onChange={(e) => console.log(e.target.value)} value={Title} variant="h4" style={{ color: "rgba(22,22,22,.8)" }}>
                    Add your work
                </Typography>
                <br />
                <FormControl>
                    <TextField label="Job Name" variant="outlined" style={{ width: "250px" }} onChange={(e) => { setTitle(e.target.value) }} />
                    <br />
                    <TextField variant="outlined" label="Extra Details" onChange={(e) => { setDetails(e.target.value) }} />
                    <br />
                    <select className="selectAction" onChange={(e) => { setType(e.target.value) }} >
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
                        onChange={(e) => { setLevel(e.target.value) }}
                    >
                        <Typography variant="h6">How much you want to priotize this job?</Typography>
                        <FormControlLabel value="high" control={<Radio size="small" color="secondary" />} label="High" />
                        <FormControlLabel value="moderate" control={<Radio size="small" color="primary" />} label="Moderate" />
                        <FormControlLabel value="low" control={<Radio size="small" color="default" />} label="Low" />
                    </RadioGroup>
                    <div className="submitBtn">
                        <Button onClick={getFormData} variant="contained" color="primary" className="submitBtn">{ButtonText}</Button>

                    </div>

                </FormControl>


            </Box>
        </div>
    )
}
