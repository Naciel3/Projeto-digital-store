import HomePage from './pages/homePage/HomePage';
import ProductsPage from './pages/productsPage/ProductsPage';
import ProductDetailPage from './pages/productDetailpage/ProductDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/produtos/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;