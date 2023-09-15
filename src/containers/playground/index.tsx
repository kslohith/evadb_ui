import React, { useState } from 'react'
import Box from '@mui/material/Box'

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
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            >
                <QueryEditor
                    content={content}
                    setContent={setContent}
                    setResp={setResp}
                />
                <QueryResponse resp={resp} />
            </Box>
            <RightSidebar />
        </Box>
    )
}

export default Playground
