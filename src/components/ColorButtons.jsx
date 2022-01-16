import React from 'react';
import ColorButton from './ColorButton';
import ButtonGroup from "@material-ui/core/ButtonGroup"

const ColorButtons = () => {
    return (
        <ButtonGroup>
             <ColorButton />
             <ColorButton />
             <ColorButton />
             <ColorButton />
        </ButtonGroup>
    )
}

export default ColorButtons
