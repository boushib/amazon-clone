import './Suggestions.scss'

type Props = { title: string; products: { id: string; imageURL: string }[] }

const Suggestions: React.FC<Props> = ({ title, products }) => (
  <div className="container">
    <div className="suggestions">
      <h2>{title}</h2>
      <div className="suggestions__grid">
        {products.map((p) => (
          <img className="product__image" src={p.imageURL} key={p.id} />
        ))}
      </div>
    </div>
  </div>
)

export default Suggestions
