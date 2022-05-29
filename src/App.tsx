import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Cart from './views/Cart'
import OrderHistory from './views/OrderHistory'
import Checkout from './views/Checkout'
import Category from './views/Category'

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categories/:id" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </div>
)

export default App
