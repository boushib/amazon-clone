import Hero from '../components/Hero'
import Categories from '../components/Categories'

import './Home.scss'

const Home: React.FC = () => (
  <div className="home page">
    <Hero />
    <Categories />
  </div>
)

export default Home
