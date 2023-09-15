import React from 'react'
import { TextField } from '@mui/material'

const QueryResponse: React.FC<any> = (props: any) => {
    return (
        <TextField
            id="filled-multiline-static"
            multiline
            rows={15}
            variant="filled"
            sx={{ flexGrow: 1, marginX: '10px', marginY: '30px' }}
            value={props.resp}
        />
    )
}

export default QueryResponse
