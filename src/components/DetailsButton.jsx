import React from 'react';
import { Link } from "react-router-dom"


const DetailsButton = ({ to, type }) => (
    
    <Link to={to}>
       <button className='uppercase bg-purple-300 px-5 rounded-2xl font-semibold'>
            { type === "details" ? "Details" : "Back"}
        </button>
    </Link>
)

export default DetailsButton
