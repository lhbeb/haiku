export type Product = {
  slug: string;
  label: string;
  name: string;
  spec: string;
  use: string;
  description: string;
  image?: string;
};

export const products: Product[] = [
  { slug: 'power-beast-rc1000', label: 'Portable power', name: 'Power Beast RC1000', spec: '999Wh · 1000W AC output', use: 'Camping, RV, emergency backup', description: 'A portable power concept for outdoor use, mobile work, and emergency backup applications.', image: '/power-concept.png' },
];
