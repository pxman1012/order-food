'use client';

import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles/GlobalStyle';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}