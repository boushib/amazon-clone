import { Link } from 'react-router-dom'
import SearchIcon from '../icons/Search'
import ShoppingCartIcon from '../icons/ShoppingCart'

import Logo from '../assets/images/logo_white.svg'

import './Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__brand" src={Logo} alt="" />
      </Link>
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
          <Link to="/login">
            <span className="nav__linkLineOne">Hello, Sign In</span>
            <span className="nav__linkLineTwo">Account &amp; Lists</span>
          </Link>
        </div>
        <div className="nav__link">
          <Link to="/order-history">
            <span className="nav__linkLineOne">Returns</span>
            <span className="nav__linkLineTwo">&amp; Orders</span>
          </Link>
        </div>
        <Link to="/cart">
          <div className="nav__cart">
            <div className="nav__cart__count">1</div>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
