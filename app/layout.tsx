import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Providers } from '@/globalRedux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Livelink Assesment',
    description: 'This project is for LiveLink'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="mb-5">
                    <Header />
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    );
}
