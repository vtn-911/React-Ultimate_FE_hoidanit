import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import ProductsPage from './pages/products.jsx';
import "./style/global.css"
// Tích hợp Router & Cách tạo đường link dẫn đến trang khác
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [ //Ràng buộc mối quan hệ cha con ( những component thằng con sẽ kế thừa layout của th cha)
        {
          path: "/users",
          element: <UsersPage/>
        },
        {
          path: "/products",
          element: <ProductsPage/>
        }
    ]
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
