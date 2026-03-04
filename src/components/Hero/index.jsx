import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { GiCook } from 'react-icons/gi';
import { HiSparkles } from 'react-icons/hi';
import styles from './style.module.scss';

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="inicio" aria-label="Cozinheira profissional no Rio de Janeiro">
      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <HiSparkles />
            <span>Gastronomia profissional com 15+ anos</span>
          </div>

          <h1 className={styles.headline}>
            Cozinha profissional feita com
            <span className={styles.highlight}> técnica, cuidado e sabor</span>
          </h1>

          <p className={styles.subheadline}>
            Produção de refeições para eventos, empresas e encomendas no{' '}
            <strong>Rio de Janeiro</strong> — com mais de 15 anos de experiência,
            segurança alimentar e até 600 refeições por dia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/5521999999999?text=Olá%20Cláudia,%20quero%20solicitar%20um%20orçamento!"
              className={`btn-primary ${styles.btnPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-primary"
            >
              <FaShoppingCart />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className={`btn-outline ${styles.btnOutline}`}
              onClick={(e) => handleScroll(e, '#servicos')}
              id="hero-cta-secondary"
            >
              Ver Serviços
              <FaArrowRight size={14} />
            </a>
          </div>

          <p className={styles.microcopy}>
            <span><MdDeliveryDining /> Atendimento no RJ</span>
            <span><GiCook /> Gastronomia profissional</span>
            <span><HiSparkles /> Segurança alimentar</span>
          </p>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <img
              src="/images/testimonials/claudia6.png"
              alt="Cláudia Magalhães cozinheira profissional no Rio de Janeiro — produção de refeições para eventos"
              className={styles.heroImage}
            />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>2.000+</span>
              <span className={styles.badgeLabel}>clientes atendidos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5EDE0"/>
        </svg>
      </div>
    </section>
  );
}
