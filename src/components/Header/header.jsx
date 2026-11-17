import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../logo/Logo';
import './header.css';
import cartIcon from '../../assets/mini-cart.svg';

function Header() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const value = term.trim();
    navigate(value ? `/produtos?filter=${encodeURIComponent(value)}` : '/produtos');
  };

  return (
    <header className="header">
      <div className="header-top">
        <Logo />

        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">🔍</button>
        </form>

        <div className="header-actions">
          <a href="#" className="signup">Cadastre-se</a>
          <Link to="/" className="login-button">Entrar</Link>
          <img src={cartIcon} alt="Carrinho" className="cart-icon" />
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos" end>Produtos</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/pedidos">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;