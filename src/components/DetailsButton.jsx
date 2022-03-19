import React from 'react';
import { Link } from "react-router-dom"


const DetailsButton = ({ to, type }) => (
    <Link  to={to}>
       { <button >
            { type === "details" ? "Details" : "Back"}
        </button>}
    </Link>
)

export default DetailsButton
