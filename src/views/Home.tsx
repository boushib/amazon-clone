import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import './Home.scss'

const Home: React.FC = () => (
  <div className="home page">
    <Hero />
    <Categories />
    <Features />
  </div>
)

export default Home
