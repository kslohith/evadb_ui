import React, { useState } from 'react'
import { Box } from '@mui/material'

import LeftSidebar from '../../components/leftsidebar'
import RightSidebar from '../../components/rightsidebar'
import QueryEditor from '../../components/queryeditor'
import QueryResponse from '../../components/queryresponse'

const Playground: React.FC = () => {
    const [content, setContent] = useState<string>('')
    const [resp, setResp] = useState<string>('')

    return (
        <Box sx={{ display: 'flex' }}>
            <LeftSidebar />
            <Box
                component="main" sx={{ flexGrow: 1, p: 3 }}
            >
                <QueryEditor
                    content={content}
                    setContent={setContent}
                    setResp={setResp}
                    style={{ margin: '8px'}}
                />
                <QueryResponse data={resp} />
            </Box>
            {/* <RightSidebar /> */}
        </Box>
    )
}

export default Playground
