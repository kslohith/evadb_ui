import { QueryClient, QueryClientProvider } from 'react-query'
import {AppBar, Paper, Toolbar} from '@mui/material'

import './App.css'
import Playground from './containers/playground'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
          <AppBar position="sticky" sx={{zIndex: 100000}}>
            <Toolbar sx={{background: (theme) => theme.palette.primary.light}}>
              EvaDB 
            </Toolbar>
          </AppBar> 
          <Paper sx={{background: (theme) => theme.palette.secondary.light}}>
            <Playground />
          </Paper>
        </QueryClientProvider>
    )
}

export default App
