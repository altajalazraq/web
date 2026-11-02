import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://altajalazraq.com"),
  title: "Al Taj Al Azraq | General Contracting, Riyadh",
  description:
    "Al Taj Al Azraq is a general contracting company based in Riyadh, Saudi Arabia. Our new website is on its way.",
  openGraph: {
    title: "Al Taj Al Azraq | General Contracting",
    description: "General contracting in Riyadh, Saudi Arabia. New website coming soon.",
    url: "https://altajalazraq.com",
    siteName: "Al Taj Al Azraq",
    locale: "en_SA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
