import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABVPK & Associates | Chartered Accountants',
  description: 'ABVPK & Associates — a multi-partner Chartered Accountancy firm with a Head Office in New Delhi and branches across Faridabad.',
  keywords: ['ABVPK & Associates', 'Chartered Accountants', 'CA firm', 'New Delhi', 'Faridabad', 'Income Tax', 'GST', 'Audit', 'Accounting'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
