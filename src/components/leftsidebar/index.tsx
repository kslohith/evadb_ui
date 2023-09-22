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
                    boxSizing: 'border-box',
                    backgroundColor: (theme) => theme.palette.primary.light, //'#f56522',
                    position: 'relative',
                    color: '#FFFFFF',
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
