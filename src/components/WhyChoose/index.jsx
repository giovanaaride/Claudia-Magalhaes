import { FaTrophy, FaBolt, FaHeart } from 'react-icons/fa';
import { MdRestaurantMenu, MdVerified } from 'react-icons/md';
import styles from './style.module.scss';

const reasons = [
  { icon: <FaTrophy size={22} />, title: '15 anos de estrada', desc: 'Vivência real e profissional em diversos tipos de cozinha no Rio de Janeiro.' },
  { icon: <MdRestaurantMenu size={24} />, title: 'Artesanal e Profissional', desc: 'O cuidado de um preparo feito à mão com o rigor de uma cozinha de verdade.' },
  { icon: <MdVerified size={24} />, title: 'Rigor com a higiene', desc: 'Segurança alimentar levada a sério em todas as etapas da minha produção.' },
  { icon: <FaBolt size={20} />, title: 'Organização e entrega', desc: 'Planejamento para que você receba tudo no prazo e com a melhor qualidade.' },
  { icon: <FaHeart size={20} />, title: 'Tempero Marcante', desc: 'O segredo da minha comida é o cuidado que coloco em cada tempero.' },
];

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose} id="diferenciais" aria-label="Diferenciais da cozinheira Cláudia Magalhães">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol} data-aos="fade-right">
            <span className={styles.eyebrow}>Meus Diferenciais</span>
            <h2 className={`section-title ${styles.title}`}>
              Por que confiar<br/>no meu trabalho?
            </h2>
            <p className={styles.subtitle}>
              Coloco toda a minha experiência em cozinhas profissionais para garantir que o seu evento ou 
              encomenda seja um sucesso, com todo o sabor e a segurança que você e seus convidados merecem.
            </p>

            <a
              href="#contato"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="whychoose-cta"
            >
              Solicitar Orçamento
            </a>
          </div>

          <ul className={styles.reasonsList}>
            {reasons.map((r, i) => (
              <li key={i} className={styles.reasonItem}>
                <div className={styles.reasonIcon}>{r.icon}</div>
                <div>
                  <strong className={styles.reasonTitle}>{r.title}</strong>
                  <span className={styles.reasonDesc}>{r.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
