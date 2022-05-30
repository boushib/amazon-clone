import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { CART_ITEMS } from '../constants'
import './Cart.sass'

const Cart = () => {
  const itemCount = CART_ITEMS.reduce((a, b) => a + b.quantity, 0)
  const total = CART_ITEMS.reduce((a, b) => a + b.quantity * b.price, 0)
  return (
    <div className="cart page">
      <div className="container">
        <div className="cart__products">
          <h1>Shopping Cart</h1>
          <hr />
          {/* <p>Your amazon cart is empty!</p> */}
          <div className="cart__items">
            {CART_ITEMS.map((item) => (
              <CartItem {...item} />
            ))}
          </div>
        </div>
        <div className="cart__subtotal">
          <div className="amount">
            Subtotal ({itemCount} items): <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <button className="btn">Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
