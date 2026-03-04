import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import styles from './style.module.scss';

const faqs = [
  {
    id: 'faq-1',
    q: 'Onde você atende?',
    a: 'Atendo no Rio de Janeiro, especialmente na Zona Norte, com possibilidade de atendimento em outras regiões sob consulta.',
  },
  {
    id: 'faq-2',
    q: 'Por que escolher seus serviços?',
    a: 'Minha experiência de mais de 15 anos em produção de grande volume e organização profissional garante qualidade, segurança alimentar e entrega eficiente em cada pedido.',
  },
  {
    id: 'faq-3',
    q: 'Você atende eventos corporativos?',
    a: 'Sim, realizo produções para empresas, confraternizações e eventos institucionais, com capacidade de produzir até 600 refeições por dia.',
  },
  {
    id: 'faq-4',
    q: 'É possível personalizar o cardápio?',
    a: 'Sim, os cardápios podem ser adaptados conforme a necessidade e o perfil do evento, respeitando restrições alimentares e preferências dos convidados.',
  },
  {
    id: 'faq-5',
    q: 'Como funciona o atendimento?',
    a: 'O atendimento pode ser realizado na residência do cliente, para preparo no local, ou por meio de produção própria com entrega programada. Cada serviço é organizado de acordo com a necessidade do evento ou encomenda.',
  },
  {
    id: 'faq-6',
    q: 'Como solicitar orçamento?',
    a: 'Basta entrar em contato pelo formulário abaixo ou pelo WhatsApp informando o tipo de evento, a data e o número de pessoas.',
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ''}`} id={item.id}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${item.id}-answer`}
      >
        <span>{item.q}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      <div
        id={`${item.id}-answer`}
        className={styles.faqAnswer}
        role="region"
        aria-hidden={!open}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq" aria-label="Perguntas frequentes sobre cozinheira profissional no Rio de Janeiro">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Tire suas dúvidas</span>
            <h2 className={`section-title ${styles.title}`}>
              Perguntas Frequentes
            </h2>
            <p className={styles.subtitle}>
              Não encontrou o que procura? Entre em contato pelo WhatsApp — responderei rapidamente!
            </p>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="faq-whatsapp-cta"
            >
              <FaWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className={styles.faqList} role="list">
            {faqs.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
