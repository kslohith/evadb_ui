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
import { border } from '@mui/system'

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
                    boxSizing: 'border-box',
                    backgroundColor: (theme) => theme.palette.secondary.light,
                    borderLeft: 3,
                    borderColor: (theme) => theme.palette.secondary.main,
                    position:'relative'
                },
            }}
            variant="permanent"
            anchor="right"
        >
        </Drawer>
    )
}

export default RightSidebar
