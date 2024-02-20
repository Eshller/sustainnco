import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sustain&Co.",
  description:
    "Sustain&Co. is India's first voluntary carbon credits trading platform. Our vision is to make carbon credit trading accessible and simplified for every individual in India. Our unique incorporation of CSR points ensures your investments align with corporate social responsibility, contributing to a sustainable future. Join us in redefining impact investing in India, where financial gains and environmental responsibility converge seamlessly at Sustain&Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
