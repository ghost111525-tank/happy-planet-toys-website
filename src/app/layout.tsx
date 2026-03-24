import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export const metadata: Metadata = {
  title: '欢乐星球 - 儿童玩具乐园',
  description: '最好的儿童玩具，充满童趣与快乐！',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={nunito.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
