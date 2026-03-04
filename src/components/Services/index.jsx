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
    title: 'Produção para Eventos',
    description:
      'Atendimento para aniversários, confraternizações e eventos corporativos, com planejamento completo e execução profissional.',
  },
  {
    id: 'service-encomenda',
    icon: <MdOutlineFoodBank size={28} />,
    title: 'Refeições sob Encomenda',
    description:
      'Produção personalizada conforme a necessidade do cliente, com organização, qualidade e segurança alimentar garantida.',
  },
  {
    id: 'service-empresas',
    icon: <MdBusiness size={28} />,
    title: 'Atendimento para Empresas',
    description:
      'Preparação de refeições em médio e grande volume, com eficiência e padronização para ambientes corporativos.',
  },
  {
    id: 'service-buffet',
    icon: <MdKitchen size={28} />,
    title: 'Buffet Quente e Frio',
    description:
      'Elaboração de cardápios variados para diferentes ocasiões, com apresentação cuidadosa e sabor marcante.',
  },
  {
    id: 'service-sobremesas',
    icon: <MdCake size={28} />,
    title: 'Sobremesas e Produções Especiais',
    description:
      'Preparação de bolos, tortas, quiches e sobremesas artesanais para complementar qualquer evento.',
  },
  {
    id: 'service-cardapio',
    icon: <MdMenuBook size={28} />,
    title: 'Desenvolvimento de Cardápios',
    description:
      'Criação e adaptação de cardápios personalizados conforme o perfil do evento e as preferências dos convidados.',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="servicos" aria-label="Serviços de gastronomia profissional no Rio de Janeiro">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que ofereço</span>
          <h2 className={`section-title ${styles.title}`}>
            Serviços de cozinheira profissional no Rio de Janeiro
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            Mais de 15 anos atuando na gastronomia profissional, com capacidade de produção
            de até 600 refeições por dia e compromisso rigoroso com segurança alimentar.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card} id={service.id}>
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
