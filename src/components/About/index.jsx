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
        <div className={styles.imageCol} data-aos="fade-right">
          <div className={styles.imageWrapper}>
            <img
              src="/images/testimonials/claudia.webp"
              alt="Cláudia Magalhães, cozinheira profissional com mais de 15 anos de experiência no Rio de Janeiro, Zona Norte"
              className={styles.founderImage}
              width="600"
              height="800"
              loading="lazy"
            />
            <div className={styles.experienceBadge}>
              <span className={styles.years}>+15</span>
              <span className={styles.yearsLabel}>anos de<br/>experiência</span>
            </div>
          </div>
        </div>

        {/* Right – Content */}
        <div className={styles.content} data-aos="fade-left">
          <span className={styles.eyebrow}>Minha História na Cozinha</span>
          <h2 className={`section-title ${styles.title}`}>
            Tradicionais e artesanais para encomendas e festas
          </h2>

          <p className={styles.text}>
            Com mais de 15 anos de estrada como cozinheira profissional, sou graduada em Gastronomia 
            e venho estudando e aprendendo desde muito antes disso.
          </p>

          <p className={styles.text}>
            Minha jornada foi construída com base no <strong>compromisso com o sabor de verdade</strong> e 
            em processos rigorosos de segurança alimentar.
          </p>

          <p className={styles.text}>
            Durante esses anos, fui cozinheira responsável em escolas, restaurantes e cozinhas industriais. 
            Já liderei produções de até 600 refeições por dia, sempre mantendo o alto padrão que os meus clientes esperam. 
            Hoje, foco o meu trabalho em encomendas no Rio de Janeiro, atendendo principalmente a 
            <strong> Zona Norte</strong>, em bairros como <strong>Méier, Tijuca</strong> e proximidades.
          </p>

          <ul className={styles.experienceList}>
            <li className={styles.eyebrowSmall}>O que eu ofereço:</li>
            {experienceItems.map((item, i) => (
              <li key={i} className={styles.experienceItem}>
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.text}>
            Coloco toda a minha vivência gastronômica em cada prato, unindo técnica e responsabilidade para que 
            você receba uma comida profissional com o melhor tempero possível.
          </p>

          <a
            href="https://wa.me/5521972844210?text=Olá%20Cláudia,%20quero%20saber%20mais%20sobre%20seus%20serviços!"
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



