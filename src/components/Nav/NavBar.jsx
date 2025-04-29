//import { Menu, Search, ShoppingCart, User } from "lucide-react";
import React, { useEffect, useState } from 'react';
import './NavBar.css';

export const NavBar = ({ user, cartCount = 2 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">Küchen</div>

        <div className="navbar__hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <input type="text" placeholder="Buscar..." className="navbar__search" />

          <a href="#">¿Quiénes somos?</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>

          {user ? (
            <div className="navbar__user">
              {user.avatar && <img src={user.avatar} alt="Avatar" className="navbar__avatar" />}
              <span>{user.name}</span>
            </div>
          ) : (
            <a href="/login">Iniciar sesión</a>
          )}

          <div className="navbar__cart">
            🛒<span className="navbar__cart-count">{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};