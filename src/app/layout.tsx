import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Xchange — Send Money Worldwide from the USA",
  description:
    "Atlantic Xchange offers the best exchange rates and lowest fees for international money transfers from the USA. Send to 150+ countries — fast, secure, and reliable.",
  keywords: [
    "money transfer USA",
    "send money abroad",
    "best exchange rates",
    "international wire transfer",
    "Atlantic Xchange",
    "send money to Middle East",
    "SEPA transfer USA",
  ],
  openGraph: {
    title: "Atlantic Xchange — Send Money Worldwide from the USA",
    description:
      "Best exchange rates · Zero hidden fees · Lightning fast transfers to 150+ countries.",
    type: "website",
    locale: "en_US",
    siteName: "Atlantic Xchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlantic Xchange — Send Money Worldwide",
    description: "Best exchange rates & lowest fees for international transfers from the USA.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster Google Fonts load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter — body text | Outfit — headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
