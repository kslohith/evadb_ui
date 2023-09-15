import React from 'react'

import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'

const LeftSidebar: React.FC = () => {
    return (
        <Drawer
            sx={{
                width: '10%',
                '& .MuiDrawer-paper': {
                    width: '10%',
                    boxSizing: 'border-box',
                    backgroundColor: '#f56522',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {['Home', 'Playground', 'Create UDF'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default LeftSidebar
