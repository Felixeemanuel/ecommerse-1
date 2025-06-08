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
import { CartProvider } from './pages/useContext/cartContext.jsx'
import Cart from './pages/CartPage/cart.jsx';
import Checkout from './pages/CheckoutPage/Checkout.jsx';

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
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
    </CartProvider>
  </StrictMode>
)
