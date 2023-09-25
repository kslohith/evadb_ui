import React from 'react'
import { Paper, Toolbar, Box } from '@mui/material'
import CodeEditor from '@uiw/react-textarea-code-editor'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import './index.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const capitalizeFirstLetter = (columnName: string) => {
    return columnName.charAt(0).toUpperCase() + columnName.slice(1);
  }

const QueryResponse = (data: any ) => {


    const queryResponse = data;

    const queryResponseJson = queryResponse.data ? JSON.parse(queryResponse.data): [];

    const allKeys: string[] = [];


    React.useEffect(() => {
        queryResponseJson?.forEach((obj: any) => {
            for (const key in obj) {
                if (!allKeys.includes(key)) {
                    allKeys.push(key);
                }
            }
        });
    },queryResponseJson);

    queryResponseJson?.forEach((obj: any) => {
        for (const key in obj) {
            if (!allKeys.includes(key)) {
                allKeys.push(key);
            }
        }
    });

    return (
        <Paper elevation={10} sx={{ marginX: '0vh', marginY: '0vh' }}>
            <Box
                sx={{
                    height: '50vh',
                    background: '#FFFFFF',
                    overflowY: 'scroll',
                }}
            >
                {queryResponseJson.length > 0 && <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <StyledTableRow>
                            {allKeys?.map((header, index) => (
                                <StyledTableCell key={index} align='center'>{capitalizeFirstLetter(header)}</StyledTableCell>
                            ))}
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {queryResponseJson.map((data: { [x: string]: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; },index: React.Key | null | undefined) => (
                            <StyledTableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            {allKeys?.map((header,colIndex) => (
                                <StyledTableCell align="right" key={colIndex}>{JSON.stringify(data[header])}</StyledTableCell>
                            ))}
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                }
                {queryResponseJson.length == 0 && <div className="no-data-message">
                    <div className="center-content">
                        <StorageOutlinedIcon />
                        <p>No Data to Display. Use the Playground to Query and Explore EVA-DB</p>
                    </div>
                </div>}
            </Box>
        </Paper>
    )
}

export default QueryResponse
