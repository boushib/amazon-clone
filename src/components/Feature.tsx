import LanguageIcon from '../icons/Language'
import CurrencyIcon from '../icons/Currency'
import SecureIcon from '../icons/Secure'
import SavingIcon from '../icons/SavingIcon'
import LocationIcon from '../icons/Location'
import SupportIcon from '../icons/Support'
import './Feature.sass'

const getIcon = (icon: string) => {
  switch (icon) {
    case 'LANGUAGE':
      return <LanguageIcon />
    case 'CURRENCY':
      return <CurrencyIcon />
    case 'SECURE':
      return <SecureIcon />
    case 'SAVING':
      return <SavingIcon />
    case 'LOCATION':
      return <LocationIcon />
    case 'SUPPORT':
      return <SupportIcon />
    default:
      throw new Error('Icon not supported'!)
  }
}

interface Props {
  title: string
  icon: string
}

const Feature = ({ title, icon }: Props) => (
  <div className="feature">
    <div className="feature__image">{getIcon(icon)}</div>
    <div className="feature__title">{title}</div>
  </div>
)

export default Feature
