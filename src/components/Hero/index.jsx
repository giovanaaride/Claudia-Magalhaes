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
        {/* Left Image (Moved from right) */}
        <div className={styles.imageWrapper} data-aos="zoom-in">
          <div className={styles.imageFrame}>
            <img
              src="/images/testimonials/claudia6.webp"
              alt="Cláudia Magalhães cozinheira profissional no Rio de Janeiro. Produção de refeições para eventos"
              className={styles.heroImage}
              fetchPriority="high"
              decoding="async"
            />
            <div className={styles.floatingBadge} data-aos="zoom-in" data-aos-delay="400">
              <span className={styles.badgeNumber}>2.000+</span>
              <span className={styles.badgeLabel}>clientes atendidos</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content} data-aos="fade-left">
          <h1 className={styles.headline}>
            <span className={styles.highlight}>Gastronomia artesanal personalizada:</span> encomende para entrega ou receba a chef na sua cozinha.
          </h1>

          <p className={styles.subheadline}>
            Trabalho com comida por encomenda. Eu posso entregar o prato pronto na sua casa ou ir até você e preparar tudo fresquinho com os ingredientes que eu mesma compro.
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
