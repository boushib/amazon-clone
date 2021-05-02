import Feature from './Feature'
import { FEATURES } from '../constants'

import './Features.scss'

const Features: React.FC = () => (
  <div className="features">
    <h2>Discover Amazon</h2>
    <div className="features__grid">
      {FEATURES.map((f) => (
        <Feature title={f.title} imageURL={f.imageURL} key={f.id} />
      ))}
    </div>
  </div>
)

export default Features
