import { FaStar } from 'react-icons/fa';
import styles from './style.module.scss';

const testimonials = [
  {
    id: 'client-01',
    name: 'Karyne Oliveira',
    role: 'Evento de confraternização',
    text: 'A Cláudia foi excepcional no nosso evento corporativo. A comida estava deliciosa, a apresentação impecável e a organização foi um diferencial enorme. Toda a equipe elogiou. Recomendo sem hesitar!',
    rating: 5,
  },
  {
    id: 'client-02',
    name: 'Giovana Mendes',
    role: 'Aniversário de 15 anos',
    text: 'Contratei a Cláudia para produzir o buffet do aniversário da minha filha. A atenção ao cardápio, à apresentação e ao prazo foi incrível. Mais de 80 convidados e todos elogiaram muito. Profissionalismo de alto nível!',
    rating: 5,
  },
  {
    id: 'client-03',
    name: 'Deise Ferreira',
    role: 'Refeições para empresa',
    text: 'Trabalhamos com a Cláudia para refeições diárias na nossa empresa. A qualidade é constante, a higienização é rigorosa e a pontualidade é impecável. É a escolha certa para quem busca gastronomia profissional de verdade.',
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  return (
    <div className={styles.avatar}>{initials}</div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="depoimentos" aria-label="Depoimentos de clientes da cozinheira profissional Cláudia Magalhães">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={`section-title ${styles.title}`}>
            O que nossos clientes dizem
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
            Mais de 2.000 pessoas já foram atendidas. Veja o que elas falam sobre nosso trabalho!
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.id} className={styles.card} id={t.id}>
              <StarRating count={t.rating} />
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <Avatar name={t.name} />
                <div>
                  <strong className={styles.name}>{t.name}</strong>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
