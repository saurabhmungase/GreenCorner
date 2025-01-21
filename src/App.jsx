import './App.css'
import AppContext from './context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouts'
import LandingPage from './components/pages/LandingPage'

function App() {

  return (
  
      <AppContext>
        <RouterProvider router={router}>
        <LandingPage/>
        </RouterProvider>
      </AppContext>
    
  )
}

export default App
