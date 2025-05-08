import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Error404Page from './pages/Error404Page.jsx'
import {ProductsProvider} from './pages/useContext/context.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about", 
        element: <AboutPage />
      }
    ]
  },
  {
    path: '/about',
    element: <AboutPage />,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
)
