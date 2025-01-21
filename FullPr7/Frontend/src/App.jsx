import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTER from './router/router'

function App() {

  const routes=createBrowserRouter(ROUTER) 

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
