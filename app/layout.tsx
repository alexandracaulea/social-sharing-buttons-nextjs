import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  weight: 'variable',
  style: ['italic', 'normal'],
  variable: '--font-rubik',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
