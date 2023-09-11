import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Success from './components/Success.tsx'
import Failed from './components/Failed.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/failed",
    element: <Failed />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  </React.StrictMode>,
)
