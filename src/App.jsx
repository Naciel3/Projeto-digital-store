import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

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