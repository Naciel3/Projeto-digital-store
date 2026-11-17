import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import Gallery from '../../components/gallery/Gallery';
import BuyBox from '../../components/buyBox/BuyBox';
import ProductOptions from '../../components/productOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/productListing/ProductListing';
import products from '../../data/products';
import './ProductDetailPage.css';

const galleryImages = [
  { src: '/products/produc-image-1.jpeg' },
  { src: '/products/produc-image-2.jpeg' },
  { src: '/products/produc-image-3.jpeg' },
  { src: '/products/produc-image-4.jpeg' },
  { src: '/products/produc-image-5.jpeg' },
];

const sizes = ['39', '40', '41', '42', '43'];
const colors = ['#6FD3F7', '#FF6B9D', '#474747', '#4F6FB5'];

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Layout>
        <main className="detail-page">
          <h1>Produto não encontrado</h1>
        </main>
      </Layout>
    );
  }

  const recommended = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <main>
        <div className="detail-page">
          <div className="detail-main">
            <Gallery
              width={700}
              height={570}
              radius="4px"
              showThumbs
              images={galleryImages}
            />

            <BuyBox
              name={product.name}
              reference={`REF: 0000${product.id}`}
              stars={4.7}
              rating={90}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description="Tênis confortável e versátil, ideal para o uso diário. Cabedal respirável e solado com ótima aderência."
            >
              <div>
                <h2 className="option-title">Tamanho</h2>
                <ProductOptions options={sizes} radius="4px" shape="square" type="text" />
              </div>

              <div>
                <h2 className="option-title">Cor</h2>
                <ProductOptions options={colors} shape="circle" type="color" />
              </div>
            </BuyBox>
          </div>
        </div>

        <Section
          title="Produtos recomendados"
          link={{ text: 'Ver todos →', href: '/produtos' }}
        >
          <ProductListing products={recommended} />
        </Section>
      </main>
    </Layout>
  );
}

export default ProductDetailPage;