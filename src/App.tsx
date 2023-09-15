import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'
import Playground from './containers/playground'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Playground />
        </QueryClientProvider>
    )
}

export default App
