import { Link } from 'react-router-dom'
import './Cart.sass'

const Cart = () => (
  <div className="cart page">
    <div className="container">
      <div className="cart__products">
        <h1>Shopping Cart</h1>
        <hr />
        {/* <p>Your amazon cart is empty!</p> */}
        <div className="cart__product">
          <img
            className="cart__product__image"
            src="https://images-na.ssl-images-amazon.com/images/I/71DnJGlQO2L._AC_UL405_SR405,405_.jpg"
            alt=""
          />
          <div className="cart__product__details">
            <div className="cart__product__title">
              Huion Inspiroy H1060P Graphics Drawing Tablet with Tilt Response
              Battery-Free Stylus and 8192 Pen Pressure Sensitivity
            </div>
            <div className="stock__status">In stock</div>
            <div className="cart__product__footer">
              <div className="quantity">Quantity: 1</div>
              <div className="cart__links">
                <div className="link">Delete</div>
                <div className="link">Save for later</div>
                <div className="link">Compare with similar items</div>
              </div>
            </div>
          </div>
          <div className="price">$66.99</div>
        </div>
      </div>
      <div className="cart__subtotal">
        <div className="amount">
          Subtotal (1 item): <strong>$66.99</strong>
        </div>
        <Link to="/checkout">
          <button className="btn">Proceed to checkout</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Cart
