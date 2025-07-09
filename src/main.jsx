import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Tích hợp Router & Cách tạo đường link dẫn đến trang khác
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/register",
    element: <div>Register page</div>
  },
  {
    path: "/login",
    element: <div>Login page</div>
  },
  {
    path: "/users",
    element: <div>Users page</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
