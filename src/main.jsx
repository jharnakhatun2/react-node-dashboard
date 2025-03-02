import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Products from './pages/Products/Products.jsx'
import AddNew from './pages/Products/AddNew.jsx'
import EditProduct from './pages/Products/EditProduct.jsx'
import AuthProvider from './components/Context/AuthProvider.jsx'
import Layout from './components/Layout/Layout.jsx'
import Admin from './authentication/Admin/Admin.jsx'
import Register from './authentication/Register/Register.jsx'
import Login from './authentication/Login/Login.jsx'
import AuthLayout from './components/AuthLayout/AuthLayout.jsx'
import PrivateRoute from './authentication/PrivateRoute/PrivateRoute.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Users from './pages/Users/Users.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthLayout />} >
          <Route index element={<Admin />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute><Layout /></PrivateRoute>} >
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='add-new' element={<AddNew />} />
          <Route path='update/:id' element={<EditProduct />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,

)
