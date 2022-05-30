import './CategoryCard.sass'

interface Props {
  id: string
  title: string
  imageURL: string
}

const CatgeoryCard = ({ title, imageURL }: Props) => (
  <div
    className="category-card"
    style={{ backgroundImage: `url("${imageURL}")` }}
  >
    <h2 className="category-card__title">{title}</h2>
  </div>
)

export default CatgeoryCard
