import './CategoryCard.scss'

type Props = { id: string; title: string; imageURL: string }

const CatgeoryCard: React.FC<Props> = ({ title, imageURL }) => (
  <div className="category-card">
    <h2>{title}</h2>
    <div
      className="category-card__image"
      style={{ backgroundImage: `url('${imageURL}')` }}
    ></div>
    <button className="btn">Shop Now</button>
  </div>
)

export default CatgeoryCard
