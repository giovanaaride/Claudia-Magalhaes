import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} onClick={(e) => handleNavClick(e, '#inicio')} aria-label="Cláudia Magalhães - Personal Chef">
          <div className={styles.logoIcon}>
            <span>CM</span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Cláudia Magalhães</span>
            <span className={styles.logoTagline}>Personal Chef</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} role="navigation" aria-label="Menu principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5521999999999?text=Olá,%20quero%20solicitar%20um%20orçamento!"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
          id="header-cta"
        >
          Solicitar Orçamento
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5521999999999?text=Olá,%20quero%20solicitar%20um%20orçamento!"
            className={styles.mobileCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
