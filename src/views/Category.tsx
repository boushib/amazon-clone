import ProductCard from '../components/ProductCard'
import './Category.sass'

const PRODUCTS = [
  {
    id: '88a9fa2e-51d3-4c54-a614-c682b29433a2',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61DJRLNgyWL._AC._SR360,460.jpg',
  },
  {
    id: '4ad5d8de-9bcd-451e-9457-7c2bd42feb4d',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61tJT3NMY8L._AC._SR360,460.jpg',
  },
]

const Category = () => (
  <div className="category page">
    <div className="container">
      <h1>Category Page</h1>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <ProductCard id={p.id} image={p.image} />
        ))}
      </div>
    </div>
  </div>
)

export default Category
