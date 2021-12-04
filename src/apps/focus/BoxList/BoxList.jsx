import React from 'react'
import "./BoxList.css"
import { Box,container } from '@mui/system'
import { Typography } from '@material-ui/core'

export default function BoxList({title="Some Job",details="Details goes here",level="high",type="study"}) {
    return (
        <div className="ListBox">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="p">{details}</Typography>
            <Typography variant="p">{level}</Typography>
            
        </div>
    )
}
