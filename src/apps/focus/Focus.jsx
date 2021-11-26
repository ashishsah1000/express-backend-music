import React from 'react'
import "./focus.css"
import { Button, FormControl, TextField, Typography, MenuItem } from '@material-ui/core'
import AddCircle from '@material-ui/icons/AddCircle'
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
import { purple } from '@mui/material/colors';

export default function Focus() {
    const [actionType, setActionType] = React.useState('Study');
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

    return (
        <div className="container">

            <h1>Welcome to focus page</h1>
            <Button variant="contained" color="primary">
                Add New Item &nbsp;<AddCircle />
            </Button>
            <div>
                <Box sx={{ width: 300, display: 'flex', flexWrap: 'wrap', backgroundColor: "rgba(222,222,222,.8)", padding: "20px 20px", borderRadius: 2 }}>
                    <Typography variant="h4" style={{ color: "rgba(22,22,22,.8)" }}>
                        Add your work
                    </Typography>
                    <br />
                    <FormControl>
                        <TextField label="Job Name" variant="outlined" style={{ width: "250px" }} />
                        <br />
                        <TextField variant="outlined" label="Extra Details" />
                        <br />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={actionType}
                            onChange={handleChange}
                            helperText="Please select your Activity Type"
                            >
                            {actionTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>

                        <Button variant="contained" color="primary">Add the job</Button>
                    </FormControl>


                </Box>

            </div>
        </div>
    )
}
