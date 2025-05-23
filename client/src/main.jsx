import { StrictMode } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Home from './Pages/Home.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ChakraProvider>
    <RouterProvider router={router}/>
      </ChakraProvider>
  </StrictMode>


)
