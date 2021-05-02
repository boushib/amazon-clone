import CategoryCard from './CategoryCard'
import './Categories.scss'

const categories = [
  {
    id: 'bdc84f6d-187f-4d48-b8c0-1a83a1b2b10c',
    title: 'Computers & Accessories',
    imageURL:
      'https://images.unsplash.com/photo-1455875836392-d7b9747e584c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: 'e85ca1bf-55b9-44ed-9405-d8a35fd9d387',
    title: 'Arts & Crafts',
    imageURL:
      'https://images.unsplash.com/photo-1483137646075-6f011a268012?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80',
  },
  {
    id: '9e220ba3-89ce-4b0a-a06e-93fb404bc675',
    title: 'Smart Home',
    imageURL:
      'https://images.unsplash.com/photo-1562851529-c370841f6536?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: '8b96cb94-c606-4c73-9d2c-4565a36ce7d3',
    title: "Men's Fashion",
    imageURL:
      'https://images.unsplash.com/photo-1520975867597-0af37a22e31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  },
]

const Categories: React.FC = () => (
  <div className="categories">
    {categories.map((c) => (
      <CategoryCard id={c.id} title={c.title} imageURL={c.imageURL} />
    ))}
  </div>
)

export default Categories
