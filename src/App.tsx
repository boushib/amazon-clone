import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Cart from './views/Cart'
import OrderHistory from './views/OrderHistory'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/order-history" exact component={OrderHistory} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
