import React from 'react';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';

const DetailsButton = ({ to, type }) => (
    <Link  to={to}>
        <Button color="primary" variant='outlined'>
            { type === "details" ? "Details" : "Back"}
        </Button>
    </Link>
)

export default DetailsButton
