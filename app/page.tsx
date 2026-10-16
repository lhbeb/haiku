import { products } from './data/products';
import AnnouncementBar from './components/AnnouncementBar';

const buyMeACoffeeShop = 'https://buymeacoffee.com/haikouyuyoukangtrading';

const paths = [
  { number: '01', title: 'Manufacture your product', text: 'Send us a brief for backup power or outdoor electronics. We can discuss manufacturing, sourcing, configuration, and wholesale requirements.', href: '#contact', cta: 'Discuss manufacturing' },
  { number: '02', title: 'Buy prototype files', text: 'Purchase downloadable product concepts from our Buy Me a Coffee shop. Use the files for study, inspiration, adaptation, or as a framework for your own development.', href: buyMeACoffeeShop, cta: 'Browse files', external: true },
];

const prototypeTypes = [
  { number: '01', title: 'CAD & 3D models', text: 'Digital files for housings, fixtures, accessories, and product form studies.' },
  { number: '02', title: 'Industrial design concepts', text: 'Renders, dimensions, materials, and presentation-ready product directions.' },
  { number: '03', title: 'Engineering packages', text: 'Schematics, BOMs, enclosure files, and technical references for advanced builds.' },
];

const engineeringCapabilities = [
  { number: '01', title: 'Portable power architecture', text: 'System planning for battery storage, AC output, charging paths, controls, thermal constraints, and field use.' },
  { number: '02', title: 'Fast-charge integration', text: 'USB-C and multi-port charging concepts shaped around practical power budgets, protection, and product packaging.' },
  { number: '03', title: 'Solar and backup systems', text: 'Product directions for solar input, battery expansion, home backup, balcony power, and off-grid applications.' },
  { number: '04', title: 'Enclosure development', text: 'Mechanical planning for component fit, airflow, connectors, assembly, service access, and outdoor-ready housings.' },
];

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Liu Yu home"><img className="brand-logo" src="/logo.svg" alt="Liu Yu · Yuyoukang Trading" /></a>
        <div className="nav-links"><a href="#company">Company</a><a href="#paths">Work with us</a><a href="#plans">Prototype plans</a><a href="#contact">Contact</a></div>
        <a className="nav-cta desktop-nav-cta" href="#contact">Talk to our team <span>↗</span></a>
        <details className="mobile-nav"><summary><span>Menu</span><i aria-hidden="true" /></summary><div className="mobile-nav-panel"><a href="#company">Company</a><a href="#paths">Work with us</a><a href="#plans">Prototype plans</a><a href="#contact">Contact</a><a className="mobile-nav-action" href="#contact">Talk to our team <span>↗</span></a><a href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Purchase files <span>↗</span></a></div></details>
      </nav>

      <section id="top" className="hero shell">
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Product development · digital plans</p><h1>Backup power products, <em>from concept to production.</em></h1><p className="hero-lede">From Haikou development and production to our Bnei Brak office, we create backup-power and outdoor-electronics concepts, support manufacturing and wholesale projects, and offer digital prototype files for independent builders.</p><div className="hero-actions"><a className="button button-primary" href="#paths">Choose a path <span>↓</span></a><a className="button button-quiet" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Purchase prototype files <span>↗</span></a></div><div className="hero-meta"><span>01</span><span>Developed in Haikou</span><span>Israeli engineering roots</span><span>Bnei Brak office</span></div></div>
        <div className="hero-visual hero-concept" aria-label="Exploded-view portable power station sketch"><div className="concept-sheet"><img src="/power-station-sketch.jpg" alt="Exploded-view sketch of a modular portable power station" /></div><div className="concept-manifesto"><span className="note-label">CONCEPT / P-01</span><strong>Power should move with you.</strong><p>Modular. Repairable. Ready when the grid is not.</p><div className="concept-specs"><span>Portable backup</span><span>Solar-ready</span><span>Open to iteration</span></div></div><div className="visual-stamp">海南<br /><span>Hainan</span></div></div>
      </section>

      <section id="company" className="company-band"><div className="shell company-grid"><div className="section-intro"><p className="eyebrow">The company</p><h2>Product ideas, made easier to use.</h2></div><div className="company-text"><p>Haikou Yuyoukang Trading Co., Ltd is a product development and wholesale company focused on backup power and outdoor electronics.</p><p>Our roots are in Israel: engineers and product thinkers from Israel work alongside our Haikou development and production network. Our Bnei Brak office supports Israel-facing operations and communication. Prototype plans are downloadable concepts for people who want to study, adapt, or build from them.</p></div></div></section>

      <section className="ceo-section shell"><div className="ceo-image"><img src="/ceo.png" alt="Liu Yu, CEO of Haikou Yuyoukang Trading Co., Ltd" /></div><div className="ceo-copy"><p className="eyebrow">Leadership</p><h2>Liu Yu<br /><em>CEO & founder.</em></h2><p>Liu Yu leads the company with a practical vision: connect Israeli engineering thinking with Haikou production capability, then make useful product ideas easier for others to develop.</p><p>That vision shapes both sides of the business: manufacturing partnerships for companies and digital prototype plans for independent builders.</p><a className="text-link" href="mailto:contact@yuyoukang.com">Contact Liu Yu <span>↗</span></a></div></section>

      <section id="paths" className="paths shell"><div className="section-heading"><p className="eyebrow">Work with us</p><h2>Choose what you need.</h2><p>Commission a product through our wholesale network, or purchase downloadable files from our Buy Me a Coffee shop and take the idea further yourself.</p></div><div className="path-grid">{paths.map((path) => <article className="path-card" key={path.number}><span className="path-number">{path.number}</span><h3>{path.title}</h3><p>{path.text}</p><a className="text-link" href={path.href} target={path.external ? '_blank' : undefined} rel={path.external ? 'noreferrer' : undefined}>{path.cta} <span>↗</span></a></article>)}</div></section>

      <section id="plans" className="products-section"><div className="shell"><div className="products-heading"><div><p className="eyebrow">Digital product plans</p><h2>Backup power<br /><em>for real conditions.</em></h2></div><div className="products-intro"><p>These listings show the product directions we develop in Haikou.</p><p className="catalog-note">Downloadable prototype files are available to purchase through our official Buy Me a Coffee shop. Manufacturing and wholesale requests are handled separately.</p><a className="button button-primary shop-button" href={buyMeACoffeeShop} target="_blank" rel="noreferrer">Shop digital files <span>↗</span></a></div></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${index === 0 ? 'product-featured' : ''}`} key={product.name}>{product.image ? <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} /> : <div className="product-icon"><span>⚡</span></div>}<div className="product-card-body"><span className="product-label">{product.label}</span><h3>{product.name}</h3><strong>{product.spec}</strong><p>{product.use}</p><a href={`/products/${product.slug}`} className="product-link">View product page <span>↗</span></a></div></article>)}</div></div></section>

      <section className="prototype-types shell"><div className="section-heading"><p className="eyebrow">What a plan can contain</p><h2>Start with the right level of detail.</h2></div><div className="prototype-grid">{prototypeTypes.map((type) => <article className="prototype-type" key={type.number}><span>{type.number}</span><h3>{type.title}</h3><p>{type.text}</p></article>)}</div></section>

      <section className="engineering-section"><div className="shell engineering-inner"><div className="section-heading"><p className="eyebrow">Our engineering focus</p><h2>Product systems shaped as one whole.</h2><p>We connect electrical architecture, charging, storage, enclosure decisions, and real-world use from the beginning of a project.</p></div><div className="engineering-grid">{engineeringCapabilities.map((capability) => <article className="engineering-card" key={capability.number}><span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.text}</p></article>)}</div></div></section>

      <section id="contact" className="contact shell"><div><p className="eyebrow">Start here</p><h2>Have a product<br /><em>in mind?</em></h2></div><div className="contact-side"><p>Tell us whether you want a product manufactured, a wholesale conversation, or a digital prototype plan to adapt. Our Haikou and Bnei Brak teams can help define the next step.</p><a className="contact-link" href="mailto:contact@yuyoukang.com">contact@yuyoukang.com <span>↗</span></a><a className="contact-phone" href="tel:+8617198736140">+86 17198736140</a><p className="contact-location">Haikou, Hainan, China · Bnei Brak, Israel</p><address className="contact-address"><strong>China office</strong><br />China, Hainan, Haikou, Qiongshan District, 13, 东北方向140米<br />邮政编码: 571137<br /><br /><strong>Israel office</strong><br />לח״י 31, Lekhi St 21, Bnei Brak, Israel</address></div></section>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Haikou Yuyoukang Trading Co., Ltd</span><span className="footer-links"><a href="/legal/privacy-policy">Privacy</a><a href="/legal/terms-of-use">Terms</a><a href="/legal/refund-policy">Refunds</a></span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
