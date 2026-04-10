import { FaStar, FaMedal, FaUsers } from 'react-icons/fa';
import styles from './style.module.scss';

const miniReviews = [
  { name: 'Ana P.', text: 'Melhor comida do evento! Organização impecável e sabor incrível.' },
  { name: 'Marcos R.', text: 'Contratei para o evento da empresa e todos elogiaram muito.' },
  { name: 'Laura S.', text: 'Profissional excepcional. Pontualidade e qualidade de alto nível.' },
];

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars} role="img" aria-label={`Avaliação ${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className={styles.socialProof} id="prova-social" aria-label="Prova social — cozinheira profissional RJ">
      <div className={`container ${styles.inner}`}>
        <div className={styles.mainProof}>
          <div className={styles.satisfiedCount}>
            <FaUsers className={styles.proofIcon} />
            <span className={styles.number}>2.000+</span>
            <span className={styles.label}>clientes atendidos</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.starsBlock}>
            <StarRating />
            <span>Avaliação 5.0 no Google</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.starsBlock}>
            <FaMedal className={styles.medalIcon} />
            <span className={styles.feature}>+15 anos de experiência profissional</span>
          </div>
        </div>

        <div className={styles.miniReviews}>
          {miniReviews.map((review) => (
            <div className={styles.miniCard} key={review.name}>
              <StarRating />
              <p>"{review.text}"</p>
              <span>— {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
