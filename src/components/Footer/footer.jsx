import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import logoWhite from '../../assets/logo-footer.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo src={logoWhite} alt="Logo da Drip Store" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus quo quia aut cum est serviços nobis ea autem hic tempora
            recusandae, atque consequatur deleniti! Perferendis animi hic
            necessitatibus facilis!
          </p>
          <div className="social-links">
            <a href="#">instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Informação</h3>
          <a href="#">Sobre Drip Store</a>
          <a href="#">Segurança</a>
          <a href="#">Lista de desejos</a>
          <a href="#">Blog</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Meus pedidos</a>
        </div>

        <div className="footer-column">
          <h3>Categorias</h3>
          <Link to="/produtos">Tênis</Link>
          <Link to="/produtos">Roupas</Link>
          <Link to="/produtos">Acessórios</Link>
          <Link to="/produtos">Ofertas</Link>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 9999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Loja Digital. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;