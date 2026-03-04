import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './style.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}><span>CM</span></div>
            <div>
              <span className={styles.logoName}>Cláudia Magalhães</span>
              <span className={styles.logoTagline}>Cozinheira Profissional</span>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Pratos artesanais feitos com ingredientes selecionados e muito amor,
            para tornar seus momentos ainda mais especiais.
          </p>
          <div className={styles.social}>
            <a
              href="https://instagram.com/claudiamagalhaeschef"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram da Cláudia Magalhães — cozinheira profissional RJ"
              id="footer-instagram"
            >
              <FaInstagram size={18} />
              Instagram
            </a>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.whatsapp}`}
              aria-label="WhatsApp da Cláudia Magalhães — solicitar orçamento"
              id="footer-whatsapp"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contato</h3>
          <ul className={styles.colList}>
            <li>
              <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer">
                (21) 99999-9999
              </a>
            </li>
            <li>
              <a href="mailto:contato@claudiamagalhaes.com.br">
                contato@claudiamagalhaes.com.br
              </a>
            </li>
            <li>Atendimento personalizado</li>
            <li>Rio de Janeiro – Zona Norte</li>
            <li className={styles.mt}><strong>Bairros de atendimento:</strong></li>
            <li>Méier, Tijuca e regiões próximas</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {currentYear} Cláudia Magalhães — Cozinheira Profissional no Rio de Janeiro. Todos os direitos reservados.</p>
          <div className={styles.made}>
            <span>Desenvolvido por: <a href="#" target="_blank" rel="noopener noreferrer">Giovana</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
