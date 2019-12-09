import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.css'


const button = (props) => {
    return(
        <div className='button' >
        <Button className='button' onClick = {props.click} variant="contained" color="primary">{props.name}</Button>
        </div>
      
    )
}

export default button;