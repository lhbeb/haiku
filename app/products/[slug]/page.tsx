import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '../../data/products';
import ProductGallery from '../../components/ProductGallery';

const buyMeACoffeeShop = 'https://buymeacoffee.com/haikouyuyoukangtrading/extras';

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: `${product.name} | Liu Yu`, description: product.description } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const isWholesaleProduct = product.saleType === 'wholesale-product';

  return (
    <main className="product-detail-page">
      <nav className="nav shell" aria-label="Product navigation">
        <a className="brand" href="/" aria-label="Liu Yu home"><img className="brand-logo" src="/logo.svg" alt="Liu Yu · Yuyoukang Trading" /></a>
        <a className="nav-cta" href="/#plans">Back to plans <span>↩</span></a>
      </nav>
      <section className="product-detail shell">
        <div className="product-detail-image">{product.images?.length ? <ProductGallery images={product.images} productName={product.name} /> : product.image ? <div className={`product-detail-photo ${product.deliverables ? 'product-detail-photo-contain' : ''}`} style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.name} /> : <div className="product-detail-placeholder">⚡</div>}</div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {isWholesaleProduct ? 'Ready-made wholesale product' : 'Digital prototype reference'}</p>
          <span className="product-label">{product.label}</span>
          <h1>{product.name}</h1>
          <strong className="product-detail-spec">{product.spec}</strong>
          {product.price && <div className="product-detail-price"><span>Engineering plan</span><strong>{product.price}</strong></div>}
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-facts"><div><span>Intended use</span><strong>{product.use}</strong></div>{product.architecture && <div><span>Architecture</span><strong>{product.architecture}</strong></div>}<div><span>Format</span><strong>{isWholesaleProduct ? 'Ready-made physical product for wholesale orders' : 'Downloadable digital engineering package'}</strong></div><div><span>{isWholesaleProduct ? 'Ordering' : 'Where to buy'}</span><strong>{isWholesaleProduct ? 'Contact our team for MOQ, pricing, customization, and delivery terms' : 'Official Buy Me a Coffee shop'}</strong></div><div><span>Production path</span><strong>{isWholesaleProduct ? 'Confirm quantity and specifications, approve the quotation, then begin scheduled production' : 'Adapt the framework, then return it to our team for prototyping and volume-production planning'}</strong></div></div>
          <div className="product-detail-actions">{isWholesaleProduct ? <a className="button button-primary" href="mailto:contact@yuyoukang.com?subject=Balcony%20Solar%20Generator%202400W%20wholesale%20quote">Request MOQ quote <span>↗</span></a> : <a className="button button-primary" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Purchase files <span>↗</span></a>}<a className="button button-quiet" href="/#contact">Talk to our team <span>↗</span></a></div>
        </div>
      </section>
      {product.deliverables && <section className="plan-deliverables"><div className="shell"><div className="plan-section-heading"><div><p className="eyebrow">Included in the plan</p><h2>What the buyer receives.</h2></div><p>A structured engineering package intended for careful review, adaptation, and product development.</p></div><ol className="deliverables-grid">{product.deliverables.map((deliverable, index) => <li key={deliverable}><span>{String(index + 1).padStart(2, '0')}</span><strong>{deliverable}</strong></li>)}</ol></div></section>}
      {product.developmentPath && <section className="plan-workflow"><div className="shell"><div className="plan-section-heading"><div><p className="eyebrow">From files to factory</p><h2>Study it. Shape it. Build it.</h2></div></div><div className="workflow-grid">{product.developmentPath.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><a className="button button-primary" href="/#contact">Discuss bulk production <span>↗</span></a></div></section>}
      <section className="product-detail-note"><div className="shell"><p className="eyebrow">How it works</p><h2>{isWholesaleProduct ? 'Order ready-made units at wholesale scale.' : 'Purchase the files, then take the idea further.'}</h2><p>{product.rightsNote ?? 'Digital prototype files are available through our Buy Me a Coffee shop for study, inspiration, and further development. Contact us separately when you want to discuss adapting the concept or commissioning a physical product through our wholesale network.'}</p>{isWholesaleProduct ? <a className="text-link" href="mailto:contact@yuyoukang.com?subject=Balcony%20Solar%20Generator%202400W%20wholesale%20quote">Request pricing and MOQ <span>↗</span></a> : <a className="text-link" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Visit our Buy Me a Coffee shop <span>↗</span></a>}</div></section>
      <footer className="footer"><div className="shell footer-inner"><div className="footer-company-info"><span className="footer-copyright">© 2026 Haikou Yuyoukang Trading Co., Ltd</span><span className="footer-registration">Unified Social Credit Code: 91460106MACU8P8X2F</span><span className="footer-registration">Registration: 202503312046D331 · Est. 2025</span></div><span className="footer-links"><a href="/legal/privacy-policy">Privacy</a><a href="/legal/terms-of-use">Terms</a><a href="/legal/refund-policy">Refunds</a></span><a href="/">Back to home ↑</a></div></footer>
    </main>
  );
}
