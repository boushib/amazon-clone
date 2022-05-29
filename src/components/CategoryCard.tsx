import './CategoryCard.sass'

interface Props {
  id: string
  title: string
  imageURL: string
}

const CatgeoryCard = ({ title, imageURL }: Props) => (
  <div className="category-card">
    <h2 className="category-card__title">{title}</h2>
    <img
      src={imageURL}
      className="category-card__image"
      loading="lazy"
      alt=""
    />
    <button className="btn">Shop Now</button>
  </div>
)

export default CatgeoryCard
