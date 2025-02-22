import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Products from './pages/Products/Products.jsx'
import AddNew from './pages/Products/AddNew.jsx'
import EditProduct from './pages/Products/EditProduct.jsx'
import Login from './pages/Login/Login.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} >
      <Route path='products' element={<Products/>}/>
      <Route path='add-new' element={<AddNew/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='edit' element={<EditProduct/>}/>
      
      </Route>
    </Routes>
  </BrowserRouter>,
)
