import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/Dashboard'
import CityPage from './pages/CityPage'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  const queryClient = new QueryClient;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme='dark'>
          <Layout>
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/city/:cityName' element={<CityPage />}></Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default App
