import { FaTrophy, FaBolt, FaHeart } from 'react-icons/fa';
import { MdRestaurantMenu, MdVerified } from 'react-icons/md';
import styles from './style.module.scss';

const reasons = [
  { icon: <FaTrophy size={22} />, title: 'Mais de 15 anos de experiência', desc: 'profissional na gastronomia e produção culinária' },
  { icon: <MdRestaurantMenu size={24} />, title: 'Até 600 refeições por dia', desc: 'com qualidade, padronização e eficiência comprovadas' },
  { icon: <MdVerified size={24} />, title: 'Segurança alimentar rigorosa', desc: 'aplicação das boas práticas de higienização em cada produção' },
  { icon: <FaBolt size={20} />, title: 'Organização e eficiência', desc: 'na execução, entregas e gestão de cozinha' },
  { icon: <FaHeart size={20} />, title: 'Compromisso total', desc: 'com qualidade e cuidado em cada detalhe do preparo' },
];

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose} id="diferenciais" aria-label="Por que contratar a Cláudia Magalhães como cozinheira profissional">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Meus diferenciais</span>
            <h2 className={`section-title ${styles.title}`}>
              Por que escolher<br/>meus serviços?
            </h2>
            <p className={styles.subtitle}>
              Mais de 15 anos atuando na gastronomia profissional no Rio de Janeiro
              garantem excelência, segurança alimentar e profissionalismo
              do início ao fim do seu evento.
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
