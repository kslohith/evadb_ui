import React from 'react'
import { TextField, Toolbar, Paper, Button, Box } from '@mui/material'
import CodeEditor from '@uiw/react-textarea-code-editor'

import SQLQuery from '../../apis/sqlquery'

const QueryEditor: React.FC<any> = ({ content, setContent, setResp }) => {
    const useSQLQuery = SQLQuery(setResp)

    return (
        <Paper elevation={10} sx={{ marginX: '10px', marginY: '30px' }}>
            <Toolbar sx={{ justifyContent: 'end', background: '#f56522' }}>
                <Button
                    variant="contained"
                    sx={{ background: '#615c5c' }}
                    onClick={() => {
                        useSQLQuery.mutate(content)
                    }}
                >
                    RUN
                </Button>
            </Toolbar>
            <Box
                onClick={(e) => {
                    document.getElementById('sqlEditor')?.focus()
                }}
                sx={{
                    height: '50vh',
                    background: '#F1EFEF',
                    overflowY: 'scroll',
                }}
            >
                <CodeEditor
                    id="sqlEditor"
                    value={content}
                    language="sql"
                    placeholder="Please enter EvaDB code."
                    onChange={(e) => setContent(e.target.value)}
                    padding={15}
                    style={{
                        fontSize: 15,
                        backgroundColor: '#F1EFEF',
                        fontFamily: 'Lucida Console, monospace',
                        color: 'black',
                    }}
                />
            </Box>
        </Paper>
    )
}

export default QueryEditor
