import { Inter } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children} : {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
