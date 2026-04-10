import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone, MdLocationOn, MdAccessTime, MdSend, MdCheckCircle, MdPeople, MdRestaurantMenu } from 'react-icons/md';
import styles from './style.module.scss';

export default function ContactForm() {
  const [form, setForm] = useState({ 
    nome: '', 
    telefone: '', 
    servico: '',
    pessoas: '',
    mensagem: '' 
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, servico, pessoas, mensagem } = form;
    if (!nome || !telefone || !servico) return;

    const text = `Olá Cláudia! Me chamo ${nome}.\n\n` +
                 `Detalhes do Orçamento:\n` +
                 `Telefone: ${telefone}\n` +
                 `Serviço: ${servico}\n` +
                 `Nº de Pessoas: ${pessoas || 'Não informado'}\n\n` +
                 `Mensagem: \n${mensagem || 'Sem mensagem adicional.'}`;
                 
    const waUrl = `https://wa.me/5521999999999?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section className={styles.contactSection} id="contato" aria-label="Entre em contato. Cozinheira profissional no Rio de Janeiro (Zona Norte)">
      <div className="container">
        <div className={styles.inner}>
          {/* Info */}
          <div className={styles.infoCol} data-aos="fade-right">
            <span className={styles.eyebrow}>Entre em contato</span>
            <h2 className={`section-title ${styles.title}`}>
              Me conte sobre o seu evento!
            </h2>
            <p className={styles.subtitle}>
              Estou à disposição para cuidar do seu buffet ou da sua encomenda com toda a dedicação que você merece aqui no <strong>Rio de Janeiro</strong>.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdPhone size={22} /></span>
                <div>
                  <span className={styles.contactLabel}>Meu WhatsApp</span>
                  <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    (21) 99999-9999
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdLocationOn size={22} /></span>
                <div>
                  <span className={styles.contactLabel}>Onde estou</span>
                  <span className={styles.contactValue}>Produção na Zona Norte do Rio de Janeiro</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdAccessTime size={22} /></span>
                <div>
                  <span className={styles.contactLabel}>Conversar sobre orçamento</span>
                  <span className={styles.contactValue}>Resposta rápida pelo whatsapp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCol} data-aos="fade-left">
            {sent ? (
              <div className={styles.successBox}>
                <MdCheckCircle size={56} className={styles.successIcon} />
                <h3>Mensagem enviada!</h3>
                <p>Obrigada! Você será redirecionada para o WhatsApp e eu respondo em breve.</p>
                <button
                  className="btn-primary"
                  onClick={() => setSent(false)}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <h3 className={styles.formTitle}>Dados para o orçamento</h3>

                <div className={styles.field}>
                  <label htmlFor="nome" className={styles.label}>Seu nome completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Como posso te chamar?"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="telefone" className={styles.label}>Seu WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="servico" className={styles.label}>Tipo de serviço *</label>
                    <select
                      id="servico"
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    >
                      <option value="" disabled>Selecione...</option>
                      <option value="Buffet para Eventos">Buffet para Eventos</option>
                      <option value="Comida sob Encomenda">Comida sob Encomenda</option>
                      <option value="Almoço Corporativo">Almoço Corporativo</option>
                      <option value="Buffet Completo">Buffet Completo</option>
                      <option value="Doces e Sobremesas">Doces e Sobremesas</option>
                      <option value="Cardápio Personalizado">Cardápio Personalizado</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="pessoas" className={styles.label}>Nº de pessoas</label>
                    <input
                      type="number"
                      id="pessoas"
                      name="pessoas"
                      value={form.pessoas}
                      onChange={handleChange}
                      placeholder="Ex: 20"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="mensagem" className={styles.label}>Detalhes adicionais</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Data prevista, restrições alimentares ou outras dúvidas..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={4}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <MdSend /> Solicitar Orçamento Grátis
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
