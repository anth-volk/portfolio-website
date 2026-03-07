export interface Page {
  slug: string;
  name: string;
  href: string;
  color: string;
}

export const pages: Page[] = [
  { slug: 'home', name: 'Home', href: '/', color: 'var(--red)' },
  { slug: 'experience', name: 'Experience', href: '/experience', color: 'var(--blue)' },
  { slug: 'writing', name: 'Writing', href: '/writing', color: 'var(--red)' },
];
