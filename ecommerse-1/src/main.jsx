import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Error404Page from './pages/Error404Page.jsx'
import {ProductsProvider} from './pages/useContext/context.jsx'
import Layout from './Layout.jsx'
import ProductDetails from './pages/ProductDetailsPage/ProductDetails.jsx';

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
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
)
