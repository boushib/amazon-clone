import LanguageIcon from '../assets/images/language.svg'
import './Feature.scss'

type Props = { title: string; imageURL: string }

const Feature: React.FC<Props> = ({ title, imageURL }) => (
  <div className="feature">
    <div className="feature__image">
      <img src={imageURL} alt="" />
    </div>
    <div className="feature__title">{title}</div>
  </div>
)

export default Feature
