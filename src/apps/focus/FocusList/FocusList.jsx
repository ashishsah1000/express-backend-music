import React from 'react'
import "./FocusList.css"
import BoxList from '../BoxList/BoxList'
import { useState } from 'react';

export default function FocusList() {
    const [Data, setData] = useState([]);
    return (
        <div className="focusList">
            {Data.length>0?"Data":<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            
        </div>
    )
}
