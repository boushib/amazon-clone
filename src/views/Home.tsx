import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Suggestions from '../components/Suggestions'
import {
  RELATED_TO_VIEWED,
  SUGGESTIONS_BASED_ON_BROWSING_HISTORY,
  SUGGESTIONS_BASED_ON_SHOPPING_TRENDS,
} from '../constants'
import './Home.sass'

const Home = () => (
  <div className="home page">
    <Hero />
    <Categories />
    <Suggestions
      title="Inspired by your browsing history"
      products={SUGGESTIONS_BASED_ON_BROWSING_HISTORY}
    />
    <Suggestions
      title="Inspired by your shopping trends"
      products={SUGGESTIONS_BASED_ON_SHOPPING_TRENDS}
    />
    <Suggestions
      title="Related to items you've viewed"
      products={RELATED_TO_VIEWED}
    />
    <Features />
  </div>
)

export default Home
