import { MdOutlineAccessTime, MdWarningAmber } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './style.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta} id="orcamento" aria-label="Solicitar orçamento. Cozinheira profissional Rio de Janeiro">
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`} data-aos="zoom-in">

        <h2 className={styles.headline}>
          Vamos planejar as <span className={styles.highlight}>comidas do seu próximo evento?</span>
        </h2>
        <p className={styles.subtext}>
          Eu atendo em todo o Rio de Janeiro com muita organização e aquele tempero especial que a sua mesa merece. 
          É só entrar em contato para combinarmos cada detalhe do seu pedido!
        </p>
        <a
          href="https://wa.me/5521972844210?text=Olá%20Cláudia,%20quero%20solicitar%20um%20orçamento!"
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
          {' '}Agenda disputada. Respondo rápido pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
