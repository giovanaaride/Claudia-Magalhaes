import { MdOutlineAccessTime, MdWarningAmber } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './style.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta} id="orcamento" aria-label="Solicitar orçamento — cozinheira profissional Rio de Janeiro">
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.urgencyBadge}>
          <MdOutlineAccessTime />
          Vagas limitadas por semana — Garanta a sua!
        </div>
        <h2 className={styles.headline}>
          Faça seu pedido hoje e surpreenda{' '}
          <span className={styles.highlight}>alguém especial</span>
        </h2>
        <p className={styles.subtext}>
          Atendo no Rio de Janeiro com planejamento completo, segurança alimentar e gastronomia de alto nível. 
          É só entrar em contato e combinar os detalhes!
        </p>
        <a
          href="https://wa.me/5521999999999?text=Olá%20Cláudia,%20quero%20solicitar%20um%20orçamento!"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
          id="main-cta-button"
        >
          <FaWhatsapp size={22} />
          Quero Solicitar Meu Orçamento
        </a>
        <p className={styles.microcopy}>
          <MdWarningAmber size={14} style={{ verticalAlign: 'middle' }} />
          {' '}Agenda limitada — resposta rápida via WhatsApp
        </p>
      </div>
    </section>
  );
}
