import React from 'react'
import { Toolbar, Paper, Button } from '@mui/material'
import MonacoEditor, { monaco } from 'react-monaco-editor'

import SQLQuery from '../../apis/sqlquery'

const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
        enabled: true,
    },
    scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
    renderLineHighlight: 'none',
}

const QueryEditor: React.FC<any> = ({ content, setContent, setResp }) => {
    const useSQLQuery = SQLQuery(setResp)

    return (
        <Paper elevation={10} sx={{ marginX: '2vh', marginY: '4vh' }}>
            <Toolbar
                sx={{
                    justifyContent: 'end',
                    background: '#FFFFFF',
                    borderBottom: 3,
                    borderColor: (theme) => theme.palette.secondary.main,
                }}
            >
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
            <MonacoEditor
                height="50vh"
                language="sql"
                options={options}
                value={content}
                onChange={(newValue, event) => setContent(newValue)}
            />
        </Paper>
    )
}

export default QueryEditor
