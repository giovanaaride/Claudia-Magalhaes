import styles from './style.module.scss';

const products = [
  {
    id: 'product-01',
    image: '/images/products/product-01.jpg',
    name: 'Brigadeiros Gourmet',
    description: 'Clássicos feitos com chocolate belga, sem conservantes.',
    price: 'R$ 4,00 / unidade',
    tag: '⭐ Mais pedido',
  },
  {
    id: 'product-02',
    image: '/images/products/product-02.jpg',
    name: 'Bolo de Pote',
    description: 'Camadas cremosas de bolo e recheio especial em pote individual.',
    price: 'R$ 18,00',
    tag: '❤️ Favorito',
  },
  {
    id: 'product-03',
    image: '/images/products/product-03.jpg',
    name: 'Bolos de Festa',
    description: 'Bolos decorados sob encomenda para toda ocasião especial.',
    price: 'A partir de R$ 120,00',
    tag: null,
  },
  {
    id: 'product-04',
    image: '/images/products/product-04.jpg',
    name: 'Salgadinhos',
    description: 'Coxinhas, rissoles e esfihas artesanais para festas e eventos.',
    price: 'R$ 3,50 / unidade',
    tag: '🎉 Para festas',
  },
  {
    id: 'product-05',
    image: '/images/products/product-05.jpg',
    name: 'Docinhos Finos',
    description: 'Beijinhos, casadinhos e bicho-de-pé com acabamento perfeito.',
    price: 'R$ 3,00 / unidade',
    tag: null,
  },
  {
    id: 'product-06',
    image: '/images/products/product-06.jpg',
    name: 'Mesa de Sobremesas',
    description: 'Montagem completa de mesa de doces para eventos e celebrações.',
    price: 'Consulte valores',
    tag: '✨ Premium',
  },
];

export default function Products() {
  return (
    <section className={styles.products} id="produtos" aria-label="Cardápio de produtos">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nosso Cardápio</span>
          <h2 className={`section-title ${styles.title}`}>
            Feito com carinho, do início ao fim
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
            Cada produto é preparado por encomenda, garantindo frescor e qualidade incomparáveis.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.id} className={styles.card} id={product.id}>
              <div className={styles.imageWrapper}>
                {product.tag && (
                  <div className={styles.tag}>{product.tag}</div>
                )}
                <img
                  src={product.image}
                  alt={`${product.name} - Cláudia Magalhães Personal Chef`}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{product.price}</span>
                  <a
                    href={`https://wa.me/5511999999999?text=Olá,%20quero%20pedir:%20${encodeURIComponent(product.name)}`}
                    className={styles.orderBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`order-${product.id}`}
                  >
                    Adicionar ao Pedido
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
