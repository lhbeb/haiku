import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '../../data/products';

const buyMeACoffeeShop = 'https://buymeacoffee.com/haikouyuyoukangtrading';

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

  return (
    <main className="product-detail-page">
      <nav className="nav shell" aria-label="Product navigation">
        <a className="brand" href="/" aria-label="Liu Yu home"><img className="brand-logo" src="/logo.svg" alt="Liu Yu · Yuyoukang Trading" /></a>
        <a className="nav-cta" href="/#plans">Back to plans <span>↩</span></a>
      </nav>
      <section className="product-detail shell">
        <div className="product-detail-image">{product.image ? <div className="product-detail-photo" style={{ backgroundImage: `url(${product.image})` }} /> : <div className="product-detail-placeholder">⚡</div>}</div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Digital prototype reference</p>
          <span className="product-label">{product.label}</span>
          <h1>{product.name}</h1>
          <strong className="product-detail-spec">{product.spec}</strong>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-facts"><div><span>Intended use</span><strong>{product.use}</strong></div><div><span>Format</span><strong>Downloadable digital prototype files</strong></div><div><span>Where to buy</span><strong>Official Buy Me a Coffee shop</strong></div><div><span>Physical product</span><strong>Manufacturing discussion handled separately</strong></div></div>
          <div className="product-detail-actions"><a className="button button-primary" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Purchase files <span>↗</span></a><a className="button button-quiet" href="/#contact">Request manufacturing <span>↗</span></a></div>
        </div>
      </section>
      <section className="product-detail-note"><div className="shell"><p className="eyebrow">How it works</p><h2>Purchase the files, then take the idea further.</h2><p>Digital prototype files are available through our Buy Me a Coffee shop for study, inspiration, and further development. Contact us separately when you want to discuss adapting the concept or commissioning a physical product through our wholesale network.</p><a className="text-link" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Visit our Buy Me a Coffee shop <span>↗</span></a></div></section>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Haikou Yuyoukang Trading Co., Ltd</span><span className="footer-links"><a href="/legal/privacy-policy">Privacy</a><a href="/legal/terms-of-use">Terms</a><a href="/legal/refund-policy">Refunds</a></span><a href="/">Back to home ↑</a></div></footer>
    </main>
  );
}
