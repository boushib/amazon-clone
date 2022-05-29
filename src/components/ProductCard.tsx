import './ProductCard.sass'

interface Props {
  id: string
  image: string
}

const ProductCard = ({ id, image }: Props) => (
  <div className="product-card">
    <div
      className="product-card__image"
      style={{ backgroundImage: `url('${image}')` }}
    ></div>
    <div className="product-card__details">
      <div className="price">From $29.98</div>
      <div className="name">
        Security Camera Outdoor, Wireless Rechargeable Battery Powered 1080P
        WiFi Home Surveillance Camera with Waterproof, Night Vision, Motion
        Detection, 2-Way Audio and SD Storage
      </div>
      <div className="rating">98</div>
    </div>
  </div>
)

export default ProductCard
