import Products from "./components/admin_dashboard/products"
import Users from "./components/admin_dashboard/users"
import CartPage from "./components/cartPage"
import Login from "./components/login"
import Navbar from "./components/navbar"
import ProductSection from "./components/productSection"
import Register from "./components/register"
import { useEffect } from "react"
import { products, users } from "./constants/products"
import './index.css'
import { BrowserRouter as Nav , Routes , Route } from "react-router-dom"
function App() {
  useEffect(()=> {
    if(!localStorage.getItem("allProducts")){
        localStorage.setItem("allProducts", JSON.stringify(products))
    }
    if(!localStorage.getItem("users")){
        localStorage.setItem("users", JSON.stringify(users))
    }
    }, [])

  return (
    <Nav>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
           
        
          <Route path="/admin" element={<Products /> } />
          <Route path="/users" element={<Users /> } />
        <Route path="*" element={<div className="pt-50">Page Not Found</div>} />
       
      </Routes>
    </Nav>
  )
}

export default App
