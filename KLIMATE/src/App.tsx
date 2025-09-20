import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/Dashboard'
import CityPage from './pages/CityPage'

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard /> }></Route>
        <Route path='/city/:cityName' element={<CityPage />}></Route>
      </Routes>
    </Layout>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
