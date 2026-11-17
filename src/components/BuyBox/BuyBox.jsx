import { formatPrice } from '../../utils/formatPrice.js';
import './buyBox.css';


function BuyBox({name, reference, stars, rating, price, priceDiscount, description, children}) {
 return (
  <div className="buy-box">
    <div>
      <h1>{name}</h1>
      <span className="buy-box-ref">{reference}</span>
    </div>

    <div className="buy-box-rating">
      <span className="buy-box-stars">{stars}★</span>
      <span className="buy-box-count">({rating} avaliações)</span>
    </div>

    <div className="buy-box-price">
      {priceDiscount ? (
        <>
          <span className="buy-box-old">{formatPrice(price)}</span>
          <strong>{formatPrice(priceDiscount)}</strong>
        </>
      ) : (
        <strong>{formatPrice(price)}</strong>
      )}
    </div>

    <div className="buy-box-description">
      <h2>Descrição do produto</h2>
      <p>{description}</p>
    </div>

    {children}

    <button className="buy-box-button">Comprar</button>
  </div>
);
}
export default BuyBox;