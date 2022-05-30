interface Props {
  image: string
  title: string
  inStock?: boolean
  quantity: number
  price: number
}

const CartItem = ({ image, title, inStock, quantity, price }: Props) => (
  <div className="cart__product">
    <img className="cart__product__image" src={image} alt="" />
    <div className="cart__product__details">
      <div className="cart__product__title">{title}</div>
      <div className="stock__status">{inStock ? 'In stock' : 'Sold Out'}</div>
      <div className="cart__product__footer">
        <div className="quantity">Quantity: {quantity}</div>
        <div className="cart__links">
          <div className="link">Delete</div>
          <div className="link">Save for later</div>
          <div className="link">Compare with similar items</div>
        </div>
      </div>
    </div>
    <div className="price">${price.toFixed(2)}</div>
  </div>
)

export default CartItem
