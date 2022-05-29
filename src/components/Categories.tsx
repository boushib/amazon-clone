import CategoryCard from './CategoryCard'
import { CATEGORIES } from '../constants'
import './Categories.sass'

const Categories = () => (
  <div className="container">
    <div className="categories">
      <div className="categories__grid">
        {CATEGORIES.map((c) => (
          <CategoryCard
            id={c.id}
            title={c.title}
            imageURL={c.imageURL}
            key={c.id}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Categories
