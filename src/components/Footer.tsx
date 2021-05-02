import './Footer.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__col__head">Get to know us</div>
            <ul className="footer__col__links">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li>
                <a href="#">Amazon Tours</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__col__head">Make Money with Us</div>
            <ul className="footer__col__links">
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__col__head">Amazon Payment Products</div>
            <ul className="footer__col__links">
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__col__head">Let Us Help You</div>
            <ul className="footer__col__links">
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates &amp; Policies</a>
              </li>
              <li>
                <a href="#">Returns &amp; Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Amazon Assistant Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer__copy">
          &copy; 1996-{currentYear}, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  )
}

export default Footer
