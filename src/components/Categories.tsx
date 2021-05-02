import CategoryCard from './CategoryCard'
import { CATEGORIES } from '../constants'
import './Categories.scss'

const Categories: React.FC = () => (
  <div className="categories">
    {CATEGORIES.map((c) => (
      <CategoryCard
        id={c.id}
        title={c.title}
        imageURL={c.imageURL}
        key={c.id}
      />
    ))}
  </div>
)

export default Categories
