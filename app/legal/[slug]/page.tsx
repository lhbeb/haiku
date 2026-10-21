import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const legalPages = {
  'privacy-policy': {
    label: 'Privacy',
    title: 'Privacy Policy',
    intro: 'How Haikou Yuyoukang Trading Co., Ltd handles information when you visit this website or contact us.',
    sections: [
      ['Information we receive', 'We may receive information you choose to send by email, including your name, contact details, company information, product requirements, and messages. Basic technical information may also be processed by the hosting provider to deliver and secure the website.'],
      ['How we use information', 'We use submitted information to answer enquiries, discuss manufacturing or wholesale requests, provide information about digital prototype plans, and maintain the security and operation of this website. We do not sell personal information.'],
      ['Third-party services', 'Digital prototype purchases may be completed through Buy Me a Coffee. Their checkout, payment, and privacy practices apply to activity on their platform. This website does not collect or store your payment card details.'],
      ['Retention and contact', 'We keep enquiry information only as long as reasonably necessary for communication, business records, or legal obligations. For privacy questions, contact contact@yuyoukang.com or call +86 17198736140.'],
    ],
  },
  'terms-of-use': {
    label: 'Legal',
    title: 'Terms of Use',
    intro: 'The terms that apply when you use this website and review our product references or digital prototype plans.',
    sections: [
      ['Website content', 'This website describes product concepts, prototype plans, and potential manufacturing or wholesale services. Product references are informational and do not create an order, manufacturing commitment, or guarantee of availability.'],
      ['Digital prototype plans', 'Digital plans are provided for study, inspiration, and further development. Unless a separate written agreement says otherwise, purchasing a plan does not grant a right to represent the concept as your own original work, resell the files, or use the files in a way that infringes third-party rights.'],
      ['Manufacturing requests', 'A manufacturing or wholesale enquiry is not an accepted order. Specifications, quantities, pricing, lead times, certifications, ownership, and delivery terms must be agreed in writing before work begins.'],
      ['Acceptable use', 'You agree not to misuse the website, interfere with its operation, scrape it in a way that harms the service, or use its content for unlawful purposes.'],
      ['Changes', 'We may update these terms or website content as the company and product catalog develop. The latest version published on this page applies to future use.'],
    ],
  },
  'refund-policy': {
    label: 'Purchases',
    title: 'Refund & Digital Products',
    intro: 'Information for digital prototype plan purchases and manufacturing enquiries.',
    sections: [
      ['Digital prototype plans', 'Because digital plans can be accessed or downloaded immediately, digital purchases are generally final once delivery or access has started. If a file is corrupted, materially incomplete, or not delivered, contact us promptly at contact@yuyoukang.com so we can investigate and provide a reasonable remedy.'],
      ['Payment platform', 'Digital plans may be sold and paid for through Buy Me a Coffee. Payment processing, receipts, and any platform-level purchase rules are handled by Buy Me a Coffee. Contact us first with the purchase details so we can help resolve a delivery issue.'],
      ['Manufacturing and wholesale', 'Manufacturing, sourcing, and wholesale discussions are handled by separate written proposals or orders. Any deposit, cancellation, delivery, inspection, or refund terms will be stated in the applicable agreement before payment.'],
      ['Request help', 'Include the email used for purchase, the plan or product name, and a short description of the issue when contacting contact@yuyoukang.com or +86 17198736140.'],
    ],
  },
} as const;

type LegalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug as keyof typeof legalPages];
  return page ? { title: `${page.title} | Liu Yu`, description: page.intro } : {};
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPages[slug as keyof typeof legalPages];
  if (!page) notFound();

  return (
    <main className="legal-page">
      <nav className="nav shell" aria-label="Legal page navigation">
        <a className="brand" href="/" aria-label="Liu Yu home"><img className="brand-logo" src="/logo.svg" alt="Liu Yu · Yuyoukang Trading" /></a>
        <a className="nav-cta" href="/">Back to home <span>↩</span></a>
      </nav>
      <article className="legal-content shell">
        <p className="eyebrow"><span className="eyebrow-dot" /> {page.label}</p>
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>
        <p className="legal-updated">Last updated: October 16, 2026</p>
        <div className="legal-sections">{page.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</div>
      </article>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Haikou Yuyoukang Trading Co., Ltd</span><span>Business address: 海南省海口市龙华区城西镇布沙路9983楼号1022房 · 海口市, 海南省, 570100<br />Israel office: לח״י 31, Lekhi St 21, Bnei Brak, Israel</span><a href="/">Back to home ↑</a></div></footer>
    </main>
  );
}
