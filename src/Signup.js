import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Signup() {
    return (
        <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <Button variant="outlined">Submit</Button>
        </div>
    )
}