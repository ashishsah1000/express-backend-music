import React from "react";
import "./nav.css"
import Timeline from '@material-ui/icons/Timeline';
import ExploreIcon from '@material-ui/icons/Explore';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import AddCircle from '@material-ui/icons/AddCircle';
import { Link } from "react-router-dom";


const Nav = ({dashboard,getStarted,analysis,addNew,pro}) => {
    return (
        <div className="sideNav">
            <div className="itemsContainer">
                <div className="items">
                    <ExploreIcon fontSize="small"  style={{color:"rgb(59, 58, 58,0.6)"}} /> <Link to="/home" > 
                    
                     {dashboard}</Link>
                </div>
                <div className="items">
                    <DoubleArrow fontSize="small" style={{color:"rgb(59, 58, 58,0.6)"}} /> <Link to="/" >  {getStarted}</Link>
                </div>
                <div className="items">
                    <Timeline fontSize="small" style={{color:"rgb(59, 58, 58,0.6)"}}   /> <Link to="/"> {analysis}</Link> 
                </div>
                <div className="items">
                    <AddCircle fontSize="small" style={{color:"rgb(59, 58, 58,0.6)"}}   /> <Link to="/">{addNew}</Link>  
                </div>
                <div className="items">
                    <MonetizationOn fontSize="small" style={{color:"rgb(59, 58, 58,0.6)"}}   /> <Link to="/">{pro}</Link> 
                </div>

            </div>

        </div>
    )
}

export default Nav;