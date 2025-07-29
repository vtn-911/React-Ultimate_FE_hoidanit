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
import BookPage from './pages/book.jsx';
import "./style/global.css"
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
// Tích hợp Router & Cách tạo đường link dẫn đến trang khác
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [ //Ràng buộc mối quan hệ cha con ( những component thằng con sẽ kế thừa layout của th cha)
        {
          index: true,
          element: <TodoApp/>
        },
        {
          path: "/users",
          element: <UsersPage/>
        },
        {
          path: "/book",
          element: <BookPage/>
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
