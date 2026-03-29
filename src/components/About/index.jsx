import { MdRestaurantMenu, MdMenuBook, MdBusiness, MdInventory2, MdVerified } from 'react-icons/md';
import styles from './style.module.scss';
import { BiHappy } from 'react-icons/bi';

const experienceItems = [
  { icon: <MdRestaurantMenu />, text: 'Planejamento e execução de produções quentes e frias' },
  { icon: <MdMenuBook />, text: 'Desenvolvimento e adaptação de cardápios' },
  { icon: <MdBusiness />, text: 'Organização e estruturação completa de cozinha' },
  { icon: <MdInventory2 />, text: 'Controle de estoque e logística alimentar' },
  { icon: <MdVerified />, text: 'Aplicação rigorosa das Boas Práticas de Higienização' },
];

export default function About() {
  return (
    <section className={styles.about} id="sobre" aria-label="Sobre a Cláudia Magalhães, cozinheira profissional no Rio de Janeiro">
      <div className={`container ${styles.inner}`}>

        {/* Left – Founder Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/testimonials/claudia.png"
              alt="Cláudia Magalhães, cozinheira profissional com mais de 15 anos de experiência no Rio de Janeiro, Zona Norte"
              className={styles.founderImage}
              loading="lazy"
            />
            <div className={styles.experienceBadge}>
              <span className={styles.years}>+15</span>
              <span className={styles.yearsLabel}>anos de<br/>experiência</span>
            </div>
          </div>
        </div>

        {/* Right – Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Minha História na Cozinha</span>
          <h2 className={`section-title ${styles.title}`}>
            Gastronomia profissional com rigor, técnica e dedicação
          </h2>

          <p className={styles.text}>
            A culinária profissional sempre representou mais do que apenas um ofício, sendo um verdadeiro espaço de cuidado,
            organização e dedicação contínua.
          </p>

          <p className={styles.text}>
            Formada em Gastronomia e com <strong>mais de 15 anos de experiência profissional</strong>,
            construí uma trajetória marcada pela excelência na produção culinária, organização
            estratégica de cozinha e compromisso absoluto com a segurança alimentar.
          </p>

          <p className={styles.text}>
            Ao longo desses anos, atuei como cozinheira responsável em escolas, restaurantes
            comerciais e cozinhas industriais, <strong>liderando produções de até 600 refeições
            diárias</strong>, sempre mantendo alto padrão de qualidade e eficiência. Atendo como 
            <strong> Personal Chef no Rio de Janeiro</strong>, com foco na <strong>Zona Norte</strong>, 
            incluindo regiões como <strong>Méier</strong>, <strong>Tijuca</strong> e proximidades.
          </p>

          <ul className={styles.experienceList}>
            <li className={styles.eyebrowSmall}>Minha experiência inclui:</li>
            {experienceItems.map((item, i) => (
              <li key={i} className={styles.experienceItem}>
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.text}>
            Atualmente, aplico toda essa vivência gastronômica em cada preparo, unindo técnica, responsabilidade
            e sabor para garantir profissionalismo e alto padrão em cada detalhe.
          </p>

          <a
            href="https://wa.me/5521999999999?text=Olá%20Cláudia,%20quero%20saber%20mais%20sobre%20seus%20serviços!"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="about-cta"
          >
            Falar com Cláudia
          </a>
        </div>
      </div>
    </section>
  );
}



