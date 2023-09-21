import React from 'react'
import { TextField, Toolbar, Paper, Button, Box } from '@mui/material'
import CodeEditor from '@uiw/react-textarea-code-editor'
import MonacoEditor, {monaco} from 'react-monaco-editor';

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
  }; 


const QueryEditor: React.FC<any> = ({ content, setContent, setResp }) => {
    const useSQLQuery = SQLQuery(setResp)



    return (
        <Paper elevation={10} sx={{ marginX: '2vh', marginY: '4vh' }}>
            <Toolbar sx={{ justifyContent: 'end', background: '#FFFFFF', borderBottom: 3, borderColor: (theme) => theme.palette.secondary.main }}>
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
            {/* <Box
                onClick={(e) => {
                    document.getElementById('sqlEditor')?.focus()
                }}
                sx={{
                    height: '50vh',
                    background: '#FFFFFF',
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
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Lucida Console, monospace',
                        color: 'black',
                    }}
                />
            </Box> */}
        <MonacoEditor
        height="50vh"
        // language="mysql"
        options={options}
      />
        </Paper>
    )
}

export default QueryEditor
