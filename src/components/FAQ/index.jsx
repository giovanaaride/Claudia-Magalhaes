import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import styles from './style.module.scss';

const faqs = [
  {
    id: 'faq-1',
    q: 'Onde você atende?',
    a: 'Eu atendo em todo o Rio de Janeiro se for para cozinhar no local do evento. Mas, caso prefira que eu prepare e mande a comida já pronta para você, as entregas são apenas para a Zona Norte.',
  },
  {
    id: 'faq-2',
    q: 'Como funciona o serviço?',
    a: 'Você tem duas opções bem práticas: eu posso ir até a sua casa fazer todo o preparo lá na hora, ou, se preferir, eu mando a comida pronta e fresquinha direto da minha cozinha de Uber.',
  },
  {
    id: 'faq-3',
    q: 'Como funciona a parte de estrutura e utensílios?',
    a: 'Em caso de atendimento presencial, eu utilizo a estrutura e os utensílios que já existem no local do evento. Na hora de definir os pratos, a gente já leva em conta justamente o que você tem disponível para trabalhar e entregar o melhor resultado.',
  },
  {
    id: 'faq-4',
    q: 'Você faz almoços, jantares e confraternizações?',
    a: 'Sim! Faço desde aquele almoço de domingo com a família até pequenas reuniões e confraternizações. Tudo com muito tempero caseiro e feito no capricho.',
  },
  {
    id: 'faq-5',
    q: 'Posso montar o cardápio do meu jeito?',
    a: 'Com certeza! A gente monta o cardápio juntos conforme o que você e seus convidados tem vontade de comer. E detalhe: se tiver alguma restrição alimentar, é só batermos um papo que a gente adapta.',
  },
  {
    id: 'faq-6',
    q: 'Quais são as formas de pagamento?',
    a: 'Atualmente aceito pagamento apenas em dinheiro ou via Pix.',
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
        <div>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq" aria-label="Perguntas frequentes sobre o serviço da Cláudia Magalhães">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol} data-aos="fade-right">
            <span className={styles.eyebrow}>Tire suas dúvidas</span>
            <h2 className={`section-title ${styles.title}`}>
              Dúvidas Frequentes
            </h2>
            <p className={styles.subtitle}>
              Se não encontrar o que procura aqui, me chame no WhatsApp e a gente conversa.
            </p>
            <a
              href="https://wa.me/5521972844210?text=Olá%20Cláudia,%20gostaria%20de%20fazer%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="faq-whatsapp-cta"
            >
              <FaWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className={styles.faqList} role="list" data-aos="fade-left">
            {faqs.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
