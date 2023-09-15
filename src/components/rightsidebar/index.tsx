import React, { useEffect, useState } from 'react'

import {
    InputAdornment,
    TextField,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
} from '@mui/material'
import Drawer from '@mui/material/Drawer'
import SearchIcon from '@mui/icons-material/Search'

import UdFQuery from '../../apis/udf'

const RightSidebar: React.FC = () => {
    const [udfs, setUDFs] = useState([])
    const [searchText, setSearchText] = useState('')

    const useUDFqQuery = UdFQuery((resp: any) => {
        setUDFs(resp)
    })

    useEffect(() => {
        if (useUDFqQuery && udfs.length == 0) {
            useUDFqQuery.mutate()
        }
    }, [])

    useEffect(() => {
        console.log(udfs)
    }, [udfs])

    return (
        <Drawer
            sx={{
                width: '20%',
                '& .MuiDrawer-paper': {
                    width: '20%',
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="right"
        >
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchText}
                sx={{ width: '80%', marginX: 'auto', marginY: '5px' }}
                size="small"
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                InputProps={{
                    sx: { borderRadius: 2 },
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Divider />
                {udfs
                    .filter(
                        (udf: any) =>
                            udf &&
                            udf.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                    )
                    .map((udf: any) => (
                        <>
                            <ListItem key={udf.name}>
                                <ListItemButton>
                                    <ListItemText
                                        id={udf.name}
                                        primary={`${udf.name}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </>
                    ))}
            </List>
        </Drawer>
    )
}

export default RightSidebar
