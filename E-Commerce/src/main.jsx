import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.jsx'
import Root from './Root.jsx'
import Home from './Pages/Home.jsx'
import Mens from './Pages/Mens.jsx'
import Womens from './Pages/Womens.jsx'
import Kids from './Pages/Kids.jsx'
import Login from './Pages/Login.jsx'
import Cart from './Pages/Cart.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"product/:id",
        element:<ProductDetails />  
      },
      {
        path: "mens",
        element: <Mens />,
      },
      {
        path: "womens",
        element: <Womens />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)

