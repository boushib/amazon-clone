import './Feature.sass'

interface Props {
  title: string
  imageURL: string
}

const Feature = ({ title, imageURL }: Props) => (
  <div className="feature">
    <div className="feature__image">
      <img src={imageURL} alt="" />
    </div>
    <div className="feature__title">{title}</div>
  </div>
)

export default Feature
