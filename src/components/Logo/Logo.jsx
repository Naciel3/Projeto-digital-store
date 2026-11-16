import { Link } from 'react-router-dom';
import logoDefault from '../../assets/logo-header.svg';

function Logo({ src = logoDefault, alt = 'Digital Store' }) {
  return (
    <Link to="/">
      <img src={src} alt={alt} width="253" height="44" />
    </Link>
  );
}

export default Logo;