import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
