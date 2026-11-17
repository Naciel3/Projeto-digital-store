import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ id, name, category, price, priceDiscount, image, discount }) {
  return (
    <Link to={`/produtos/${id}`} className="product-card">
      <div className="product-image">
        <span className="product-discount">{discount}% OFF</span>
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3>{name}</h3>

        <div className="product-prices">
          <span className="old-price">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <strong className="new-price">
            R$ {priceDiscount.toFixed(2).replace('.', ',')}
          </strong>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;





