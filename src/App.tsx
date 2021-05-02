import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
