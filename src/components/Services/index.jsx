import {
  MdRestaurantMenu,
  MdOutlineFoodBank,
  MdBusiness,
  MdKitchen,
  MdCake,
  MdMenuBook,
} from 'react-icons/md';
import styles from './style.module.scss';

const services = [
  {
    id: 'service-eventos',
    icon: <MdRestaurantMenu size={28} />,
    title: 'Buffet para Eventos',
    description:
      'Preparo tudo para aniversários, festas em família e confraternizações, com planejamento e foco no seu paladar.',
  },
  {
    id: 'service-encomenda',
    icon: <MdOutlineFoodBank size={28} />,
    title: 'Comida sob Encomenda',
    description:
      'Faço pratos sob medida para a sua necessidade, garantindo sempre a qualidade e o sabor de comida fresca.',
  },
  {
    id: 'service-empresas',
    icon: <MdBusiness size={28} />,
    title: 'Almoço Corporativo',
    description:
      'Atendo empresas com refeições em volume, mantendo a padronização e a eficiência que o ambiente de trabalho exige.',
  },
  {
    id: 'service-buffet',
    icon: <MdKitchen size={28} />,
    title: 'Buffet Completo',
    description:
      'Elaboro cardápios variados, do frio ao quente, com uma apresentação cuidadosa para marcar o seu evento.',
  },
  {
    id: 'service-sobremesas',
    icon: <MdCake size={28} />,
    title: 'Doces e Sobremesas',
    description:
      'Preparação artesanal de bolos, tortas e sobremesas que complementam o seu evento com um toque especial.',
  },
  {
    id: 'service-cardapio',
    icon: <MdMenuBook size={28} />,
    title: 'Cardápios Personalizados',
    description:
      'Crio o cardápio ideal conforme o seu perfil e as suas preferências, cuidando de cada detalhe do planejamento.',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="servicos" aria-label="Serviços de cozinheira profissional no Rio de Janeiro">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que eu ofereço</span>
          <h2 className={`section-title ${styles.title}`}>
            Culinária profissional para todas as ocasiões
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            Trago a minha vivência em cozinhas profissionais para o seu pedido. Meus pratos são preparados 
            com ingredientes selecionados e o rigor que a sua mesa exige.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className={styles.card} 
              id={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <a
                href={`https://wa.me/5521999999999?text=Olá,%20tenho%20interesse%20em:%20${encodeURIComponent(service.title)}`}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
                id={`cta-${service.id}`}
              >
                Solicitar orçamento
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
