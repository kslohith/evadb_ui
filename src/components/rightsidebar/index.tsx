import React, { useEffect, useState } from 'react'

import Drawer from '@mui/material/Drawer'

import UdFQuery from '../../apis/udf'

const RightSidebar: React.FC = () => {
    const [udfs, setUDFs] = useState([])

    const useUDFqQuery = UdFQuery((resp: any) => {
        setUDFs(resp)
    })

    useEffect(() => {
        if (useUDFqQuery && udfs.length == 0) {
            useUDFqQuery.mutate()
        }
    }, [])

    return (
        <Drawer
            sx={{
                width: '20%',
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    backgroundColor: (theme) => theme.palette.secondary.light,
                    borderLeft: 3,
                    borderColor: (theme) => theme.palette.secondary.main,
                    position: 'relative',
                },
            }}
            variant="permanent"
            anchor="right"
        ></Drawer>
    )
}

export default RightSidebar
