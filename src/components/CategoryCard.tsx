import './CategoryCard.sass'

interface Props {
  id: string
  title: string
  imageURL: string
}

const CatgeoryCard = ({ title, imageURL }: Props) => (
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
