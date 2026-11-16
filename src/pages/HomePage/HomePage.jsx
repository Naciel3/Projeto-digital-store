import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import Gallery from '../../components/Gallery/Gallery';
import products from '../../data/products';
import './HomePage.css';

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
];

function HomePage() {
  return (
    <Layout>
      <main className="home-page">
        <div className="home-slide">
  <Gallery width={1440} height={681} images={slides} />

  <div className="home-slide-content">
    <span className="home-slide-tag">Melhores ofertas personalizadas</span>
    <h1>Queima de stoque Nike 🔥</h1>
    <p>
      Consequat culpa exercitation mollit nisi excepteur do do tempor
      laboris eiusmod irure consectetur.
    </p>
    <Link to="/produtos" className="home-slide-button">Ver Ofertas</Link>
  </div>
</div>

        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections">
            <img src="/collection-1.png" alt="Coleção 1" />
            <img src="/collection-2.png" alt="Coleção 2" />
            <img src="/collection-3.png" alt="Coleção 3" />
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          link={{ text: 'Ver todos →', href: '/produtos' }}
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </main>
    </Layout>
  );
}

export default HomePage;