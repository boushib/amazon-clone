import SearchIcon from '../icons/Search'
import ShoppingCartIcon from '../icons/ShoppingCart'

import Logo from '../assets/images/logo.svg'

import './Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <img className="nav__brand" src={Logo} alt="" />
      <div className="nav__search">
        <input
          type="text"
          className="nav__search__input"
          placeholder="Search.."
        />
        <button className="nav__search__btn">
          <SearchIcon />
        </button>
      </div>
      <div className="nav__links">
        <div className="nav__link">
          <span className="nav__linkLineOne">Hello El</span>
          <span className="nav__linkLineTwo">Account &amp; Lists</span>
        </div>
        <div className="nav__link">
          <span className="nav__linkLineOne">Returns</span>
          <span className="nav__linkLineTwo">&amp; Orders</span>
        </div>
        <div className="nav__cart">
          <ShoppingCartIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
