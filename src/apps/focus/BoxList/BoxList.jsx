import React from 'react'
import "./BoxList.css"
import { Box,container, } from '@mui/system'
import { Typography, Fade } from '@material-ui/core'

export default function BoxList({title="Some Job",details="Details goes here",level="high",type="study"}) {
    var cardStyle ={
        background:""
    }
    if(level=="high"){
        cardStyle.background = "orangered";
    }
    if(level=="moderate"){
        cardStyle.background = "orange";
    }
    if(level=="low"){
        cardStyle.background = "white";
    }
        
    return (
        <Fade in>
            <div className="ListBox" style={cardStyle}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="p">{details}</Typography>
                <Typography variant="p">{level}</Typography>
                
            </div>
        </Fade>
    )
}
