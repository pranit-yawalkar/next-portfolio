import type { Metadata } from "next";
import { Inter, Merriweather as merriweather, Balsamiq_Sans as Balsamiq } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const Merriweather = merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: '--font-merriweather'
});
const bolsomiq = Balsamiq({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-bolsomiq'
});

export const metadata: Metadata = {
  title: "Pranit Yawalkar - Portfolio",
  description:
    "Hi, I'm Pranit Yawalkar. I'm a Software Developer this is my personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Merriweather.variable + ' ' + bolsomiq.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
