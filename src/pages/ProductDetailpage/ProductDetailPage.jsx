import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../../data/products';
import './ProductDetailPage.css';
import Layout from '../Layout/Layout';


const sizes = ['39', '40', '41', '42', '43'];
const colors = ['#6FD3F7', '#FF6B9D', '#474747', '#4F6FB5'];

const formatPrice = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`;

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [size, setSize] = useState(null);
  const [color, setColor] = useState(0);

  if (!product) {
    return (
      <Layout>
      <main className="detail-page">
        <h1>Produto não encontrado</h1>
        <Link to="/produtos">Voltar para os produtos</Link>
      </main>
      </Layout>
    );
  }

  return (
    <Layout>
    <main className="detail-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> /{' '}
        <span>{product.name}</span>
      </nav>

      <div className="detail-content">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="detail-ref">{product.category} | REF: 0000{product.id}</p>

          <div className="detail-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-badge">4.7</span>
            <span>(90 avaliações)</span>
          </div>

          <div className="detail-price">
            <span className="old">{formatPrice(product.price)}</span>
            <strong>{formatPrice(product.priceDiscount)}</strong>
          </div>

          <h2>Tamanho</h2>
          <div className="sizes">
            {sizes.map((s) => (
              <button
                key={s}
                className={size === s ? 'active' : ''}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <h2>Cor</h2>
          <div className="colors">
            {colors.map((c, i) => (
              <button
                key={c}
                aria-label={`Cor ${i + 1}`}
                className={color === i ? 'active' : ''}
                style={{ background: c }}
                onClick={() => setColor(i)}
              />
            ))}
          </div>

          <button className="buy-button" disabled={!size}>
            COMPRAR
          </button>
          {!size && <p className="hint">Escolha um tamanho para comprar.</p>}
        </div>
      </div>
    </main>
   </Layout>
  );
}

export default ProductDetailPage;