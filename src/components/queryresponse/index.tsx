import React from 'react'
import { TextField, Paper, Toolbar, Box } from '@mui/material'
import CodeEditor from '@uiw/react-textarea-code-editor'


const QueryResponse: React.FC<any> = (props: any) => {
    return (
        // <TextField
        //     id="filled-multiline-static"
        //     multiline
        //     rows={15}
        //     variant="filled"
        //     sx={{ flexGrow: 1, marginX: '10px', marginY: '30px' }}
        //     value={props.resp}
        // />
        <Paper elevation={10} sx={{ marginX: '2vh', marginY: '1vh' }}>
            <Toolbar sx={{ justifyContent: 'end', background: '#FFFFFF', borderBottom: 3, borderColor: (theme) => theme.palette.secondary.main }}/>
            <Box
                sx={{
                    height: '25vh',
                    background: '#FFFFFF',
                    overflowY: 'scroll',
                }}
            >
                <CodeEditor
                    id="sqlEditor"
                    value={props.resp}
                    language="json"
                    placeholder="Response..."
                    padding={15}
                    style={{
                        fontSize: 15,
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Lucida Console, monospace',
                        color: 'black',
                    }}
                />
            </Box>
        </Paper>
    )
}

export default QueryResponse
